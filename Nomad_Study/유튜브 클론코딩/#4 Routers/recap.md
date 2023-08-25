# 4.0 What are Routers?

- 라우터는 우리의 컨트롤러와 URL의 관리를 쉽게 해준다.
- 쉽게 말해서, 미니 어플리케이션을 만들게 해주는 것이다.

우리의 라우터를 만들기 전에 플랜을 적어둘 것이다.
라우터를 이해하는 가장 좋은 방법은 직접 만들어보고 프로젝트에 적용해보는 것.

프로젝트에 대해 생각해볼 때 가장 먼저 생각해야하는 것 `데이터`이다.

어떤 종류의 데이터를 이용할 것인가

wetube에는 크게 두 가지의 데이터가 있다.

첫 번째는 비디오(영상)이다.

- 유저는 영상을 업로드 할 수도 있고, 시청을 할 수도 있고, 수정할 수도 있고, 자막을 달 수도, 영상을 지울 수도 있다.

두 번째는 유저이다.

- 유저가 계정을 만들고, 유저가 로그인하고, 유저가 프로필을 보는 것, 프로필 수정, 삭제를 할 수 있다.

이 두 가지가 흔히들 말하는 우리 프로젝트의 도메인이다. `동영상과 유저`

이제 이 도메인을 URL의 차원에서 생각해보자.

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit user
/delete-user -> Delete user
/watch-video -> Watch Video
/edit-video -> Edit Video

그리고 그건 동양상 수정 페이지로 간다.

이제 보다시피 우리의 URL은 뭔가를 수정하거나 프로필을 삭제하거나 하는 행동들을 나타낸다.

/users/edit -> Edit user 를 /edit-user -> Edit user로 바꿀 수 있다.

/delete-user -> Delete user도 /users/delete -> Delete user로 바꿀 수 있다.

라우터는 우리가 작업중인 주제를 기반으로 URL을 그룹화해준다.

`/`users/edit `/`이것도 라우터라고 볼 수 있다.
루트에 아주 가까운 페이지만 가진 라우터 말이다.

`/` 이것을 글로벌 라우터(global router)라고 부른다.

# 4.1 Making Our Routers

```
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/users/edit -> Edit user
/users/delete -> Delete user

/videos/watch -> Watch Video
/videos/edit -> Edit Video
/videos/delete -> Delete Video
/videos/comments -> Comment on a video
/videos/comments/delete -> Delete A Comment of a Video
```

```
/ -> Home
/join -> Join
/login -> Login
/search -> Search
```

- 우리는 이 라우터를 글로벌 라우터(global router)라고 부를 것이다.
- 여기에는 홈에서 바로 갈 수 있는 페이지들을 담고 있으니..

> 🤔 누가 회원가입을 할까? 유저가 한다.

- 이 논리대로라면 우리는 `/users/join`, `/users/login`, `/videos/search`같은 걸 만들었어야 한다.

```
/join -> Join
/login -> Login
/search -> Search
```

- 어쩌면 이 세가지는 말이 안될 수도 있을 것이다.
- 이제 규칙의 예외사항에 대해 얘기할 시간이다.
- 우리는 일부 예외를 만들 것이다.
- 우리가 이 규칙을 백프로 따라야 하는 건 아니지만 가능한한 일맥상통하게 만들어줘야 한다.

```
/join -> Join
/login -> Login
/search -> Search
```

- 이 경우엔 `/users/join`, `/users/login`, `/videos/search` 이라고 하는게 말이 된다.
- 왜냐하면 회원가입을 하는 건 유저라는게 아주 명확하니까 그것을 유저 라우터에 넣는 것이다.
- 하지만 꼭 이렇게 해야할까?
- 예를 들어 노마드코더 같은 웹사이트가 하나 있다.
- nomadcoders.co/users/join으로 들어가게 되는 것은 별로 깔끔하진 않다.
- nomadcoders.co/join으로 들어가는 것이 더 깔끔하다.
- 가끔은 규칙을 어기고 예외를 만들기도 한다.
- 그럼으로써 URL은 깔끔해지고, 마케팅하는 사람이 편해지는 것

그래서 우리는 `/users/join`, `/users/login`, `/videos/search` 가 아닌

```
/join -> Join
/login -> Login
/search -> Search
```

를 사용할 것이다.

- 하지만 이전 섹션에서 설명한 규칙에도 예외가 있을 수 있다는 것이고, 우리도 예외를 만들 것이다.
- 왜냐? URL을 깔끔하게 줄이는게 보기 좋으니까
- 이번에는 처음부터 깔끔한 형식으로 만들지 않고, 막 만들고 나중에 정리해보자.

```js
const globalRouter = express.Router();
```

- 라우터를 만들었다.
- 유저 라우터를 만들어볼까?

```js
const userRouter = express.Router();
```

- 유저 라우터를 만들었다.
- 그럼 비디오 라우터를 만들어볼까?

```js
const videoRouter = express.Router();
```

- 비디오 라우터를 만들었다.
- 그럼 이제 라우터를 사용해볼까?

```js
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
```

- 이렇게하면 우리는 라우터를 쓸 수 있게 되었다.
- 이제 라우터에 들어갈 함수를 만들어보자.

```js
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");
```

- 우리는 어떻게 로그인을 위한 request를 서버가 이해하도록 했었지?

