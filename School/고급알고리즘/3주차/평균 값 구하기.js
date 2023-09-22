function solution(n, score){
  let score = score.sort();
  return score.map(i=>i/score[2]*100).reduce((a,c)=>a+c) / n;
}
