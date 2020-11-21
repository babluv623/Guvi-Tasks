//by anonymous function

let array=["bablu","vikash","bablu","shekhar"]
let removeDuplicates=function(arr,item,i) {
    return arr.indexOf(item)===i;
}
console.log(array.filter((item,i)=>{
   return removeDuplicates(array,item,i)
}));

//by iife

let array=["bablu","vikash","bablu","shekhar"];

console.log(array.filter((item,i)=>{
    return (function(arr,item,i){
        return arr.indexOf(item)===i;
    })(array,item,i)
 }));