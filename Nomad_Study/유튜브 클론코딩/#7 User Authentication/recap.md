# 7.0 Create Account

- 만드는 순서

1. Model

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  email: { type: String, require: true },
  email: { type: String, require: true },
  location: String,
});

const User = mongoose.model("User", userSchema);
export default User;
```

- 사용할 데이터 모델을 만들어준다.

2. router

```js
import express from "express";
import { getJoin, login, postJoin } from "../controllers/userControllers";
import { home, search, watch } from "../controllers/videosControllers";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;
```

- get을 route로 바꾸고, get과 post를 사용한다. (get, post를 받을 때)

3. controller

```js
export const getJoin = (req, res) =>
  res.render("join", { pageTitle: "Create Account" });
export const postJoin = (req, res) => {};
```

- router에 route에 맞게 getJoin, postJoin controller를 만들어준다.

4. render page(pug)

```js
extends base

block content
    form(method="POST")
        input(name="email", type="email", required, placeholder="Email")
        input(name="username", type="text", required, placeholder="Username")
        input(name="password", type="password", required, placeholder="Password")
        input(name="name", type="text", required, placeholder="Name")
        input(name="location", type="text", required, placeholder="Location")
        input(type="submit", value="Join")
```

- 페이지에 render할 내용을 만들어준다.

5. controller logic

```js
export const postJoin = async (req, res) => {
  console.log(req.body);
  //form에서 받은 데이터를 가져오기
  const { name, username, password, location, email } = req.body;
  await User.create({ name, username, password, location, email });
  return res.redirect("/login");
};
```

- postJoin의 로직을 작성한다.
- req.body로 form에서 받은 데이터를 가져온다.
- async, await으로 User 모델에 맞게 데이터를 생성한다.
- Join이 submit이 되면 res.redirect로 /login 페이지로 간다.

## DB에 비밀번호를 저장하면 안돼!

- 해싱은 일방향 함수이고 문자열이 필요하다. 1212->aksndoaijsd
- 우리의 DB에는 비밀번호를 저장하지 않고 해싱된 비밀번호를 저장한다.
- 입력을 하면 출력값이 나오는데, 출력값을 입력하면 입력값을 알아낼 수 없다.
- 컴퓨터과학으로 deterministic function(결정적 함수)라고 한다.
- bcrypt : Blowfish cipher 기반으로 만들어졌다.
- rainbow table : 해커가 해싱된 비밀번호를 가지고 할 수 있는 공격
- rainbow table 공격을 bcrypt가 막아준다.

```js
// /Model/User.js
userSchema.pre("save", async function () {
  console.log("User password: ", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashed password: ", this.password);
});
```

# 7.1 Form Vaildation

- 비밀번호 확인, 중복된 아이디 검사 로직

```js
if (password !== password2) {
  return res.render("join", {
    pageTitle,
    errorMessage: "Password confirmation does not match.",
  });
}
const exists = await User.exists({ $or: [{ username }, { email }] });
if (exists) {
  return res.render("join", {
    pageTitle,
    errorMessage: "This username/email is already taken.",
  });
}
```

# 7.2 Status Codes

- 중복된 아이디로 회원가입이 실패해도 브라우저는 성공으로 판단하여 패스워드를 저장할거냐 물어보는 alert 창이 뜨는데, 이것은 status code 가 200으로 완.전.성.공.적 이라는 뜻이다.

# 7.3 Login

```js
export const getLogin = (req, res) => res.render("login");
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.exists({ username });
  if (!exists) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "An account with this username does not exists.",
    });
  }
```

- 비밀번호 검사

```js
bcrypt.compare(userPassword, hash).then(function (result) {
  //result == true
});

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password",
    });
  }
  return res.redirect("/");
};
```

# 7.4 Session and Cookies

- 유저를 기억하는 방법 중 한가지는 유저에게 쿠키를 보내주는 것.
- 세션이란 백엔드와 브라우저 간의 어떤 활동을 했는지 기억하는 것
  - 예로, 노마드 홈페이지에 들어가면 현재 사용하고 있는 브라우저와 내가 만든 백엔드 사이에 세션이 존재하는 것이다.
  - 세션은 브라우저와 백엔드 사이의 memory, history 같은 것.
  - 이 세션이 작동하려면 백엔드와 브라우저가 서로에 대한 정보를 가지고 있어야 한다.
  - 왜냐? 이 로그인 페이지에서 HTTP 요청을 하면, 요청이 처리되고 끝나게 되는데, 그 이후로는 백엔드가 아무것도 할 수 없다.
    - 예로, Home 화면으로 이동하면 GET 요청을 보내게 되는데, 백엔드가 HTML을 render하고나면 연결이 끝나게 된다. (계속 연결 중이 아니라는 뜻) -> stateless
