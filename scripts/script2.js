// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numOfCharacters = window.prompt("Enter number of characters from 8 to 128");

if (numOfCharacters === null) {
  text = "password generator canceled";
} else if (numOfCharacters < 8) {
  numOfCharacters = window.prompt("Enter number of characters from 8 to 128");
}  else if (numOfCharacters > 128) {
  numOfCharacters = window.prompt("Enter number of characters from 8 to 128");
}
 


console.log(numOfCharacters);
