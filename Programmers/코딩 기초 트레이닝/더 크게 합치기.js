//나의 풀이
function solution(a, b) {
    let ab = (a+"")+(b+"")
    let ba = (b+"")+(a+"")
    return ab > ba ? +ab : +ba
}

//다른 사람의 풀이
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}
