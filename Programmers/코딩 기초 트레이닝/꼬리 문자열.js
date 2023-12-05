// 나의 풀이
function solution(str_list, ex) {
   let stack = [];
    for(let i = 0; i < str_list.length; i++){
    if(str_list[i].match(ex)) stack.push("")
    else stack.push(str_list[i]);
    }
    return stack.join("")
}
// 다른 사람 풀이
const solution = (str_list, ex) => str_list.filter(v => !v.includes(ex)).join('')
