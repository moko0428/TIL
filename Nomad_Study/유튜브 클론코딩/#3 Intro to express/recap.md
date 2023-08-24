# 3.0 My First Server

### 1. express 불러오기

```js
import express from "express";
```

npm은 똑똑하기 때문에 위 코드를 보고 우리가 express를 사용한다는 것을 알고 찾는다.

### 2. express application 만들기

```js
const app = express();
```

3. app이 listen 할 수 있게 해야한다.

> 🤔 app이 listen 해야 한다 했을 때 무엇을 listening 해야한다는 것일까?

- 서버는 항상 24시간 내내 온라인에 연결된 컴퓨터
- request(요청)를 listening 하고 있다.

> 🤔 request(요청)란?

- 만약 google.com을 들어간다면, 지금 google.com에 request(요청)를 보내는 것이다.
- 카카오톡 메세지를 보내는 것도 서버에 request(요청)를 보내는 것이다.
- 즉, 서버와 상호작용을 하는 모든 일들을, 서버는 liten 하는 것

```js
app.liten(port, callback);
```

- callback : 서버가 시작될 때 작동하는 함수
- callback을 작성하기 전에 서버에게 어떤 port를 listening 할지 얘기해줘야 한다.

> 🤔 port란?

- 컴퓨터의 문이나 창문 같은 것.
- 몇몇 port들은 인터넷에 오픈 되어 있다.

```js
const handleListening = () => console.log("Server litening on port 4000 🚀");

app.listen(4000, handleListening);
```

### 3. 서버에 접속하기

- 보통은 서버를 작동하면 localhost를 통해 접속할 수 있다.

- 검색창에 localhost:4000을 입력하면 Cannot GET / 이라고 responsse가 찍히게 된다.

- 다시 서버를 죽이게 되면 response를 받을 수 없는 상태가 된다.

#### 코드 리팩토링

```js
import express from "express";

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Server Listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);
```

# 3.1 GET Requests

### 1. 서버가 request에 respond하도록 하는 방법을 알아보자.

`Cannot GET /`

- Cannot : 말 그대로 가져올 수 없다.
- / : 서버의 root, 혹은 첫 페이지
- GET : HTTP의 method로, 페이지를 갖다 줘 같이 쓰인 것.

> 🤔 HTTP란?

- 서버끼리 의사소통하는 방법.
- 유저들이 웹사이트에 접속을 하려 할 때 브라우저가 대신해서 http request를 만들어 보내는 것이다.
- http request는 웹사이트를 접속하고 서버에 정보를 보내는 방법이다.

### 2. 서버에게 get request에 어떻게 응답해야 할지를 알려주자.

```js
app.get("/", () => console.log("Somebody is trying to go home."));
```

- 누군가가 어떤 route로, 이 경우엔 home으로 get request를 보낸다면, 반응하는 callback 함수를 작성한다.

- /lalaalla 를 가게 되면 바로 접속이 가능한데, / root로 접속을 하면 무한 로딩이 된다.
- 이것은 브라우저가 우리에게 get request를 보내고 있는 것이다.

# 3.2 Responses

- 어떻게 응답할 수 있을까?

- route 다루기
- express에서의 route handler엔 event는 없지만 object 두 개가 있다.

```js
const handle = (req, res) => console.log(~~~);
```

- express로부터 req, res를 받는다.
- request를 받았으면 response를 return 해야한다.
- 다시말해 브라우저가 request를 보내면, 우린 응답(response)를 해야한다.
- res.end() : response를 끝내는 함수
  - 서버가 응답하니 무한 로딩은 끝이나고, 서버가 request를 끝내버렸다.
- res.send("hi") : 메세지를 보내는 방법 /root화면엔 hi가 출력된다.

# 3.3 Middlewares

- 중간에 있는 소프트웨어
- request와 response 사이에 있다.
- 브라우저가 request 한 다음, 그리고 우리가 응답하기 전, 그 사이에 middleware가 있는 것.
- 모든 미들웨어는 handler이고, 모든 handler는 미들웨어이다.
- handler는 controller
- controller에는 두 개의 argument 말고도 하나가 더 있다.
- next : 다음 함수를 호출해준다.

