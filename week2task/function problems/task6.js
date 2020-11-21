//by anonymous function

let array1=[2,3,5,7,4];
let array2=[1,6,8,9,10];
let sorted_array=array1.concat(array2).sort((a,b)=>a-b);
let median= function (arr){
    let med;
    if(arr.length%2===0){
        med=(arr[(arr.length/2)-1]+arr[arr.length/2])/2
    } else if (arr.length%2!==0){
        med=arr[((arr.length+1)/2)-1]
    }
    return med;
}; median(sorted_array);

//by iife

let array1=[2,3,5,7,4];
let array2=[1,6,8,9,10];
let sorted_array=array1.concat(array2).sort((a,b)=>a-b);
 (function (arr){
    let med;
    if(arr.length%2===0){
        med=(arr[(arr.length/2)-1]+arr[arr.length/2])/2
    } else if (arr.length%2!==0){
        med=arr[((arr.length+1)/2)-1]
    }
    return med;
})(sorted_array);