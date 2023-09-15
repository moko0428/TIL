function solution(n){
  let data = Number(n[0]); // 첫 번째 숫자 대입
  for(let i = 1; i<data.length; i++){ // 두 번째 숫자부터 마지막 숫자까지
    const num = Number(n[i]); // 문자열은 숫자로 형변환
    // 지금까지의 연산 결과가 0 혹은 1, 연산을 수행할 숫자가 0 혹은 1일 경우
    if(data <= 1 || num <= 1){ 
      data += num; // 더하기로 연산
    } else {
      data *= num; // 곱하기로 연산
    }
  }
  return data;
}
