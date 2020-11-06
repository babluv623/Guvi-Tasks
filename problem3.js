let object = {name: 'ISRO', age: 35, role: 'Scientist'};

function convertObjectToList(obj) {
 let arr=Object.entries(obj);
 return arr;
} console.log(convertObjectToList(object));
