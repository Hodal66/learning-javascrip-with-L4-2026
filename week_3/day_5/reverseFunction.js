const prompt=require("prompt-sync")();
let string=prompt("enter the word:");
function reverseString(string){
    let result="";

    for(let text=0;text<string.length;text++){
result=string[text]+result;        
    }
    return result;
}
console.log(reverseString(string));