`app.get("/login", handleLogin);`

- 하지만, app.get 대신 router.get을 사용할 것이다.

```js
import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server litening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
```

- 실행을 해보면 정상적으로 작동되는 것을 볼 수 있다.
- 우리는 `"/video/watch"`를 쓴적이 없다.
- 근데 왜 됐을까? 그것은 우리는

```js
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);
```

- 여기 있는 라우터를 이용한 것이다.
- 그래서 이 라우터가 express한테, 누군가가 "/videos"로 시작하는 url에 접근하면 videoRouter에 있는 컨트롤러를 찾게하는 것이다.
- 그리고 그 컨트롤러 안의 라우터 안에는 "/watch"라는 url이 하나 있다.
- 그러니 우리는 videos 안의 "/watch" 에 있는 것이다.
- 이것이 "/videos/watch" 라는 url이 만들어진 방법이다.
- 그 다음에는 Express가 handle 함수를 실행하는데, 그럼 `res.send("watch video")`를 반환하게 되는 것이다.
- 여기까지가 정돈되지 않은 라우터가 작동하는 방법이다.

# 4.2 Cleaning the Code

- 보통 개발을 할 때는 처음부터 코드를 깔끔하게 작성하는 편이 아니다.
- 일단 머릿속에 있는 로직을 코드로 작성하고 원하는 데로 코드가 완성이 되면 그 후에 코드를 깔끔하게 정리하는 것이다.

> 관련 도서 "clean code"

- 컨트롤러와 라우터로 나누어 정리해보자.
- routes라는 새폴더를 만들자.
  - 각각의 라우터 이름으로 파일을 생성해 모듈로 만들어 분리하자.

```js
//globalRouter.js
import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);
```

```js
//userRouter.js
import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);
```

```js
//videoRouter.js
import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);
```

- 다음엔 server.js에선 오류가 생기니 각각의 모듈을 다시 server.js로 데려오자.
- 데려오는 방법은 알다시피 import해서 가져온다.
- 그전에 해야할 것이 있는데, 그것은 `export`이다.
- 왜냐하면 말했듯이 모든 파일은 모듈이다. 그리고 아직 이 파일 안에 있는 모든 것은 다른 파일로부터 완전히 private 상태이다.
- 그렇기 때문에 설령 내가 globalRouter.js 모듈에 handleHome을 하나 더 만들어도 전혀 문제가 되지 않는다.
- 자바스크립트는 아무런 에러도 없다고 할 것이다. 왜냐? 모든 파일이 독립되어 있기 떄문
- 그러나 파일을 통째로 import 하고 싶지 않다.
- 라우터만 import 하고 싶다, 변수만 import 하고 싶다.
- 그러기 위해선 `default export`에 대해 알아야 한다.
- 우선 우리는 글로벌 라우터를 만들었고 라우터를 설정했고, 디폴트로 글로벌 라우터를 export하려고 한다.

`export default globalRouter;`

- 이렇게 하면 globalRouter를 export하고 있는 것이다.
- 그래서 누구든 globalRouter.js를 import 하면, globalRouter 자체를 import하게 될 것이다.
- 우선 지금은 일단 이 변수를 (globalRouter) export하고 있다.
- export를 하지 않으면 에러가 생기게 된다.
- 에러의 내용은 "Router.use는 오브젝트가 아닌 미들웨어 함수가 필요하다"이다.
- 우리의 프로젝트에 있는 모든 파일은 분리된 모듈이다.
- 그래서 무언가를 바깥에 공유하기 위해서는 반드시 export를 먼저 해줘야한다.
- 우리는 `export default`를 하고 있기 때문에 import로 불러올 때 이름을 변경할 수 있다.

```js
import globalRouter from "./routers/glovalRouter";

import global from "./routers/glovalRouter";
```

- 왜냐하면 ``export default"를 하고 있기 때문에 어떤 이름을 선택하던 상관 없다.

```js
// globalRouter.js
import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

export default globalRouter;
```

```js
//userRouter.js
import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

export default userRouter;
```

```js
//videoRouter.js
import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;
```

```js
// server.js
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`Server litening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
```

- 실행해보면 정상 작동하는 것을 볼 수 있다.

# 4.3 Exports

- export와 export default의 차이는 export는 여러개를 할 수 있고, export default는 한가지만 할 수 있다.
- export default로 한 모듈을 import할 때 이름을 바꾸어줄 수 있었던 이유는 한개만 export 하기 때문이다.
- 반면 export 는 여러 개가 있을 수 있기 때문에 다른 이름으로 바꾸어 줄 수 없다.
- export const로 import 할 때엔 `{user, video} from "./routes/globalRouter"`처럼 오브젝트로 import 한다.
- router와 controller를 다시 분리하자.

```js
// /controllers/userControllers.js
export const join = (req, res) => res.send("Join");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
```

```js
// /controllers/videoControllers.js
export const trending = (req, res) => res.send("Home Page Videos");
export const watch = (req, res) => res.send("Watch");
export const edit = (req, res) => res.send("Edit");
```

```js
// /routers/globalRouter.js
import express from "express";
import { join } from "../controllers/userControllers";
import { trending } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
```

```js
// /routers/userRouter.js
import express from "express";
import { edit, remove } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
```

```js
// /routers/videoRouter.js
import express from "express";
import { watch, edit } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
```
