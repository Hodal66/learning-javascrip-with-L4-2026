const prompt = require("prompt-sync")();
let fNumber = Number(prompt("Enter First Number : "));
let operator = prompt("Enter + for Addition, - for Substraction, * for multiplication, / for Division");
let sNumber = Number(prompt("Enter Second Number :"));

function simpleCalculartor(firstNumber, lastNumber, operation){
    if(operation == "+"){
        console.log(`You have entered ${firstNumber} and ${lastNumber} their sum is ${firstNumber+lastNumber}`);
    }
    else if(operation=="-"){
        console.log(`You have entered ${firstNumber} and ${lastNumber} their sub is ${firstNumber-lastNumber}`);

    }else if(operation=="*"){
        console.log(`You have entered ${firstNumber} and ${lastNumber} their Mul is ${firstNumber*lastNumber}`);
        
    }else if(operation=="/"){
        if(lastNumber==0){
            console.log("Please the lastNumber must not be equal to zero");
        }else{
            console.log(`You have entered ${firstNumber} and ${lastNumber} their division is ${firstNumber/lastNumber}`);
        }
        
    }else{
        console.log("Please Enter the collect Operator");
    }
}

simpleCalculartor(fNumber,sNumber,operator);