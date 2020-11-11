let array= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];



function transformEmployeeData(arr) {
    let transformEmployeeList=[];
    arr.forEach(item => {
        let obj={};
        item.forEach(element=>{
           obj[element[0]]=element[1];
        });
        transformEmployeeList.push(obj);
     } );
 



 
 return transformEmployeeList;
} console.log(transformEmployeeData(array));