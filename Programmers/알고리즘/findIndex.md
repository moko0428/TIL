## findIndex()
findIndex() 메서드는 제공된 테스트 기능을 충족하는 배열의 첫 번째 요소 인덱스를 반환한다.
테스트 기능을 만족하는 요소가 없으면 -1이 반환된다.

## Let's do it!
```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber); // 3
```

## Syntax
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

## Parameter

### callback

배열의 각 요소에 대해 실행할 함수이다. 일치하는 요소가 발견되었음을 나타내기 위해 true 값을 반환하고 그렇지 않으면 false 값을 반환해야한다.
이 함수는 다음 인수로 호출 된다.

### element

배열에서 처리 중인 현재 요소의 인덱스이다.

### index

배열에서 처리 중인 현재 요소의 인덱스이다.

### array

배열이 findIndex() 호출 되었다.
