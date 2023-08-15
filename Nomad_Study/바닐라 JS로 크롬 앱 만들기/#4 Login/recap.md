# 4.0 Input Values

```js
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
```

```js
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
```

## 4.0.1 Input의 값을 출력하려면?

```js
console.dir(loginInput);
```

을 해보면 개발자 도구 콘솔에 loginInput의 dir이 출려되는데 그 중 value를 찾을 수가 있다. 이 value가 사용자가 input에 값을 적었을 때, 그 값을 말한다.

#### 예제

```js
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function onLoginBtnClick() {
  console.log("hello", loginInput.value);
}
loginBtn.addEventListener("click", onLoginBtnClick);
```

위의 코드를 보면 사용자가 input에 값을 입력하고 버튼을 누르면 콘솔에 "hello value" 이 출력되는데, 사용자가 값을 입력하지 않아도 "hello"가 출력된다.

# 4.1 Form Submission

사용자가 값을 입력해야만 "hello value"가 출력되게 만들어보자.

```js
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}
loginBtn.addEventListener("click", onLoginBtnClick);
```

위의 코드 중 if 조건에 해당하는 유효성 검사는 input 자체적으로도 설정이 가능하다.

```js
username==="" -> required
username.length > 15 -> maxLength="15"
```

```html
<div>
  <input required maxlength="15" type="text" placeholder="What is your name?" />
  <button>Log In</button>
</div>
```

하지만 위의 코드는 전혀 작동이 되지 않을 것이다. (required, maxlength가)

input의 유효성 검사를 작동시키기 위해서는 form 태그 안에 input을 작성해야만 한다.

```html
<form>
  <input required maxlength="15" type="text" placeholder="What is your name?" />
  <button>Log In</button>
</form>
```

위 코드를 실행해보면 값을 입력하고 버튼을 누르면, 새로고침이 되어 값이 사라지는 것을 확인할 수 있다.
이유는 웹사이트를 재시작 되고 있는데, form이 submit 되고 있기 때문이다.

그리고 form안에서 엔터를 누르면 버튼을 누르는 동작과 같기 때문에 버튼의 존재는 필요 없어졌다.

> 🤔 그렇다면 이 새로고침이 되는 이 순간에 브라우저가 새로고침을 하지 않고 user의 정보를 저장하도록 하려면 어떻게 해야할까?

form이 submit 되는 걸 막아주는 방법을 찾아보자.

# 4.2 Events

일단 button은 필요없다 click 이벤트가 아닌 submit 이벤트에 집중해야한다.

submit 이라는 event가 발생하는 걸 막거나, 중간에 개입해서 submit event가 발생했다는 것을 파악해야한다.

```js
const loginForm = document.querySelector("#login-form");

function onLoginSubmit() {
  const username = loginInput.value;
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

위 코드를 실행시 콘솔창에선 값이 잠깐 출력되었다가 다시 사라지는 것을 육안으로 확인할 수 있다.

바로 form을 submit할 때 입력값을 받아내는 것으로 첫 번째 단계를 성공하였다.

브라우저는 엔터를 누를 때 새로고침을 하고 form을 submit 하도록 기본 세팅, 즉 이것은 `브라우저의 기본 동작`이다.

브라우저는 onLoginSubmit()을 하고 있는 것이 아니다.
브라우저가 function을 실행시키고 있긴 하지만 () 이 안에서 우리에게 정보를 주고 있다.
브라우저는 브라우저 내에서 event로부터 정보를 잡아내서 onLoginSubmit function 실행 버튼을 정보를 가지고 있는 채로 누르고 있는 것이다.

```js
const loginForm = document.querySelector("#login-form");

function onLoginSubmit(info) {
  info.preventDefault();
  console.log(info);
}

