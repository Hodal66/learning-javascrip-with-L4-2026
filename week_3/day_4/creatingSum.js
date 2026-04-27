const prompt=require("prompt-sync")();
let firstNumber =Number(prompt("enter the first number:"));
let lastNumber =Number(prompt("ener the last number:" ));

 function creatingSum(firsNumber,lastNumber){
    console.log("the sum is :");
    
   
  if (isNaN(firsNumber)|| isNaN(lastNumber)){
    return"entervalid number";
 } 
 else{
    return `the sum is:${firstNumber+lastNumber} the product is:${firsNumber*lastNumber}the sub:${firsNumber}`;
 } }