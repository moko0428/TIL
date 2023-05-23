## interface로 Props를 만들어 컴포넌트 재사용

```ts
#button.tsx;
interface ButtonProps {
  name: string;
}

export default function Button({ name }: ButtonProps) {
  retrun(
    <div>
      <button>{name}</button>
    </div>
  );
}
```

이렇게 button 컴포넌트에서 interface에 name의 타입을 지정해주고 파라미터에 name을 넣어주면 다른 코드에서 button을 재사용이 가능하고 name 부분을 다른 이름으로 커스텀이 가능하다.
