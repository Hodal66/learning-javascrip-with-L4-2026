const prompt = require("prompt-sync")();
let fullName = prompt("Please Enter Your Full Names : ");
function getFullNames(fullNameFromTheUserPrameter){
    console.log("Welcome To Timtom Aviation !");
    console.log("=========================");
    console.log("Your Name is : ");
    return fullNameFromTheUserPrameter;
}

let myFullName = getFullNames(fullName);

console.log(myFullName)
