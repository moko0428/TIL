function solution(A, B) {
  let answer = 0;
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}