```js
const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle!");
  next();
};
const handleHome = (req, res) => {
  return res.end();
};
app.get("/", gossipMiddleware, handleHome);
```

1. 브라우저는 홈페이지를 get하려 할 것이고,
2. express는 gossipMiddleware를 호출한다.
3. gossipMiddleware은 콜솔로그를 실행하고 next() 함수를 호출한다.
4. express가 next()를 보고, 다음 함수인 handleHome를 호출한다.

- next 함수를 호출한다면, 이 함수는 미들웨어라는 것을 의미한다.
- return res.send()를 실행해서 접속을 종료시켜버린다면 미들웨어가 될 수 없다.

```js
const gossipMiddleware = (req, res, next) => {
  console.log("I'm in the middle!");
  next();
};
const handleHome = (req, res) => {
  return res.send("I Love middlewares");
};
app.get("/", gossipMiddleware, handleHome);
```

- 터미널에선 그대로이다.
- exporess가 request를 확인하면 handler(컨트롤러)를 호출한다.
- 블루프린트를 확인해보면 "...handlers"가 보일텐데 이것은 함수의 서명(signature)이다.
- get은 path를 필요로 한다. path는 URL이고, handler에는 다수의 handler를 사용할 수 있다.
- 위의 코드 또한 두 개의 handler를 가지고 있고 그 중 하나가 미들웨어이다.
- next는 어디든 포함되어 있지만 handleHome에 next를 추가한다면 아무데도 가지 못한다. 이유는 handleHome 다음에는 아무것도 없기 때문.
- 미들웨어에서 return 을 반환하면 next의 동작은 실행하지 않는다.
- 미들웨어는 다음 함수에게 작업을 넘기는 함수이다. 응답하는 함수는 아니다.

---

- app.use() : global middleware를 만들 수 있게 해준다.
- 규칙은 middleware를 use하는게 먼저오고, 그 다음에 URL의 get이 와야한다.

```js
app.use(gossipMiddleware);
app.get("/", handleHome);
```

- 미들웨어를 위에다 두면, 모든 route에 적용되는 것이다.

```js
import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};
const handleHome = (req, res) => {
  return res.send("I Love middlewares");
};
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", logger, handleProtected);

const handleListening = () =>
  console.log(`Server litening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
```

- 미들웨어는 그냥 일반적인 컨트롤러와 같다.(next 함수 argument 하나가 추가된다는 점만 뺀다면)
- 미들웨어를 app 전체에 어떤 url 에서도 사용할 수 있도록 할 수도 있고,

```js
app.use(logger);
app.use(privateMiddleware);
```

- 미들웨어 하나의 url에만 사용되게 할 수도 있다.

```js
app.get("/", logger, handleHome);
app.get("/protected", logger, handleProtected);
```

- get 두 군데에 logger를 넣는 것은 `app.use(logger)`와 똑같다.
- 미들웨어가 next()를 호출하지 않으면 handleHome, handleProtected 같은 next 함수들은 절대 실행되지 않는다.
- privateMiddleware 처럼 뭔가를 return 하게 되면 연결을 종료시키게 된다.

```js
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);

// 위 3줄을 짧게 쓰면
app.get("/", logger, handleHome);
```

## Setup 요약

### package.json

- node.js 관련 정보를 담는 방법.
- package.json에 넣으면, npm이 어떤 행동을 할 수 있게 해주는 것들이 있다.
  - scripts entry를 생성하고 그 안에 script를 입력하면, 콘솔에 npm run (script 이름)을 사용할 수 있다.
  ```json
  //package.json
  "scripts":{
    "dev":"nodemon --exec babel-node src/server.js"
  }
  ```
  - package.json은 말 그대로 package이다. 그저 text일 뿐 새로운 것은 없다. (무엇을 입력하던 상관없다.)
  - 하지만 특정 장소에서 뭔가를 입력하면 npm이 그것을 사용할 수 있다.

### scripts

```json
"scripts":{
    "dev":"nodemon --exec babel-node src/server.js"
  }
