function solution(n, arr1, arr2) {
   return arr1.map((a,i)=>(a|arr2[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
}
