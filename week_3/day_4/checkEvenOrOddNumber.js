const prompt=require("prompt-sync")();
let number=prompt("Shyiramo Umubare turebeko ari igiharwe cg atari igiharwe: ");
function checkOddOrEven(numberFromUser){
   if(isNaN(numberFromUser)){
    return "Please Enter Valid Number! ";
   }else{
     if(numberFromUser%2 == 0){
        return `This Number : ${numberFromUser} is Even!`
    }else {
        return `This Number : ${numberFromUser} is Odd!`
    }
   }
}

console.log(checkOddOrEven(number));