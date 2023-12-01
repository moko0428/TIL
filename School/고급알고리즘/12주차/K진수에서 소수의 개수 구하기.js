function solution(n, k) {
    let answer = 0
    let arr = n.toString(k).split('0').map(i=> Number(i)).filter(i => i!==1 & i!==0)
    arr.forEach(num=>{
        let isDivide = false
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                isDivide = true
                break
            }
        }
        answer += isDivide ? 0 : 1
    })
     return answer
}
 
