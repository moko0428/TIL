function solution() {
    let str = "K1KA5CB7"
    let result = []
    let num = [...str.replace(/[^0-9]/g,"")].reduce((a,c)=>+a+ +c)
    
    for(let i = 0; i < str.length; i++){
     if(isNaN(str[i])){
        result.push(str[i])
     }
   }
   
   return result.sort().join('')+num
}
