# 2.0 Our First HTML File

폴더명과 파일명은 **무.조.건.** 소문자로 지어줘야 한다.

코드를 작성 후 저장하고 브라우저에서 새로고침해야 브라우저에 그려진다.

# 2.1 Setup and Errors

- 브라우저의 장점 실수로 코드를 잘 못 작성하여도 사용자에게 콘텐츠를 제공해준다.
- 브라우저의 단점 브라우저가 무엇이 잘못된 것인지 알려주지 않는다.

# 2.2 Our First HTML Tag

- HTML Tag 사이에 넣은 텍스트는 무엇인가가 될 것이다.(title, div, span 등)
- 브라우저는 아무의미 없어도 이해하려고 한다.
- 브라우저는 정해진 태그만 사용한다.

# 2.3 More Tags and Prettier

- html에서 list의 종류는 두 가지.
  - ol(Ordered List) : 순서가 있는 리스트
  - ul(Unordered List) : 순서가 없는 리스트
    - 리스트는 항목(`<li> item </li>`)을 만들어주어야 함.

> prettier 익스텐션 사용

# 2.4 Tag Attributes

- `<a></a>` : anchor(닻), 링크 역할을 하며 속성엔 `href`, `target` 등이 있다.
  - `<a href="url"> contents </a>`
  - href : `HTTP reference`, `hyperlink reference`라고 함.
- `<img/>`: 이미지 태그, 닫힌 태그.
  - img의 속성 src가 img의 콘텐츠이다.
  - `<img src="url" />`

# 2.5 More Tags and Head

- `<!DOCTYPE html>`: 브라우저에게 이건 text파일이 아닌 html 문서라고 알려주기 위함.
- html 문서는 `<head>`와 `<body>`로 나뉜다.
  - head는 페이지에 관한 환경 설정을 해주는 곳.
  - body는 페이지의 컨텐츠를 작성해주는 곳.

# 2.6 Its All About the Head

- `<meta>`: 부가적인 정보. 속성으로 `content`와 `name`이 있다.

# 2.7 More Tags

> [mdn - HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

# 2.8 Form Tags

- `<input>` : 입력할 수 있는 칸
  - type에 따라 모양이 바뀜
- `<button>` : 클릭할 수 있는 버튼

# 2.9 More Tags and IDs

- id는 body 안에 어떤 태그에든 넣을 수 있는 속성
- id : unique identifier(고유식별자)
- 태그는 하나의 id만 가질 수 있다.
- label엔 `for`, input엔 `id`를 넣어주되, 같은 이름을 사용해야한다.
  - for, id를 넣어주면 label을 클릭해도 같은 이름을 쓰는 input이 포커싱된다.

# 2.10 Semantic HTML

- semantic tag : 의미가 담겨 있는 태그 이름
  - header, title, section, footer
- non semantic tag : 의미가 담겨 있지 않은 태그 이름
  - div, span
- div 떡칠 보단 의미가 있는 시맨틱 태그를 사용하는 것을 권한다.

# 2.11 요약

- VSC는 코드 작성이 잘못되면 빨간색으로 표시한다.
- 속성 값은 항상 " " 큰 따옴표 안에 작성한다.
- 모든 태그는 id를 가질 수 있다.
  - 반대로 src, href 같은 속성은 모든 태그가 가질 수 없다.
- 코드 자체에 의미 부여된 Semantic 태그를 잊지 말자.
  - Semantic 태그로 코드를 작성하는 것은 중요하다.
  - 모든 시맨틱 태그는 div 태그로 대체할 수 있다.
