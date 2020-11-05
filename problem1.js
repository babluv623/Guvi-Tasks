let object= {name: 'RajiniKanth', age: 33, hasPets : false};


function printAllValues(obj) {
    let arr=Object.values(obj);
    return arr;
} console.log(printAllValues(object));
