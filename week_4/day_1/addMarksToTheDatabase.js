const prompt = require("prompt-sync")();
console.log("Please Enter Three Marks of your Student: ");
let marksDatabase =[];
let sum = 0;
for(let i =0; i<=3; i++){
    let marks = Number(prompt(`Please Enter Mark ${i} : `));

    marksDatabase.push(marks);
sum +=marks;
}
console.log("marks:",marksDatabase)
console.log("sum",sum);
console.log("average:", average);
