const prompt = require('prompt-sync')();
let temp = prompt("Please Enter a Temperature :");
let convertedTemp = Number(temp);

if(convertedTemp < -15 || convertedTemp > 36){
    console.log("Unrealistic");
}
else if(convertedTemp < 15){
    console.log("Wear Warm Clothes");
}else if(convertedTemp >=15 && convertedTemp<=25){
    console.log("Wear Normal Clothes");
}else if(convertedTemp >25){
    console.log("Wear Light clothes");
}else{
    "Please Enter valid Temperature"
}