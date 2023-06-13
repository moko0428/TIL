# 설치

`npm i styled-components` 안될 시
`npm i styled-components@latest`

# 유용한 익스텐션

vscode-styled-components

# 왜 styled-components를 사용하는가

html 코드 구성을 보았을 때 div, div, div...으로 되어있고 이 div가 무엇을 의미하는지를 class 속성을 일일이 찾아봐야하는 번거로움, 가독성이 안좋았던 예전의 방식에서 style 컴포넌트를 만들어 사용하는 것으로 가독성을 개선시킨다.

# styled-components 사용법

## styled-components basic

```js
const Father = styled.div`
  display: flex;
`;

function App() {
  return (
    <Father>
      <div>hi</div>
    </Father>
  );
}
```

## styled-components Adapting and Extending

```js
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
    </Father>
  );
}
```

bgColor만 props를 이용해 각자 다른 색을 입히며 코드를 재사용할 수 있다.

```js
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}
```

styled(Box)를 통해 Box를 Extending하여 다른 속성값을 추가하여 사용할 수 있다.

## 'as' and Attr

만약 button의 스타일을 사용하고 싶은 a가 있다면 어떻게 해야 할까?

```js
<Btn as="a">Log in</Btn>
```

이렇게 `as="a"`를 사용하면 요소 검사를 하였을 때, a태그로 선언되어 있는 것을 확인할 수 있다.

---

많은 input 태그를 사용할 때, 하나하나 required를 줘야하는 것은 귀찮은 일이다. 이럴 땐 attrs()를 사용하는데,

```js
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;
```

attrs()안에 객체 형식으로 속성의 값을 넣어주면 Input태그가 생성이 될 때마다 해당 attrs()의 속성이 부여된 채로 태그가 생성된다.

## animation and Pseudo Selectors

```js
const rotation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;
`;
```

animation: ${}이 부분에 애니메이션을 만든 컴포넌트의 이름을 넣으면 된다.

```js
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
  }
  function App() {
  return (
    <Wraper>
      <Box>
        <span>💛</span>
      </Box>
    </Wraper>
  );
}
`;
```

div안의 span을 target하는 방법으로 Box의 컴포넌트 안에 span{}을 넣어서 Box안의 element을 target하여 지정할 수 있다.

&:hover{}는 span:hover{}와 같은 말로 좀 더 편하게 사용할 수 있는 단축어이다.

## Pseudo Selectors 2

만약 div안의 span을 target하는 방법을 사용할 때 span에 의존하지 않고 (p, h2로 바꿨을 때 적용이 되지 않음) 자동으로 바꿀 수 있다면 어떨까? 당연히 편하겠지

```js
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;
```

이렇게 Emoji라는 컴포넌트를 만들어 아까 span 자리에 ${Emoji}를 선택해주면 된다.
