let array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject(arr) {
 let newObject = {};
 for (i of arr ){
    let key=i[0];
    let val=i[1];
    newObject[key]=val;
  }
     return newObject;
} console.log(fromListToObject(array));