//by anonymous function

let oddNum= function(arr){
    return arr.filter(item=>{return item%2==1})
} 
  oddNum([1,2,3,4,5]);

  //by iife

  (function(arr){
    return arr.filter(item=>{return item%2==1})
} )([1,2,3,4,5]);