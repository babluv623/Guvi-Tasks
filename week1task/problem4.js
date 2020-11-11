let array = ['GUVI', 'I', 'am',  'Geek'];

let newObject={};
function transformFirstAndLast(arr) {
let name=arr[0]; 
 newObject[name]=arr[arr.length-1];
 return newObject;
} console.log(transformFirstAndLast(array));