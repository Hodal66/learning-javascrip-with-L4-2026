const prompt = require("prompt-sync")();
let firstName = prompt("Please Enter your First Name : ");
let lastName = prompt("Please Enter your Last Name : ");

function getFullNames(firstNameFromUser, lastNameFromUser){
console.log("You are welcome to Timtom Aviation Agency :");
console.log("===================================");
console.log("Your names are : ");
return lastNameFromUser+ " "+ firstNameFromUser;
}

console.log(getFullNames(firstName, lastName));