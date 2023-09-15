function solution(n, k){
  let count = 0;

  while(n > 1){
    if( n%k === 0){
      // n이 k로 나누어 떨어지는 경우
      n /= k;
    } else {
      // n이 k로 나누어 떨어지지 않는 경우
      n--;
    }
    count++; // 카운트 증가
  }
  return count;
}
