function mySolution(s) {
  let min,
    max = "";
  let answer = s.split(" ");
  min = Math.min(...answer);
  max = Math.max(...answer);
  return `${min} ${max}`;
}
//정보: max, min은 문자열도 가능하다.

function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + "" + Math.max(...arr);
}
