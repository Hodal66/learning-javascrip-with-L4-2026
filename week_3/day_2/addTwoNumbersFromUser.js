const prompt = require("prompt-sync")();
let firstNumber = prompt("Enter First Number : ");
let secondNumber = prompt("Enter Second Number : ");
let convertedFirstNumber = Number(firstNumber);
let convertedSecondNumber = Number(secondNumber);

let sum = convertedFirstNumber+convertedSecondNumber;

console.log("the first number is : "+firstNumber+" The Second Number is : "+secondNumber+" their Sum is "+sum);