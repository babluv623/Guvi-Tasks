let array= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];



function transformGeekData(arr) {
    let transformGeekList=[];
    arr.forEach(item => {
        let obj={};
        item.forEach(element=>{
           obj[element[0]]=element[1];
        });
        transformGeekList.push(obj);
     } );
 



 
 return transformGeekList;
} console.log(transformGeekData(array));
