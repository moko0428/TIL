# 3.0 The Document Object

## 3.0.1 document : 브라우저의 핵심 object

- 콘솔에 document를 입력하면, 작성한 html 코드를 가져올 수 있다.
- document는 브라우저에 이미 존재하는 object이다.
- 콘솔에서 console.dir(document)를 입력해보면 그냥 object 그 자체인것을 확인할 수 있다. 그렇다는건 document.~~~로 접근할 수 있다는 것.

## 3.0.2 접근 방법

1. 자바스크립트에서 HTML 읽어오기

   `> document.title` <br>
   `< "Momentum App"`

2. 자바스크립트에서 HTML 변경하기

   `> document.title = "Hi"` <br>
   `> "Hi"`

# 3.1 HTML in Javascript

- 수 많은 함수들을 이용하여 document 객체와 element를 가져올 수 있다.

1. document.getElementById("id");

   `document.getElementById("title");`

2. JS에서 HTML 코드 중 id="title"를 가진 element를 가져올 수 있다.

```js
const title = document.getElementById("title");
```

3. js코드에서 html element의 속성에 접근할 수 있다.

```html
<h1 id="title" class="hello">Grab me</h1>
```

```js
console.log(title.id); // "title"
console.log(title.className); //"hello"
```

# 3.2 Searching for elements

## 3.2.1 class에 접근하기

`<h1 class="title">Grab me</h1>`

`const title = document.getElementsByClassName("title");`

## 3.2.2 querySelector

`const title = document.querySelector(".title h1");`

- querySelector는 element를 CSS 방식으로 검색할 수 있다.
- 첫번째 element만 가져온다.

  2.1 querySelectorAll

`const title = document.querySelectorAll(".title h1");`

- h1이 들어있는 array를 가져다준다.

# 3.3 Events

- JS에서 대부분 작업할 일은, event를 listen 하는 것이다.

```js
// text color 바꾸기
title.style.color = "blue";
```

## 3.3.1 event란?

- click, hover, active, 입력을 끝내거나 적거나 enter를 누르는 행동들을 event라고 한다.

## 3.3.2 addEventListener("event", function)

- event를 listen 함, JS에게 무슨 event를 listen하고 싶은지 알려주어야한다.

```.querySelector(".title h1");

function handleTitleClick() {
  console.log("title was clicked!");
}js
const title = document

title.addEventListener("click", handleTitleClick);
```

- 유저가 title을 click할 경우에, JS가 나 대신 실행버튼을 눌러주게 하는 동작원리

- HTML element를 가져와서, addEventListener function을 실행시켜주면 되는데, 첫 번째 argument에 어떤 event를 listen하고 싶은지 명시해주고, 두 번째 argument에 실행시킬 함수를 적어준다.

> [Event에 관한 docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement)

# 3.4 More Events

- title.onclick = handleTitleClick;으로 표현할 수도 있다.

⭐하지만 addEventListenter를 더 사용하는 이유는 removeEventListener를 통해 event listener를 제거할 수 있기 때문이다.

## 3.4.1 window

body에 해당되는 것들을 event listen 할 수 있게 만든다.

- resize, wifi on/off 등
