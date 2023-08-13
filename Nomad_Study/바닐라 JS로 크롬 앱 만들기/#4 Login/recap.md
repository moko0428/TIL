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
