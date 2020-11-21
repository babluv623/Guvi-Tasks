// by anonymous function

array=[1,2,3,4,5];
let rotateArray= function (arr,rotation){
    const rotatedArray=arr;
   for(let i=0;i<rotation;i++){
       const frontItem=rotatedArray.shift();
       rotatedArray.push(frontItem)
   }
   return rotatedArray;
}; console.log(rotateArray(array,4));

// by iife

array=[1,2,3,4,5];
(function (arr,rotation){
    const rotatedArray=arr;
   for(let i=0;i<rotation;i++){
       const frontItem=rotatedArray.shift();
       rotatedArray.push(frontItem)
   }
   return rotatedArray;
})(array,4)