```

- 위의 코드와 같이 아주 복잡한 script를 사용할 수 있게 해준다.
- 콘솔에 script 전체를 입력하게 하는 대신에 dev라는 별명을 주는 것이다.
- 그러면 nodemon --exec babel-node src/server.js 전체를 입력하는 것이 아닌 `npm run dev`으로 명령할 수 있다.

### dependencies

- 프로젝트가 돌아가기 위해 필요한 package들이다.

```json
 "dependencies": {
    "express": "^4.18.2"
  },
```

- 이 경우엔, express로 서버를 만들었기 때문에 이것이 없으면 서버를 돌릴 수 없을 것이다.
- express와 버전 정보는 express를 설치했을 때 자동으로 추가된 것.
  > npm i express

> 🤔 그럼 설치된 express는 어디로 들어갈까?

- node_modules로 들어간다.
- 우리가 설치한 모든 것들은 node_modules라는 폴더에 저장된다.
- node_modules 폴더는 git에 업로드 할 필요가 없다.

- package.json에 기록된 파일들은 npm install 만 하면 npm이 package.json에서 dependencies, devDependencies를 찾아서, 있는 모든 것을 자동으로 설치해준다.

### dependencies, devDependencies의 차이점

- dependencies는 `프로젝트가 작동`되기 위해 필요한 것
- devDependencies는 `개발자가 개발할 때` 필요한 것

### nodemon

```json
"scripts":{
    "dev":"nodemon --exec babel-node src/server.js"
  }
```

- 파일을 보고 있다가 변화가 생기면 commend를 재시작해준다.

### Babel

- nodeJS가 최신 자바스크립트를 지원하지 않을 때가 종종 있는데, babel은 nodeJS가 이해할 수 있게 최신 자바스크립트를 nodeJS로 변환해준다. 그래서 server.js를 node로 돌리는 것이 아니라 babel-node로 돌리는 것이다.
- babel-node를 사용하려면 babel.config.json이라는 파일을 만들어야한다.
- 우리가 babel에 추가하고 싶은 plugin을 넣는다.

```json
//babel.config.json
{
  "presets": ["@/babel/preset-env"]
}
```

## server 요약

- 서버는 항상 켜져 있고, 인터넷에 연결돼 있으면서 request를 listening하고 있는 컴퓨터이다.
- request는 우리가 서버에게 요청하는 것들
  - 브라우저에서 google.com을 가려고 하는 행동이 브라우저가 웹 사이트로 request를 보내는 것
  - 즉, 브라우저를 통해서 웹사이트에게 하는 모든 상호작용이 request이다.
  - 즉, 사용자는 브라우저를 통해서 request를 보내는 것.
- 이 행동을 listening하고 있는 서버에만 request를 보낼 수 있다.

```js
app.listen(4000, handleListening);
```

### 서버 동작 방식

```js
import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};
const handleHome = (req, res) => {
  return res.send("I Love middlewares");
};
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", logger, handleProtected);

