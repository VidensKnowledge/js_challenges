

// Have the function alphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 


// I need to make each letter of the alphabet have a value of the order it is in.
let alphStr = "abcdefghijklmnopqrstuvwxyz";

// I need to get a value assigned to each of the letters in the string.
alphArr = alphStr.split("");
console.log(alphArr);
console.log(alphArr.indexOf("a"));

//because each letter now has an array index, they are properly valued.

// Now I need to pass a string to the function and have it output the string in its ordered value


function alphabetSoup(str) {
  inputStr = "yellow pillow";
  // get input string letters and assign it to index of alphStr
  inputArr = inputStr.split("");
  inputArr.sort();
  inputArr.join();
  



}
// console.log("please enter a string:");
