// 나의 풀이
function solution(arr, intervals) {
    let arr2 = []
    let result = 0
    for(let i = 0; i < intervals.length; i++){
        arr2.push(arr.slice(intervals[i][0],intervals[i][1]+1))
    }
     result = arr2.reduce((prev,next)=>{
       return prev.concat(next)
    })
    return result
    
}

// 다른 사람 풀이
function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals;

    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}