const handleListening = () =>
  console.log(`Server litening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
```

1. node_modules/express에서 express가 import 되고 있다.
2. app 변수를 만들어 express() 함수를 넣는다.
   - express application을 바로 사용할 수 있게 return 해준다.
3. 서버는 port 4000만 listening 하고 있다.
   - 서버는 컴퓨터 전체를 listen할 수 없다.
   - 그래서 port가 있어야 한다.
   - port는 컴퓨터의 창문 같은 것.
   - 컴퓨터에는 많은 port들이 있는데, 다수가 개방되어 있고, 많은 프로그램들이 그 안에서 소통하고 있다.
   - request를 보낼 때, 해당 port로 request를 보내는 것이다.
   - 즉, 우리 서버는 창문 4000에 있는 것
   - 번호는 아무 번호나 상관 없지만, 4000번을 쓰는 것이 백엔드 관습이고, 4000번은 거의 항상 비어있다.
   - 높은 번호일수록 사용되고 있을 확률이 줄어든다.
4. handleListening 이 함수는 listening이 시작되면 호출되는 함수이다.
   - 이 파일을 실행시켜도 종료시키지 않는 한 서버나 콘솔은 죽지 않고 유지되고 있다.
5.

### HTTP method

- get : 서버에게 요청하면 브라우저가 보내주는 것.
  - app.get()
  - 두 개의 argument를 갖는다.
  - route
  - handler

## Controllers 요약

- 핸들러는 사실 컨트롤러 입니다?
- 컨트롤러는 request와 response가 있다. (사실 next로 있습니다?)
- request랑 response는 express가 제공하는 오브젝트이다.
- request 안에는 누가 웹사이트를 request하는지, cookies, 브라우저 정보, IP 주소 같은, request와 관련한 정보가 있다.
- response도 관련된 정보가 있다.
- express API를 보면 response에는 여러 method가 있다.
  - send() : message를 보내기 위한 메소드, 화면에 message가 출력된다.
  - end() : 연결을 종료시켜준다.
  - cookie() : cookie를 설정
- 브라우저는 응답해주길 기다린다. 응답해주지 않으면 브라우저는 계속 로딩만 하고, 웹 사이트는 느려진다.
- routes를 만들고 controllers를 만드는 것이 우리의 임무.

## Middelware 요약

- 미들웨어는 말그대로 중간에 있는 소프트웨어를 말한다.
- 무엇의 중간에? request와 response의 중간에.
- 미들웨어는 logger라고 불린다.

```js
const logger = (req, res, next) => {
  next();
};
```

- next()를 호출하게 되면?
- express가 다음 함수를 호출하게된다. 누군가 응.답.할 때까지
- 왜냐, 브라우저가 뭔가를 요청하고 있으니까 누군가 답해줘야 한다.
- 그래서 express가 logger에게 묻는 행동
- 즉, next()는 얘야, 응답을 해줄 수 있니? next(): 아니? 라고 하고 다음(next)로 요청을 보내는 것
- 그리고 다음 함수가 "응!"하고 받게 되면 연결이 종료된다.
- 대부분 마지막 함수가 응답하게 된다.
- 관습적으로, 응답을 해주는 마지막 컨트롤러는 next를 안쓴다.
- app.use() : global middleware

# 3.4 External Middlewares

- morgan : node.js 용 request logger middleware
- morgan을 사용하는 방법은 기존에 직접 만들어서 쓰던 middleware를 사용하는 방법과 유사하다.

## 3.4.1 morgan 사용방법

- 먼저 morgan 함수를 호출해서 함수를 설정해준다.
- morgan 함수를 호출하면, 우리가 설정한 대로 middleware를 return 해준다.
- app.use()를 사용하고, morgan을 import 한다.

```js
import morgen from "morgan";
...
app.use(morgen("dev")) // dev, short, tiny, common, combined 총 다섯 가지
```

- logger 함수를 호출하면, 다섯 가지 옵션이 있다.
- 위의 코드를 다르게 변형하면 아래와 같다.

```js
import morgen from "morgan";
const logger = morgen("dev");
...
app.use(morgen(logger))
```

> 🤔 그렇다면 기존의 logger와 morgan의 차이점은 뭘까?

- 차이점은 morgan이 좀 더 정교하다는 것.
- morgan은 GET, path, status code, 이 모든 정보를 가지고 있다.
- 위의 코드를 실행해보면, GET, /login, status code, 응답시간을 가지고 있다는 것을 확인할 수 있다.
- conbined : 시간, method, http 버전, 사용중인 브라우저, os 등 많은 것을 보여준다.

> 🤔 그럼 morgan은 next()가 있을까?

- morgan("dev")를 호출하면 req, res, next를 포함한 함수를 return 해준다.
