const prompt = require("prompt-sync")();
function calculateMarks(){
let subject = prompt("Which Subject do you want to enter for Marks : ");
let numberOfMarks = Number(prompt("How Many Number of Marks? : "));
let marksDatabase =[];
let sumOfMarks=0;
let averageOfMarks=0;

for(let i=1; i<=numberOfMarks; i++){
    let enteredMarks = Number(prompt(`Please Enter ${i} Marks : `));
    marksDatabase.push(enteredMarks);
    sumOfMarks = sumOfMarks + enteredMarks;

}
averageOfMarks=sumOfMarks/numberOfMarks;

console.log("You are welcome to our school, this is your ", subject, "Marks");
console.log("======================================");
console.log("the Marks you have entered are ", marksDatabase)
console.log("You have entered ", numberOfMarks, " As number od Marks , and their sum is ", sumOfMarks, " And their average is : ", averageOfMarks );
}


calculateMarks()