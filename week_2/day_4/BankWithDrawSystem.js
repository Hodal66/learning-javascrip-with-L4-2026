const prompt = require('prompt-sync')();
let balance = 20000;
let withdrawAmount = prompt("Please Enter Amount to Withdraw : ");
let convertedWithdrawAmount = Number(withdrawAmount);

if(convertedWithdrawAmount != Number(convertedWithdrawAmount)){
    console.log("Please Enter a Valid Amount");
}else{
    if(convertedWithdrawAmount > balance){
        console.log("Insufficient Balance");
    }else{
        balance = balance - convertedWithdrawAmount;
        console.log("Withdrawal Successful");
        console.log("Remaining Balance : ", balance);
    }
}