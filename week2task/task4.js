// by anonymous function

let primeNum = function(arr){
    return arr.filter(item => {
    if(item==1)
        return false;
        
        for(let i=2; i*i<=item;i++){
            if(item%i===0)
                return false;
        }
    return true;
    });
}

console.log(primeNum([1,2,3,4,5,6,7,8,9,10]));

//by iife

(function(arr){
    return arr.filter(item => {
    if(item==1)
        return false;
        
        for(let i=2; i*i<=item;i++){
            if(item%i===0)
                return false;
        }
    return true;
    });
})([1,2,3,4,5,6,7,8,9,10]);