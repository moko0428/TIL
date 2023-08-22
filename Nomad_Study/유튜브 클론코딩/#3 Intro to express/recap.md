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
