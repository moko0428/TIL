function solution(s) {
  let stack = 0;
  for (word of s) {
    if (word == "(") stack++;
    else if (stack == 0) return false;
    else stack--;
  }

  return stack == 0;
}
