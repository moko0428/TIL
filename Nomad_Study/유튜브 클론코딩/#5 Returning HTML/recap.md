# 5.0 Returning HTML

- HTML을 리턴하는데는 두 가지 옵션이 있다.

1. HTML의 문자열을 써서 보내는 방법

   - 브라우저가 그 HTML을 실행해서 우리는 그 HTML을 보게 된다.
   - `"<h1>Hello</h1>"`
   - 하지만 문제가 있다. 이 한 줄로는 넘기기가 번거롭고 불편하다.
   - ex) head, header, pooter, body ...

2. Pug

- pug 파일을 통해 HTML 문서를 작성할 수 있다.

# 5.1 Configuring Pug

- Pug는 템플릿 엔진(Template Engine)이다.
- 템플릿을 이용해서 뷰를 만드는 것을 도와준다.

### Pug를 이용한 문법

```pug
doctype html
html(lang="en")
    head
        title = pageTitle
        script(type='text/javascript').
            if  (foo) bar(1 + 5)
        body

                ...
```

### 자바스크립트 문법

```js
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Pug</title>
        <script tpye="text/javascript">
            if (foo) bar(1 + 5)
            </script>
        </head>
        <body>
        ...
        </body>
    </html>
```

- 태그를 열고 닫기보다, title 안에 head 안에 있다고 하면 된다
- 모든 것은 일반적인 html로 변환된다.

## 5.1.1 Pug Setup

1. 설치

   `npm i pug`

2. pug를 뷰 엔진으로 설정한다.

> [express settings 공식문서](https://expressjs.com/ko/4x/api.html#app.use)

- express 공식 문서를 보면, app을 가지고 할 수 있는 것이 하나 있다.
- app이 있으면 app에서 우리가 원하는 어떠한 것이든 설정할 수 있다.
- 가장 중요한 것 중 하나는 **`뷰 엔진(view engine)`**을 설정할 수 있다는 것.
- pug가 우리의 뷰 엔진이 될 것.
- 즉, express에게 이제부터 사용할 뷰 엔진은 pug하고 말하는 것.
- `app.set("view engine", "pug")`

3. pug 파일을 생성한다.

- 기본적으로 express는 views 폴더 안에 있는 파일을 찾는다.
- views는 어플리케이션의 뷰에 대한 디렉토리나 배열을 담고 있다.
- 뷰는 유저가 보는 대상을 말한다.

  3.1 src에서 views 폴더를 생성한다.

  3.2 home.pug 파일을 생성한다.

- 일단 모든건 소문자로 작성하고, 속성이 있으면 괄호안에 작성한다.
- 그리고 모든건 부모속성보다 안쪽에 있어야한다. (Tab)

```pug
doctype html
html(lang="ko")
    head
        title Wetube
    body
        h1 Welcome to Wetube
        footer &copy; 2023 Wetube
```

- 이렇게 작성된 파일은 바로 그대로 유저에게 보내지는 것이 아니라,
- pug로 보내고, pug가 이 파일을 렌더링해서 평범한 html로 변환해준다.
- 즉, 유저는 home.pug를 보는 일은 없고, 우리가 pug로 파일을 보내면, pug가 이 파일을 평범한 html로 변환해준다. 그것을 유저가 보게 되는 것.

4. 렌더링하기

- `res.render(view)`
- ex) `res.render("home")`
- 이제 home.pug를 렌더링할 수 있게 되었다.
- 이제 express도 우리가 pug를 사용한다는 것을 알고 있다. 그리고 express가 views라는 디렉토리에 있는 view를 본다는 것도 안다.
- 그래서 우리는 따로 임포트할 필요도 없다.
- 왜냐? express가 views 디렉토리에서 pug 파일을 찾도록 설정되어 있기 때문에 우리가 해야하는건 그저 res.render로 home.pug를 렌더링 하는 것 뿐이다.
- 실행해보면 에러가 뜬다.
- Failed to lookup view "home" in views dir "파일경로"
- express는 현재 작업 디렉토리의 views 폴더를 찾는다.
- 실제로는 wetube 폴더 안의 src 안의 views를 찾아야한다.
- **현재 작업 디렉토리는 node.js를 실행하는 디렉토리이다.**
- 그리고 우리의 경우 node.js를 실행하는 디렉토리는 src가 아니다.
- 우리가 서버를 시동하거나 node.js를 실행하는 건 pakage.json이다.
- pakage.json은 src 안에 있지 않다.
- 그렇기 때문에 express에게 현재 작업 디렉토리를 알려줘야한다.
- 해결방법은 디폴트 값을 변경해주는 것이다. 왜냐, 디폴트 값이 "현재 작업 디렉토리(cwd)/views"이니,
- 좋지 않은 해결법 하나는, 내 views 폴더를 src 밖으로 꺼내는 것이다.
- 좋은 해결법은 views의 설정을 바꾸어 주는 것이다.
- `app.set("views", process.cwd() + "/src/views")`
- pug 파일은 res.render()를 통해 렌더링할 수 있다.
- 첫 argument는 파일 이름이 들어가는데 무조건 소문자여야 한다.
- `res.render("home")`
- 템플릿엔 어느 자바스크립트 코드여도 넣을 수 있다.

# 5.2 Partials

- pug의 최고 장점은 반복할 필요가 없다는 것.
- views에 partials 폴더를 만들고 footer.pug 파일을 만든다.
- 반복되었던 footer들을 지우고 footer.pug에 넣는다.
- footer.pug를 home, watch.pug에 include 해준다.

```js
//footer.pug
footer &copy; #{new Date().getFullYear()} Wetube
```

```js
//home.pug, watch.pug
...
include partials/footer.pug
```

