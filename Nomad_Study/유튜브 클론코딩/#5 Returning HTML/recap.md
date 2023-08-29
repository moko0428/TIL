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
- 파일 경로가 잘못 설정되어 있으니 고쳐주도록 하자.
