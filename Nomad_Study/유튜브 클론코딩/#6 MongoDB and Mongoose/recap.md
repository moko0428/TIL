# 6.0 Array Database

- href="edit"과 href="/edit"의 차이점.

`localhost:4000/profile/edit-profile/password`의 url이 있다고 가정하면.

- href="edit"은 (relative url)

localhost:4000/profile/edit-profile/password/edit으로 이동하고

- href="/edit" (absolute url)
  localhost:4000/edit 으로 이동한다.

# 6.1 Edit Video

- post 방식은 파일을 보내거나 database에 있는 값을 바꾸는 뭔가를 보낼 때 사용

```js
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
```

- route를 이용해 두줄을 한줄로 줄일 수 있다.

```js
return res.end();

return res.redirect();
```

- res.redirect();은 브라우저가 redirect(자동으로 이동)하도록 하는 것.
- 브라우저는 우리가 준 url로 이동한다.
- 즉, Edit Video를 누르고 save 버튼을 누르면 watch 페이지로 돌아가도록 하는 것이다.

```js
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};
```

- 먼저, 유저가 getEdit으로 온다.
- 그러면 우린 편집용 form을 render 시켜주고, 유저가 submit 하면 우리의 post request로 이동해서 postEdit이 처리해 줄텐데, postEdit은 route로부터 id를 얻어와서 /videos/id 페이지로 redirect 시켜준다.

- app.use(express.urlencoded({ extended: true }));
- 우리의 express application이 form의 value들을 이해할 수 있도록 하고, 우리가 쓸 수 있는 자바스크립트 형식으로 변형시켜준다.

# 6.7 Introduction to MongoDB

- 다목적용, document를 기반으로 한다.
- 현대의 애플리케이션 개발자를 위해 만들어진 분산 데이터베이스.
- JSON-like-document, 행으로 된 데이터를 저장할 필요가 없다.

# 6.8 Connecting to Mongo

- mongoose : node.js와 mongoDB를 이어주는 다리 같은 역할
- 우리가 자바스크립트로 적으면, mongoose가 mongoDB에게 변환해서 전해준다.

```js
mongoose.connect("mogodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);
db.on("error", handleError);
db.once("open", handleOpen);
```

# 6.9 CRUD

- C : create
- R : read
- U : update
- D : delete

# 6.10 Video model

- 비디오 파일의 데이터 형식을 정의하기

```js
import mongoose from "mongoose";

// Create a Movie Model here.
const movieSchema = new mongoose.Schema({
  title: String,
  sumary: String,
  year: Date,
  genres: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Movie = mongoose.model("movie", movieSchema);
export default Movie;
```

# 6.11 Our First Query

- 앞으로 더 많은 임포트를 하게 되기 때문에 init.js 파일로 임포트를 따로 관리해준다.

- Model.find() : 두 가지 사용법이 있다.

1. callback :

```js
export const home = (req, res) => {
  console.log("Start");
  Video.find({}, (error, videos) => {
    if (error) {
      return res.render("server-error");
    }
    return res.render("home", { pageTitle: "Home", videos });
  });
  console.log("I finish first");
};
```

- 무언가가 발생하고 난 다음 호출되는 function을 말한다.
- 자바스크립트에서 기다림을 표현하는 하나의 방법이라고 생각하면 된다.
- 무언가가 발생한 다음(then) 어떤 것을 한다는 식의 말의 뜻은 어떤 것들은 실행과 동시에 적용되지 않기 때문이다.
- 예로 PORT 같은 경우엔 4000 PORT에 연결을 해야하는데, 해당 코드는 바로 실행되지 않을 수 있다는 것이다. (백만분의 일초라 해도 결과값 도출을 기다려야한다는 것)
- 즉, find() 또한 데이터가 완전히 전송될 때까지 기다려야 한다.
- `find({}, (error, documents))` : 중괄호는 search terms를 나타내는데, 비어있으면 모든 형식을 찾는다는 것을 뜻한다.
  - 이것으로 모든 형태의 비디오를 찾게 되고, 다음 단계로 callback을 전송하는 것이다.
  - callback은 err와 docs라는 signature를 가진다.

2. promise

```js
export const home = async (req, res) => {
  console.log("I start");
  const Videos = await Video.find({});
  console.log("I finish");
  console.log(videos);
  return res.render("home", { pageTitle: "Home", videos });
};
```

차이점은 await을 find 앞에 적으면, find는 우리가 callback을 필요로 하지 않는다는 것을 알게 되는 것.
그렇기에 find는 찾아낸 비디오를 {}(find operation)의 결과값으로 바로 출력해준다.

> 🤔 그럼 에러는?
> 에러를 출력하기 위해서는 try catch 문을 사용한다.

```js
export const home = async (req, res) => {
  try {
    console.log("I start");
    const videos = await Video.find({});
    console.log("I finish");
    console.log(videos);
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};
```

- await만 있다면 자바스크립트는 계속 기다려줄것이다.
- 언제까지? database에게 결과값을 받을 때까지
- 그리고 async와 await은 callback 보다 더 최신 기술이다.
- 그 둘의 최대 장점은 직관적이다.
- 왜냐 자바스크립트가 어디서 어떻게 기다리는지를 바로 알 수 있기 때문이다.

# 6.12 Returns and Renders

- return 은 function을 종료시켜주는 기능을 한다.
- return은 필수가 아니고 필요한 function만 불러주면 된다.

# 6.13 Creating a Video

- 비디오 업로드를 위한 document

```js
export const postUpload = (req, res) => {
  const { title, description, hashtags } = req.body;
  const video = new Video({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });
  console.log(video);
  return res.redirect("/");
};
```

# 6.14 Edit Video

- Model.findByIdAndUpdate() : 한번에 찾고 업데이트
- new Model & Mode.save() : Model.create()와 유사
- Model.exists로 video object 전체가 아닌 조건 유무를 true, false로 판단해서 검색한다.
- node 모듈 mongoose를 활용해서 데이터를 생성하면 \_id를 자동 생성,
  이 자동 생성된 \_id와 .id 모두 접근이 가능하고 .id로 조회하면 string, .\_id로 조회하면 object가 반환된다.
- 생성이나 업데이트 전 작동해야할 function의 필요성 -> Mongoose의 Midleware 활용

# 6.15 Middlewares
