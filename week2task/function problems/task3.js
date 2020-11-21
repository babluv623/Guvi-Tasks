// by anonymous function

let sumNum= function(arr){
   return arr.reduce((sum,item)=> sum+=item,0)
} 
 sumNum([1,2,3,4,5]);

 //by iife

 (function(arr){
    return arr.reduce((sum,item)=> sum+=item,0)
 } )([1,2,3,4,5])