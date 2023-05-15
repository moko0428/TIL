function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
