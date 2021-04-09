// Assignment Code
var generateBtn = document.querySelector("#generate");
//var numofCharacters = 0;

//make input window for # of characters
var numOfCharacters = window.prompt("Enter number of characters from 8 to 128");

//if (numOfCharacters === null) {
  //text = "password generator canceled";
//} //else if (numOfCharacters < 8) {
  //numOfCharacters = window.prompt("Enter number of characters from 8 to 128");
//}  else if (numOfCharacters > 128) {
  //numOfCharacters = window.prompt("Enter number of characters from 8 to 128");
//}
 


//console.log(numberOfCharactersInt);



//while (numberOfCharactersInt <8 || numberOfCharactersInt > 128) {
  //var numOfCharactersStr = window.prompt("Enter number of characters from 8 to 128");
  //var numOfCharactersInt = parseInt(numOfCharactersStr);
//} 

//console.log(numOfCharactersInt);







//create array with lowercase, uppercase, and special characters
const alphaUpperCase = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpperCase = alphaUpperCase.map((x) => String.fromCharCode(x));
console.log(alphabetUpperCase);

const alphaLowerCase = Array.from(Array(26)).map((e, i) => i + 97);
const alphabetLowerCase = alphaLowerCase.map((x) => String.fromCharCode(x));
console.log(alphabetLowerCase);

const num = Array.from(Array(10)).map((e, i) => i + 48);
const numerals = num.map((x) => String.fromCharCode(x));
console.log(numerals);

//const special = Array.from(Array())
//const soecialChar = num.map((x) => String.fromCharCode(x));
//console.log(specialChar);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
