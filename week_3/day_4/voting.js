const prompt=require("prompt-sync")();
let age=Number(prompt("enterage"));
function voting(age){ 
    if(age>=18){
        return"your eligible to vote.";
    }else if(age<18){
        return"you are not eligible to vote"; 
 
      } else {
        return"Please Enter Valid Ages"; 
    
      }
    }

console.log (voting(age));
