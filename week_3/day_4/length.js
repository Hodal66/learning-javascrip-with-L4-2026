const prompt=require("prompt-sync")();
let sentence=prompt("pleas can you enter the sentence :")
function countWords(sentence) {
  const words = sentence.trim().split(/\s+/);
  return words.length
}
 
console.log(countWords(sentence));