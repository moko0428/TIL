function solution(arr){
  let notZero = arr.filter(i=>i!==0);
  let total = arr.length - notZero.length;
  for(let i = 0; i < total; i++){
    notZero.push(0);
  }
  return notZero;
