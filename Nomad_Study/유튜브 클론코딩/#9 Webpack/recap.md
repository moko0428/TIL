# 9.0 Webpack

- 프론트엔드에서 자바스크립트 코드를 작성하면 모든 브라우저에서 인식 가능한 자바스크립트로 바꿔주는 무언가가 필요하다. 그것이 **"웹팩"**
- 유사로 Gulp가 있다.
- 사실상 웹팩을 사용할 일은 별로 없지만 동작원리를 미리 알아둔다면 좋겠죠?

# 9.1 Webpack Configuration

- 웹팩으로 뭐를 할 수 있는가? 상상하는 모든 걸 처리할 수 있다.
<hr>

- devDependency에 설치
- npm i webpack webpack-cli --save-dev(-D)
<hr>

- Webpack.config 설정
- entry : 우리가 처리하고자 하는 파일들, 소스코드
- output : 결과물을 뜻하며 filename, path 속성을 갖는다.

```js
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: "./assets/js",
  },
};
```
