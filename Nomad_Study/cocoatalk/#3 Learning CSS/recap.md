# 3.0 How to Add CSS to HTML

- css 코드를 추가하는 방법은 두 가지이다.

1. 같은 HTML 파일에 HTML 코드와 CSS 코드를 놓는 방법
   - ` <style></style>` 태그 안에 코드를 작성한다.
   - `<head></head>` 안에 작성되어야 한다.
2. CSS 파일을 만든다.
   - `<link>` 태그를 통해 CSS 파일을 불러온다.
     - `<link href="style.css" rel="stylesheet /> `

- 둘 중 더 좋은 방법은 2번인 CSS 파일을 분리해서 만드는 것이다.
  - 이유는 CSS 파일 하나로 많은 HTML 파일에 적용할 수 있기 때문이다.

# 3.1 Writing Our First CSS Lines

- CSS 코드를 작성할 시 3가지 규칙

1. 가리키는 대상인 selector를 쓴다.
2. color와 같은 속성을 쓰고 blue, 값을 쓴다.
3. 띄어쓰기, \_밑줄, /슬래시를 사용하지 않고 -하이픈을 사용한다.

```css
ex)
h1 {
  color: blue;
}
```

# 3.2 What Does Cascading Mean

- 브라우저가 CSS 코드를 읽을 때 위에 있는 코드부터 차례차례로 읽는다는 뜻.
  - 같은 대상을 지정한 CSS 스타일은 마지막 줄의 스타일이 적용된다.

# 3.3 Blocks and Inlines

- block은 옆에 아무것도 올 수 없다. (div)
- inline은 옆에 올 수 있다. (span)

# 3.4 Margin & Padding & Border

- div(block)을 span(inline)으로 혹은 반대로 바꾸는 방법

```css
div {
  display: inline;
}
span {
  display: block;
}
```

- block은 높이와 너비가 `있고` inline은 높이와 너비가 `없다.`
- block은 box이고, box엔 특징 세 가지가 있다.

### margin

- margin은 box의 border(경계)의 바깥에 있는 공간이다.
- 브라우저는 자동으로 box에게 `margin: 8px`의 기본값을 준다.
- margin-top, -bottom, -left, -right로 각각 다른 값을 줄 수 있다.
  - `margin: 20px` : 상하좌우 20px
  - `margin: 20px 10px` : 상하 20px, 좌우 10px
  - `margin: 5px 10px 15px 20px`: 상 5px, 우 10px, 하 15px, 좌 20px
- Collapsing margins
  - 상하에만 발생한다.
  - 아! 경계가 닿아서 margin이 같아 졌나 보구나!

### padding

- box의 경계로부터 안쪽에 있는 공간

### border

- box의 경계선
- `border: 두께, 선 종류, 선 색깔`로 정의한다.
- `border-radius` : 모서리의 각도

# 3.8 Classes

- class는 여러 개 가질 수 있다.
  > [CSS selector game](https://flukeout.github.io/)

# 3.9 Inline Block

- 좋지 않는 방법

# 3.10 Flexbox

- 2차원 레이아웃에서 유용한 방법
- 부모 엘리먼트에 적용한다.
- block box들을 수직으로 옮긴다.
- 주축(main axis), 교차축(cross axis)가 있다.
  - 자식 엘리먼트에서 justify-content(주축), align-items(교차축)으로 box를 옮길 수 있다.

# 3.12 Fixed

- position의 속성 중 하나.
- 화면에 고정이 된다.
- 레이어의 위치가 달라진다. (기존에 있던 컨텐츠는 레이어가 1이라면 Fixed가 된 컨텐츠는 2가 된다. 즉, 위로 올라온다는 뜻)
- margin의 영향을 받지 않고 top, bottom, left, right의 영향을 받는다.

# 3.13 Relative Absolute

- position: static은 레이아웃이 박스를 처음 위치하는 곳에 두는 것.
- position: relative는 가끔 조금씩 오른쪽, 왼쪽으로 옮기고 싶을 때 사용

  - element가 처음 위치한 곳을 기준으로 수정.

- position: absolute는 body(기본값은) 엘리먼트를 기준으로 위치를 수정할 수 있다.
  - 원하는 부모 엘리먼트를 정하고 싶을 땐 부모 엘리먼트에 position:relative를 넣어준다.

# 3.14 Pseudo Selectors

- 좀 더 세부적으로 엘리먼트를 선택해주는 것.
- id는 #, class는 .을 사용한다.
- div`:`을 사용.

  - 여러 div 중 마지막 div에게 배경색을 blue로 준다.
    ```css
    div:last:child {
      background-color: blue;
    }
    ```
  - div:nth-child(2) = 두번째 div을 적용
  - div:nth-child(even) = 짝수 번째 div을 적용
  - div:nth-child(odd) = 홀수 번째 div을 적용
  - div:nth-child(2n+1) = 두번째 다음 마다 적용

## 3.14.1 attribute selector

- attribute를 통해 어떤 것이든 선택할 수 있게 해준다.
- placeholder가 "username"인 것을 선택하기

  `input[placeholder="username"]{}`

- placeholder에 "name" 이라는 단어가 `포함`한 모든 input의 배경색 선택하기 `~`

  `input[placeholder~="name"]`

- com로 끝나는 웹사이트 링크 선택하기

  `a[href$=".com"]`

# 3.15 Combinators

```html
<div>
  <span>hello</span>
  <p>asdasdasdasd<span>inside</span>
  <address>hi</address>
  <span>moko<span>
</div>
```

- 이런식으로 p안에 있는 span을 선택하는 방법은
  `p span {}`으로 선택할 수 있다.
- `>` 는 바로 밑 자식을 찾는 것.
- `+` 는 형제를 찾는 것.
- `~` moko를 가지고 있는 span이 p의 형제인데 바로 뒤에 오지 않을 때 사용.