loginForm.addEventListener("submit", onLoginSubmit);
```

위 코드를 실행해보면 onLoginSubmit(info)의 info가 가진 object를 확인할 수 있다.

이 함수는 하나의 argument를 받도록 하고 있고, 그것을 JS에게 넘겨주고 있다.

여기서 javascript가 하게 될 일은, 여기에서 함수의 첫 번째 argument로 발생한 일에 대해 우리가 필요로 할만한 정보들을 주는 것이다.

모든 EventListener 함수의 첫 번째 argument는 항상 지금 막 발생한 일들에 대한 정보가 된다.

preventDefault() 이 함수의 역할은 어떤 event의 기본 행동이든지 발생하지 않도록 막아주는 일을 한다.

즉, preventDefault() 함수로 form의 submit이 되는, 브라우저의 새로 고침, 브라우저의 기본 동작을 막아주면서 그때 발생되는 일을 onLoginSubmit(info)에 저장하여 JS에게 전해주는 것이다.

## 4.2.1 링크의 기본 동작 막아보기

a, 링크의 기본 동작은 클릭 시 다른 페이지로 넘어가는 것이다.

```js
function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}
link.addEventListener("click", handleLinkClick);
```

# 4.3 Getting Username

```html
<form id="login-form">
  <input required maxlength="15" type="text" placeholder="What is your name?" />
  <input type="submit" value="Log In" />
</form>
<h1 id="greeting" class="hidden"></h1>
```

```css
.hidden {
  display: none;
}
```

```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
```

위의 코드는 사용자의 이름을 입력하고 엔터할 시에 form이 사라지고 console에 Hello username이 출력되는 코드이다.

먼저 preventDefault()로 브라우저의 기본 동작을 막아주면서 event의 정보를 가져왔다.

username엔 input에 입력한 값을 할당해주고, hidden css를 classList.add()로 form에 넣어 form을 없애준다.

greeting으로 입력 값을 h1에 넣어주어 화면엔 Hello username이 출력이 된다.

greeting에 className.remove()를 통해 hidden 클래스를 없애주며 h1이 화면에 출력되게 한다.

# 4.4 Saving Username

- local storage : 우리가 브라우저에 뭔가를 저장할 수 있도록 해주는 브라우저의 기능
  - setItem : local storage에 정보를 저장할 수 있다.
    - `localStorage.setItem("Key 값", "Value 값");`
    - 예시 : `localStorage.setItem("username", "moko");`
  - getItem : local storage에서 정보를 가져올 수 있다.
    - `localStorage.getItem("Key 값");`
    - 예시 : `localStorage.getItem("username");` -> moko
  - removeItem : 저장된 값을 지운다.
    - `localStorage.removeItem("Key 값");`
    - 예시 : `localStorage.removeItem("username");`

#### 예제

```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const myname = localStorage.getItem("username");
  greeting.innerText = `Hello ${myname}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
```

# 4.5 Loading Username

- local Storage의 username 유무에 따라 form을 보여주기

### 로직

```js
if (localStorage.getItem("username") === null) {
  // show form
} else {
  // show greeting
}
```

### 완성 코드

```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}
```

- 반복되는 string 값은 안정성 있게 변수로 만들어 저장한다.
  - 이때 변수 이름은 대문자로 지정하는 것이 국룰이다.
  - `HIDDEN_CLASSNAME, USERNAME_KEY`
- 로컬스토리지에 username을 저장한다.
- loginForm에 hidden 클래스를 추가한다.
- savedUsername에 로컬스토리지에 저장되어 있는 username을 할당한다.
- 만약 savedUsername이 null 값이면 화면에 form을 출력한다.
  - loginForm에 있는 hidden 클래스를 지워주고, loginForm 이벤트리스너를 실행한다.
- 만약 savedUsername에 값이 있다면 paintGreetings() 함수를 실행 시켜준다.
  - paintGreetings() 함수는 username 값을 받아 greeting에 username을 넣어주고, greeting에 있는 hidden 클래스를 지워준다.
