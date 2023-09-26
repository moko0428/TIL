function solution(sNums){
  // sNums = "10987654321"
  let sNums = sNums.split("");
  return sNums.map(i=>Number(i)).reduce((a,c)=>a+c);
}
//46
