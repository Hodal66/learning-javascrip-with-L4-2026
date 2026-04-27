const prompt =require("prompt-sync")();
let day = prompt("Please enter day of week 1 up to 7 :");
let convertedDay = Number(day);
if(convertedDay != Number(convertedDay)){
    console.log("Please enter valid Number");
}
else{
    switch(convertedDay){
        case 1 :
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("Wednesday");
            break;
        case 4 :
            console.log("Thursday");
            break;
        case 5 :
            console.log("Friday");
            break;
        case 6 :
            console.log("Saturday");
            break;
        case 7 :
            console.log("Sunday");
            break;   
    default:
        console.log("Please Enter valid Week number")
                
    }
}