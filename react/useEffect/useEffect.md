> useEffect
>
> #### 코드를 언제 실행할지 선택하는 함수
>
> react.js에서 가장 멋진 점은 component를 refresh(새로고침) 하는 것이다.
> 새로운 데이터가 들어올 때 마다 UI를 refresh 한다.
> 그래서 react.js가 대신 해주기 때문에 우리가 직접 refresh를 안해도 된다.
> 그리고 react.js는 변화가 일어날 때만 refresh한다는 것이다.

하지만 가끔은 component 안에 딱 한번만 실행하고 싶은 코드가 있을 수도 있을 텐데, 그럴 경우에는 이것이 문제가 될 수 있다. 어쩌면 코드를 시작시에만 한 번 실행하고 싶을 수도 있을 것이다. 아니면 component안의 특정 데이터가 변화할 때 실행해야 할 수도 있다.
이전에는 코드가 언제 실행될 지 우리가 선택할 수 없었다.

이를 해결하는 방법으로 useEffect 함수를 배우게 되었다.

useEffect은 두 개의 argument를 가지는 function이다.
첫 번째 argument는 우리가 실행시키고 싶은 코드였고,
두 번째 argument는 deps(dependencies)라는 것이다.

deps란, react.js가 지켜보아야하는 것들이다.

세 가지 예시를 들어보자.

1. 아무것도 지켜보지 않는 것.

```js
useEffect(() => {
  console.log("I run only once.");
}, []);
```

위의 예시로 useEffect은 console.log 코드를 실행하고, deps는 가지고 있지 않다. 이것은 react.js가 지켜볼 대상이 없기 때문에 코드가 한 번만 실행된다는 것을 의미한다.

2. 하나의 아이템을 지켜보는 것.

```js
const [keyword, setKeyword] = useState("");
const onChange = (event) => setKeyword(event.target.value);

useEffect(() => {
  console.log("I run when 'keyword' changes.");
}, [keyword]);

return (
  <div>
    <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."
    />
    <h1>{counter}</h1>
    <button onClick={onClick}>Click me</button>
  </div>
);
```

위의 코드는 keyword가 변화할 때 브라우저에 console.log를 찍어주는 코드이다.

그 keyword는 setKeyword라는 function으로 인해 변화한다.
setKeyword는 onChange라는 function에 의해 호출되고
onChange는 사용자 input이 변화할 때 호출된다.

3. keyword와 counter 둘 중 하나가 실행될 때 코드를 실행.

```js
const [keyword, setKeyword] = useState("");
const onChange = (event) => setKeyword(event.target.value);

useEffect(() => {
  console.log("I run when 'keyword' & 'counter' changes");
}, [keyword, counter]);

return (
  <div>
    <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="Search here..."
    />
    <h1>{counter}</h1>
    <button onClick={onClick}>Click me</button>
  </div>
);
```

다시한번 요약을 하자면,

```js
useEffect(() => {
  console.log("I run when 'keyword' changes.");
}, [keyword]);
```

이 코드들은 input이 변화할 때 실행될 테지만, 우리가 선택을 할 수도 있다는 것이다.

useEffect을 react.js가 동작하는 관점에서 말하자면 방어막이다.

react.js는 아주 간단한 방법으로 작동된다.

1. state를 변화시킬 때 component를 재실행 시킨다. 모든 코드가 재실행되는 것이다.
   - UI의 관점으로 보면, 새로운 데이터가 들어올 때마다 자동으로 새로고침되는 것은 좋지만, 문제는 어떤 코드들은 반복실행하면 안될 수도 있다. -> useEffect을 사용하는 이유
