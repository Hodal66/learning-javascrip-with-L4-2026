const prompt = require("prompt-sync")();

function checkFullNames(){
let firstName = prompt("Please Enter your First Name : ");
let lastName = prompt("Please Enter your Last Name : ");
console.log(`Hello ${lastName} ${firstName} You are welcome to timtom Aviation`);
}

function checkAges(){
    let ages = prompt("Please Enter Your Ages : ");
    let convertedAges = Number(ages);
    if(convertedAges>20){
        console.log("You are an Adulte");
    }else if(convertedAges<=20){
     console.log("You are still young")
    }else{
        console.log("Please Enter Valid Ages");
    }
}

checkAges();
checkFullNames();
