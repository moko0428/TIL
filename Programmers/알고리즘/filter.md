## 문제
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
```js
function mySolution(s){
    const P = [...s].filter(i=>i==="p").length;
    const Y = [...s].filter(i=>i==="y").length;
    return P === Y ? true : false;
}
```
내 풀이는 이렇다 filter를 이용해 p와 y의 개수를 각각 구해서 길이의 값으로 비교하여 true, false를 반환 받는 것인데, 어떤 이유인지 모르게 자꾸 테스트 60점으로 통과가 되지 않았다.

```js
function solution(s){
    const countP = [...s.matchAll(/p/gi)].length;
    const countY = [...s.matchAll(/y/gi)].length;
    return countP === countY;
}
```
그래서 정답과 비교를 해보았다. 일단 육안으로는 똑같아 보였다. 

해결책을 찾게 되었는데, 일단 문제를 잘못 이해했다 😂
문자열의 첫 문장에서 "p", "y"만 보고 소문자 p ,y에 대한 개수를 출력하는 것인줄 알았다. 대소문자 구분없이 개수를 구하는 것이었다.
내 풀이는 소문자의 개수만 구하는 것으로 틀린 풀이가 된것이다.
정답 풀이는 정규표현식으로 대소문자를 구별하지 않고 값을 반환한다고 한다.

```js
function mySolution2(s){
    const P = [...s].filter(i=>i==="p" || i==="P" ).length;
    const Y = [...s].filter(i=>i==="y" || i==="Y").length;
    return P === Y
}
```
내 풀이를 수정해보았다.

## 알게된 점
- matchAll(/p/gi)
  - 대소문자를 구별하지 않는구나!

## 결론
문제를 잘 읽자.
