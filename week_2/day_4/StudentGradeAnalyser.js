const prompt = require('prompt-sync')();
let marks = prompt("Please Enter Marks : ");
let convertedMarks = Number(marks);

if(convertedMarks >=0 && convertedMarks <=100){
    switch(true){
        
        case convertedMarks >= 80:
            console.log("Grade A");
            console.log("Excellent!");
            break;
        case convertedMarks > 70:
            console.log("Grade B");
             console.log("Excellent!");
            break;
        case convertedMarks > 60:
            console.log("Grade C");
             console.log("Good!");
            break;
        case convertedMarks > 50:
            console.log("Grade D");
             console.log("Good!");
            break;
        default:
            console.log("Failed");
    console.log("Need Improvement")

    }
}else{
    console.log("Please Enter Marks between 0 and 100");
}
