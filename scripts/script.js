// Assignment Code
var generateBtn = document.querySelector("#generate");

var numOfCharacters;
var includeUpper = false;
var includeNum = false;
var includeSpecial = false;
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = lower.toUpperCase();
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+~`;':,.<>/?[]{}"
var availableChar;

// Write password to the #password input
function writePassword() {

  numOfCharacters = window.prompt("Enter number of characters from 8 to 128");


  //if canceled is pushed, state the generator was cancelled and stop function.
  if (numOfCharacters == null) {
    window.alert("password generator canceled");
    return;
  } 
  
  //if non numerical value or value outside of range alert user and promt for entry again
    else if (numOfCharacters < 8 || numOfCharacters > 128 || isNaN(numOfCharacters) ) {
    window.alert("Invalid entry");
    writePassword();
  }  

  console.log(numOfCharacters);

  //ask user if they want to include uppercase letters, numbers, and/or special characters
  //and change corresponding include variables depending on confirm window entry
  includeUpper = window.confirm("Include Uppercase Letters?");
  console.log(includeUpper);

  includeNum = window.confirm("Include Numbers?");
  console.log(includeNum);

  includeSpecial = window.confirm("Include Special Characters?");
  console.log(includeSpecial);

  //function to create a single string containing all potential characters
  //to be used to generate the password
  function getAvailableChar() {

    availableChar = lower;

    //add upper case to avaiable characters if checked yes
    if (includeUpper) {
      availableChar += upper;
    }
    //add numbers to available characters if checked yes 
    if (includeNum) {
      availableChar += numbers;
    }
    //add special characters to available characters if checked yes
    if (includeSpecial) {
      availableChar += specialChar;
    }
  }

  //call getAvailableChar function to set all wanted characters into availableChar variable
  getAvailableChar();
  console.log(availableChar);

  function generatePassword () {
    const pwChar = [];
    for (let i = 0; i < numOfCharacters; i++) {
      const 
    }
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);