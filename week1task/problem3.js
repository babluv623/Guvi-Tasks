let object = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertListToObject(obj) {
 let arr=Object.entries(obj);
 return arr;
} console.log(convertListToObject(object));