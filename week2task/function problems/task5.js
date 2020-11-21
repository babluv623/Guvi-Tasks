//by ananymous function

let isPalindrome= function(arr){
    let newArr=[];
   arr.forEach(item=>{
       let str=item.split("");
       let flag=true;
       str.forEach((element,i)=>{
           if(element=== str[str.length-i-1] ){
               flag=true;
               
           }
           
           else{
               flag = false;
               
           }
       })
       
       if(flag)
           newArr.push(item);
    
   })
   return newArr;
}; isPalindrome(["joj","gog","hog"]);

// or
 array=["joj","gog","hog"];
let isPalindrome= function(str){
    
        return str===str.split("").reverse().join("");

}; 
 console.log(array.filter(item=>{
     return isPalindrome(item)
 }));

 //by iife

 array=["joj","gog","hog"];
console.log(array.filter(item=>{
 return (function(str){
    
    return str===str.split("").reverse().join("");

})(item);
}));