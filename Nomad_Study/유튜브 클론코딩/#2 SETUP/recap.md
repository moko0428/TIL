# 2.0 Your First NodeJS Project

- package.json: 프로그래머가 파일에 정보를 저장하기 위해 만든 방식 중 하나이다.

```json
{
  "name": "wetube"
}
```

- npm init : pakage.json 파일을 만들 수 있게 도와주는 명령어.

# 2.1 Installing Express

- scripts : node index.js를 npm 보고 실행하라고 한다.

```js
// index.js
console.log("Hello NodeJS");
```

```json
"scripts": {
    "win":"node index.js"
}
```

```npm
npm run win -> Hello NodeJS
```

- npm i express : 두 개의 폴더와 파일이 생성된다.
  - node_modules : npm으로 설치한 모든 패키지가 저장된다.
    - express의 package.json
      - dependencies : express가 작동되려면 필요한 패키지들을 말한다. 마치 집 나갈 때 핸드폰을 꼭 들고 나가는 것처럼 핸드폰이 dependency가 되는 것
  - package-lock.json
- npm이 체인처럼 연결된 dependencies를 해석해서 모든 폴더들을 다운 받아준다.

# 2.2 Understanding Dependencies

- npm install : npm이 dependencies를 확인해서 필요한 모듈들을 알아서 설치해준다.
- node_modules 폴더의 크기가 엄청나기 때문에 다른 사람에게 공유할 시 이 폴더를 삭제하고 공유를 해준다. 왜냐 npm install을 하면 npm이 알아서 설치를 해주기 때문에.

# 2.3 The Tower of Babel

- Babel : 바벨은 자바스크립트의 컴파일러이다.
- NodeJS는 자바스크립트 코드를 이해하지만 최신 자바스크립트 코드는 이해를 못할 수도 있다.
- 해결방법은 nodeJS가 이해하는 자바스크립트만 쓰거나, babel을 쓰는 것이다.
- babel은 우리가 작성한 최신 자바스크립트를 컴파일 해줄것이다.
  - nodeJS가 자바스크립트를 문제없이 이해하도록 변환해준다는 것.
- 따라서, 사용하는 이유는 우리가 작성한 최신 자바스크립트를 nodeJS가 이해할 수 있는 자바스크립트로 변환하는 것.

## 2.3.1 nodeJS를 위한 babel 설치 방법

`npm install --save-dev @babel/core`

- devDependencies : 개발자에게 필요한 dependencies
  - dependencies는 프로젝트를 실행하기 위해 필요한 것.
  - devDependencies는 개발자를 위해 필요한것.
- --save-dev은 devDependencies에 설치하게 된다.
- babel.config.json

```json
// babel.config.json
{
  "presets": ["@babel/preset-env"]
}
```

```json
  // package.json
"devDependencies": {
    "@babel/core": "^7.22.10",
    "@babel/preset-env": "^7.22.10"
  }
```

- preset : babel을 위한 엄청 거대한 플러그인이다.
  - preset을 이용하면 최신 자바스크립트 구문을 사용할 수 있게 해준다.

# 2.4 Nodemon

- npm install @babel/node --save-dev : nodeJS를 위한 바벨 설치 명령어
- npm run dev으로 scripts를 실행하려면 코드를 수정할 때마다 npm run dev을 사용해 실행하는 것이 번거롭다.
- 그래서 nodemon을 사용한다.
- nodemon은 우리가 만든 파일이 수정되는 걸 감시해주는 패키지이다. 파일이 수정되면 nodemon이 알아서 재시작 해주는 것이다.

- npm i nodemon --save-dev : nodemon 설치 명령어

### 1. index.js node로 실행하기

```json
"scripts":{
    "dev":"node index.js"
}
```

### 2. babel로 변환해서 index.js 실행하기

```json
"scripts":{
    "dev":"babel-node index.js"
}
```

### 3. nodemon으로 index.js 실행하기

```json
"scripts":{
    "dev":"nodemon --exec babel-node index.js"
}
```
