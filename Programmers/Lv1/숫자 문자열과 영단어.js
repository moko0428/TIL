function solution(s){
  let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", nine"];
  let result = s;
  for(let i = 0; i < words.length; i++;){
    let arr = result.split(words[i]);
    result = arr.join(i);
  }
  return +result
}
