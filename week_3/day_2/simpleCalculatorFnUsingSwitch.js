const prompt = require("prompt-sync")();
let fNumber = Number(prompt("Enter First Number : "));
let operator = prompt("Enter + for Addition, - for Substraction, * for multiplication, / for Division");
let sNumber = Number(prompt("Enter Second Number :"));

function simpleCalculartorUsinSwitch(firstNumber, lastNumber, operation){
    switch(operation){
        case "+":
                console.log(`The first Number is ${firstNumber} the last Number ${lastNumber} their Sum is ${firstNumber+lastNumber}`);
                break;
         case "-":
                console.log(`The first Number is ${firstNumber} the last Number ${lastNumber} their sub ${firstNumber-lastNumber}`);
                break;
         case "*":
                console.log(`The first Number is ${firstNumber} the last Number ${lastNumber} their Mul is ${firstNumber*lastNumber}`);
                break;
        case "/":
                console.log(`The first Number is ${firstNumber} the last Number ${lastNumber} their Mul is ${firstNumber/lastNumber}`);
                break;
        default:
            console.log("Please enter valid operator");
    }
}

simpleCalculartorUsinSwitch(fNumber,sNumber,operator);