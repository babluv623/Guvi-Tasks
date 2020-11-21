// by anonymous function

let TitleCase= function(str){
  let val=str.split(" ").map(item=>{
     return item[0].toUpperCase()+ item.slice(1).toLowerCase();

  })
  return val.join(" ");
} 
TitleCase("i am a boy");

// by iife

(function(str){
  let val=str.split(" ").map(item=>{
     return item[0].toUpperCase()+ item.slice(1).toLowerCase();

  })
  return val.join(" ");
} )("i am a boy");