- 그렇다면 모든 것들을 반복하지 않는 방법이 있다면 ?

# 5.3 Extending Template

- inheritance(상속) : 일종의 베이스를 만들어준다. (레이아웃의 베이스, HTML의 베이스) 그러면 모든 파일들이 그 베이스에서부터 확장해 나가는 것.
- base.pug 파일을 생성하고 home 코드를 복붙해준 뒤,
- home, watch, edit 파일의 모든 코드를 지우고 `"extends base.pug"`를 해준다.
- 그러면 모든 파일들이 base.pug에게서 상속받게 된다.
- 이렇게 되면 모든 파일들이 다 똑같이 출력되기 때문에 좋지 않다.
- 블록 : 블록은 템플릿의 창문 같은 것. 창문, 문, 공간, 블록이든지 무언가를 집어 넣을 수 있는 곳을 말한다.

```js
doctype html
html(lang="ko")
    head
        title Wetube
    body
        block content
    include partials/footer.pug
```

- body에 block을 넣어준다.
- 이게 뭐냐, base.pug에 content를 위한 공간이 마련된 것이다.

```js
extends base.pug
block content
    h1 Home!
```

- base.pug에 블록을 만들었다.
- 그리고 home.pug를 보면, 우리가 base.pug를 확장(extends)하고 있기 때문에 우리는 content 블록에 내용을 집어 넣을 수 있게 된다는 것이다.
- 이렇게 하는 방식은 결과적으로 base.pug에 있는 코드를 다른 home, watch, edit에 복붙하고 사용하는 것과 같은 것이다.
- block은 얼마든지 넣을 수 있다.
- 그런데 이 블록 마저도 반복되고 있다. 이 블록을 하나로 줄일려면 어떻게 해야할까?

# 5.4 Variables to Templates

- extend는 html의 베이스를 가질 수 있게 해주기 때문에 좋다.
- 게다가 일부분은 우리가 수정할 수도 있기 때문에 좋다.
- 우리의 파일이 블록을 가진다는 건 우리가 그 파일을 확장을 하면 우리는 그 블록안에 내용을 채울 수 있다는 것.
- 블록은 확장한 템플릿 안에 내용을 넣을 수 있는 창문 또는 문 같은 것.
- 만약 base에서 확장을 하면 edit은 그 base의 복제품이 되는 것, 하지만 base는 2개의 블록을 가지고 있기 때문에 그 안에 내용을 채워 넣을 수 있다.
- 블록은 보통 커스터마이즈한 html을 넣을 때 사용한다.
- 예로 base가 footer를 가지면 edit, watch, home은 footer를 바꿀 이유가 없어진다. 하지만 edit, watch, home은 body안에 있는 content를 수정하고 싶을 수가 있는데 그럴 때는 블록을 만들어 사용한다.
- 블록을 사용해도

```js
block head
    title Home | Wetube
```

- | Wetube는 반복이 된다. 이부분을 간편하게 바꿀려면 어떻게 해야할까?

## 5.4.1 변수 템플릿

```js
head
    title #{pageTitle} | Wetube
```

- res.render는 두 가지의 인수를 받는데, 하나는 view의 이름이고, 하나는 템플릿에 보낼 변수이다.
- `res.render("home", {pageTitle:"Home"})`

### 요약

- 우리는 home.pug를 렌더링하는데, home.pug는 base.pug를 확장하고, base.pug는 우리가 직접 채우는 content 블록을 가지고 있고, pageTitle이라는 것을 가지고 있다.
- pageTitle은 우리가 제공해야할 변수이다.
- 변수를 제공하는 방법은 render에 파일명을 쓰고 변수를 쓰는 것이다.

# 5.5 Pug 요약

- pug는 아주 깔끔하다.
  - 왜냐? 지저분한 HTML을 쓰지 않고, 파이썬 처럼 깔끔한 코드를 쓸 수 있다.
  - 태그를 열고 닫을 필요없이 탭과 띄어쓰기로 구분된다.
- express에게 이것을 렌더링하고 유저에게 보내달라고 하는 법을 배웠다.
  - res.render("viewName"), viewName => pug 파일 이름
  - express에게 우리의 웹사이트 views는 "wetube/src/views"에 있다고 알려주었다.
    - `app.set("views", process.cwd() + "/src/views");`
- 반복되는 코드를 줄일 수 있다.

  - partials 폴더에 footer.pug 파일을 만들어 반복되는 footer를 한 파일로 줄일 수 있다.
    - 하나의 파일로 줄인 이 파일은 include를 통해 불러올 수 있다.
  - 파일을 불러오는 이 구조를 매번 복붙하는 것 또한 줄일 수 있다.

    - base.pug 파일을 만들어 구조를 base.pug에 넣고 다른 파일들은 모두 삭제하고 extends로 상속 받는다.
      - 이렇게 상속을 받게 되면 모든 파일들이 base의 복제품이 되어버린다.
      - base에서 부분적으로 다른 것을 만들고 싶을 때는 block을 이용한다.
    - block은 주머니 같은 개념으로 base에 `block content` 작성하고, 다른 파일에서 이 부분을 사용하고 싶다면 block content 안에 컨텐츠를 작성해주면 된다.

    ```js
    block content
        h1 Home
    ```

    - block을 사용해도 내용에서 반복되는 경우는 변수를 사용할 수 있다.

    ```js
    head
        title #{pageTitle} | Wetube
    ```

    - 변수란 제공해주는 변수로 render의 두번째 인수에 변수를 제공해줄 수 있다.

# 5.6 MVP Styles

- HTML의 element(요소)들을 이쁘게 만들어주는 역할을 한다.
- `link(rel="stylesheet" href="https://unpkg.com/mvp.css")`
