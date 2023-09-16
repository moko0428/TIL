const input = [];
const strToNumArr = (str) =>
  str.split(' ').map((numString) => Number(numString));

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(line.trim());
  })
  .on('close', function () {
    const [N, K] = strToNumArr(input.shift());
    const values = input.map((v) => Number(v));

    let k = K,
      v,
      q,
      result = 0;
    //동전의 가치가 큰 것부터
    for (let i = N - 1; i >= 0; i--) {
      v = values[i];
      //k를 동전의 가치로 나눈 몫을 저장
      q = Math.floor(k / v);
      //몫이 0이면 해당 동전 사용할 수 없다는 뜻이므로 다음으로
      if (q === 0) {
        continue;
      }
      //q를(사용 가능한 동전 개수) result에 더해줌
      result += q;
      //나머지 k에 저장
      k %= v;
      //k원 다 만들었으면 종료
      if (k === 0) {
        break;
      }
    }

    console.log(result);
  });
