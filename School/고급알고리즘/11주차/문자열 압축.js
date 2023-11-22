function solution(s) {
    var resultStr = [];
    
    for(var i=1; i<s.length+1; i++){
        var arr = [];         
        for(var j=0; j<s.length/i; j++){ 
            var piece = s.substr(j*i, i); 
            if(arr.length > 0){ 
                if(arr[arr.length-1][0] == piece){ 
                    arr[arr.length-1][1] = arr[arr.length-1][1] + 1 
                }else{
                    arr.push([piece, 1]); 
                }
            }else{ 
                arr.push([piece, 1]); 
            }
        }
        
        var makeStr = "";
        arr.forEach((v, i) => {
            if(v[1] == 1) makeStr += v[0]; 
            else makeStr += (String(v[1]) + v[0]); 
        });
        resultStr.push(makeStr);
    }
    
    var answer = resultStr[0]; 
    for(var i=1; i<resultStr.length; i++){
        if(answer.length > resultStr[i].length) answer = resultStr[i]; 
    }
    
    return answer.length; 
}
