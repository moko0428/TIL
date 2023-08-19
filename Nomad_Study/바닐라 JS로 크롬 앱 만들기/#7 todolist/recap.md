# 7.0 Setup

# 7.1 Adding ToDos

- js로 HTML 태그를 만들기
- document.createElement() : html 태그 생성
- li.appendChild(span) : 태그안에 요소 넣기

# 7.2 Deleting To Dos

- 삭제 버튼 만들기
- 특정 li 지정해서 삭제하기
- e.target.parentElement

# 7.3 Saving To Dos

- JSON.stringify() : 자바스크립트 오브젝트나 배열 또는 어떤 자바스크립트 코드건 간에 string으로 바꾸어준다.
- JSON.parse() : 반대로 number 형태로 바꾸어준다.

# 7.4 Loading To Dos

- forEach() : 배열의 요소 만큼 함수를 실행해준다.

```js
const parsedToDos = [1, 1, 1, 1, 1, 1, 1, 1];
function sayHello(item) {
  console.log("hello ");
}
parsedToDos.forEach(sayHello); // hello hello hello hello hello hello hello hello
```

## 단축해서 쓰기

```js
parsedToDos.forEach((item) => console.log("hello")); // hello hello hello hello hello hello hello hello
```
