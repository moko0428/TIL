//나의 풀이
function solution(arr, n) {
    return arr.length%2===1 ? arr.map((v,i)=>i%2===0 ? v+n : v) : arr.map((v,i)=> i%2===1 ? v+n : v)
}

//다른 사람의 풀이
const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2
    ? num + n
    : num
))
