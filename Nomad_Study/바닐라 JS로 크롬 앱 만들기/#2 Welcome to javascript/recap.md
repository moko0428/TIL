# 2.0 Your First JS Project

- 브라우저의 개발자 도구 F12에서 console 창으로 자바스크립트를 사용할 수 있다.
- JS, CSS 파일은 브라우저로 열게 되면 원하는 화면이 나오지 않고 코드 그대로 화면에 노출된다.
- HTML 파일로 JS, CSS 코드를 가져와야한다.

# 2.1 Basic Data Types

- Number, String 타입이있다.

# 2.2 Variables

- 출력 : `console.log();` 를 통해 브라우저의 개발자 도구 console 창에 출력할 수 있다.
- camelCase를 지향

# 2.3 const and let

- `const` : constant(상수) 변하지 않는 변수
- `let` : 변할 수 있는 변수

- const는 항상 쓰고, let은 가끔, var는 절대 쓰지 않기

# 2.4 booleans

- true or false
- undefined : 브라우저가 사용자에게 알려줌, 변수에 값을 부여하지 않은 상태
- null : 사용자가 직접 null 값을 할당함

# 2.5 Arrays

- 데이터를 나열하기 위한 방법 중 하나
- 요소는 0부터 시작한다
- push하면 맨 뒤에 추가가 되며 pop하면 맨 뒤의 요소가 삭제된다.
- 모든 유효한 데이터 타입이나 variable이 들어간다.

```js
const me = "moko";
const array = [1, 2.5, false, true, null, undefined, "text", me];

const dateArray = ["월", "화", "수", "목", "금", "토", "일"];

console.log(dateArray[0]); // "월"

dateArray.push("일요일");

console.log(dateArray); // ["월","화","수","목","금","토","일", "일요일"]

dateArray.pop();

console.log(dateArray); // ["월","화","수","목","금","토","일"]
```

# 2.6 Objects

- 별칭과 값으로 구성되어 있다.
- .으로 추적하여 값을 받아낸다.

```js
const student = {
  name: "moko",
  age: 25,
};
console.log(student.name); // "moko"
console.log(student.age); //25
```

# 2.7 Functions

- 가능한 짧은 코드를 쓰고 싶은 개발자의 마음
- 반복되는 코드를 짧게 쓸 수 있다. 재사용성
- function의 ()를 통해 데이터(argument)를 받을 수 있다.
  - argument는 아무 이름이나 넣을 수 있다.

```js
function plus(a, b) {
  // 2. 1에서 보낸 데이터를 받는다.
  console.log(a + b); // 3. 2에서 받은 데이터를 출력한다.
}
plus(5, 5); // 1. plus 함수에 데이터를 보낸다.
function sayHello(name, age) {
  console.log(`Hi, my name is${name}, and I'm ${age}.`);
}
sayHello("moko", 25); // Hi, my name is moko, and I'm 25.

function calc(a, b) {
  console.log(a + b);
  console.log(a - b);
}
calc(2, 3); // 5

const player = {
  name: "moko",
  sayHello: function (name) {
    console.log("Hello!" + name);
  },
};
console.log(player.name); // moko
player.sayHello("moko"); // Hello! moko
```

# 2.8 Functions Challenge

```js
const calc = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calc.add(4, 6);
calc.minus(5, 3);
calc.divide(6, 2);
calc.multi(4, 4);
calc.power(2, 4);
```

# 2.9 Returns

```js
const age = 96;

function krAge(age) {
  return age + 2;
}
const myAge = krAge(age);

console.log(myAge); // 98
```

- console.log()는 콘솔에 결과를 보여주기 위한 것. 근데 a + b 같은 실제적인 계산은 javascript 코드에서 value(값)을 바로 얻을 수가 없다.

- const plusResult = calc.add(2,3) 은 5라는 값을 준다. 하지만 result의 값을 출력하면 undefined가 뜬다.

- variable에 function을 할당하면, 그 variable은 plus function의 결과 type을 가지게 된다. 하지만 console.log를 할 경우 variable엔 어떠한 값도 반환되지 않고 console.log만 받게 되어 undefined가 되는 것이다.

- console.log 대신 return을 사용하게 되면 plus function에서 return 값인 5를 반환하여 variable엔 5를 받게 된다.

- **`즉 console.log는 그림의 떡, 꺼내 먹으려면 return을 사용한다.`**

# 2.10 Conditionals

- 조건문은 true인지 false인지 알려주는 문법
- if는 true or false를 반환한다.
- prompt는 사용자에게서 입력값을 받을 수 있다.
  - 브라우저로 할 수 있는 가장 직접적인 방법이긴하나, 오래된 방법으로 커스텀조차 불가능하여 사용하지 않는다.
  - prompt는 string을 반환한다.
- `parseInt()` : string을 number 타입으로 변환할 수 있다.

  - string인 "15"에 +를 붙이면 number 타입 15로 변환할 수 있다.
  - Number("15") string인 "15"를 number 타입 15로 변환.

- isNaN() : boolean을 반환한다. 숫자가 아니라면 true를, 숫자라면 false를 반환한다.

```js
// if, else
if (condition) {
  /// condition === true
} else {
  // condition === false
}

// else if
if (isNaN(age)) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else {
  console.log("You can drink");
}
```

- && : AND 연산자로 둘 다 1이거나 0이면 true를, 하나라도 1이거나 0이면 false를 반환.
- || : OR 연산자로 하나라도 1이면 true를 반환한다.
