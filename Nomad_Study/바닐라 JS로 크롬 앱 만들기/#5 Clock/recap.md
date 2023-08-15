# 5.0 Intervals

- Interval : 매번 일어나야 하는 무언가를 말한다.
  - 예를 들면 매 2초마다 무슨 일이 일어나게 하고 싶을 때 사용
- `setInterval(func, ms)`

```js
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}
setInterval(sayHello, 2000);
```

```js
function getClock(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes():${date.getSeconds()}`)
    }
}
getClock(); // 1초가 지나야 시작을 하기 때문에 먼저 호출하여 시간을 보여준다.
setInterval(getClock, 1000);
```

# 5.1 Timeouts and Dates

- Date object : `new Date()`로 이미 정의되어 있다.
- 지정한 시간에 한 번 호출한다.

# 5.2 PadStart

- `"1".padStart(2, "0")` : 문자열이 1이면 2자리로 보이게 하고 첫 글자는 0으로 시작해라
  - "hello".padStart(20, "0") ->"000000000000000hello"
- setInterval()의 반환값은 int이기 때문에 string으로 변환해줘야한다.
  - String(date.getHours()) -> "11"

```js
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock.1000);
```
