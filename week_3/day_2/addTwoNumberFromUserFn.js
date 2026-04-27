const prompt = require("prompt-sync")();
let fNumber= Number(prompt("Please Enter First Number "));
let sNumber = Number(prompt("Please Enter Second Number : "));

function addTwoNumbers(firstNumber, lastNumber){
    let sum = firstNumber+lastNumber;
    console.log("The First Number is "+firstNumber+" The second is "+lastNumber+" Their Sum is "+ sum);
}

addTwoNumbers(fNumber,sNumber);