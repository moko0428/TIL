# 4.0 Transitions

- 어떤 상태에서 다른 상태로의 `"변화"`를 애니메이션으로 만드는 방법
- transition 속성은 state가 없는 요소에 붙어야한다.
- 첫번째는 `어떤 것`에 변화를 줄 건지 써야한다.
- 두번째는 얼마동안 변화를 할것인지 써야한다.
- 세번째는 애니메이션이 어떻게 변할지 말해줘야한다.
  ```css
  a {
    color: wheat;
    background-color: tomato;
    transition: all 10s ease-in-out;
  }
  a:hover {
    color: tomato;
    bacground-color: wheat;
  }
  ```

> [애니메이션](https://matthewlein.com/tools/ceaser)

# 4.1 Transformations

- 다른 box element, 이미지에 영향을 끼치지 않는다.
- state에 작성되어야한다.
- transition과 함께 사용 가능하다.

# 4.2 Animations

- 계속 재생되는 애니메이션
- @keyframes name{}으로 작성된다.

```css
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
img {
  animation: rotation 5s ease-in-out infinite;
}
```
