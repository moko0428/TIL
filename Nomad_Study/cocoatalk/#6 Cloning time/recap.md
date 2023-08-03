# 6.0 Introduction

- .gitignore는 무시하고 싶은, github에 공개하고 싶지 않은 파일 이름을 기록하는 파일이다.
- .filename으로 작성된다.

```js
.home
```

# 6.1 Sign Up Screen

- 대부분의 웹 서버가 디폴트로 index.html을 찾아보도록 설정되어 있다.
- 영어에서 'index'는 '첫 번째'라는 의미이다.
- VSC 단축키
  - ! : html 기본 도큐먼트가 설정되어 있다.
- class의 이름은 직관적으로 할수록 유지보수에 용이하다.
  - `class="column" (x) class="status-bar__column" (o)`

# 6.2 BEM

- BEM(Block Element Modifier) : 직관적이고 좀 더 쉽게 읽히는 css

> [BEM 관련 정리 블로그](https://nykim.work/15)

> [BEM 공식 docs](http://getbem.com/introduction/)

# 6.3 Font Awesome

- Heroicons
- FontAwesome : code kit를 사용.
  - `<script src="https://kit.fontawesome.com/6478f529f2.js"crossorigin="anonymous"></script>`
  - script 코드는 항상 코드 끝 부분에 두어야 한다.

# 6.4 Status Bar CSS

- css 링크 단축키 : `link:css` => `<link rel="stylesheet" href="style.css"/>`
- font-family: html의 폰트를 지정할 수 있는 css 속성.
  > [구글 폰트](https://fonts.google.com/)
- css hack : justify-content: space-btween을 적용했을 때 내 생각과는 다르게 정렬될 때가 있다. 이럴 때 써먹을 수 있는 치트키 같은 방법.
  - justify-content를 center로 두고 모든 column에 width를 33%를 가지게 한다.

# 6.5 Sign Up Screen

- 브라우저는 알아서 html에 적용시키는 기본 스타일이 있다.
- reset css는 브라우저의 기본 스타일을 모두 초기화 시키는 css 파일이다.
- text 가운데 정렬 : `text-align:center;`
- 양옆에 공백 : 부모 엘리먼트에 `display:flex; flex-direction:column; align-items:center;` 자식 엘리먼트에 `width:50%` width로 글자 간격을 맞춘다.

# 6.6 Log In Form

- css에서의 not은 속성을 제외 시킬 때 사용한다.
- inherit은 부모 엘리먼트로부터 값을 가져온다는 뜻이다.

## Form의 속성

- action: 어떤 페이지로 data를 보낼건지 지정할 수 있다.
  `<form action="friends.html">`
- method: 2가지 방식 중 한가지를 쓸 수 있다.

### Method의 두 가지 방식

- POST: 백엔드 서버에 정보를 전송하는 방식이다.
- GET:

1. 보안에 취약하다. username, password를 GET 방식으로 보내면 안된다.
2. URL에 포함되어도 상관없는 정보들을 GET 방식으로 보낸다.

# 6.7 Navigation Bar

- 보통 링크 리스트를 일컫는 말.
- VSC 단축어 : `nav>ul>li*4>a`
- 상태바와 네비게이션바 위 아래 고정 시키기 : position을 fixed로 주고, 위에 고정이면 top: 0, 아래 고정이면 bottom:0, 그리고 width를 100%주고 box-sizing:border-box를 준다.

# 6.8 Border Box

- padding의 값만큼 box 사이즈를 늘리지 않는 것.

# 6.9 Screen Header

# 6.10 Friends Screen

- text-align:center는 display가 block일 때 동작함.
  - 이유는 지정된 너비에서 가운데로 가야하기 때문

# 6.11 User Components

- 사진 비율 유지 : object-fit:cover;
