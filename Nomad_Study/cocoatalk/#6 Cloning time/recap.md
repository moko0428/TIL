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
