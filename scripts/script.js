// Assignment Code
var generateBtn = document.querySelector("#generate");

var numOfCharacters;
var includeLower = false;
var includeUpper = false;
var includeNum = false;
var includeSpecial = false;
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = lower.toUpperCase();
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+-=~`;':,.<>/?[]{}"
var availableChar;
var pwChar;

  //get number of characters from user
  function getNumofCharacters() {
    numOfCharacters = window.prompt("Enter desired number of characters from 8 to 128");

    //if canceled is pushed, state the generator was cancelled and stop function.
    if (numOfCharacters == null) {
      window.alert("password generator canceled");
      return;
    } 
  
    //if non numerical value or value outside of range alert user and promt for entry again
    else if (numOfCharacters < 8 || numOfCharacters > 128 || isNaN(numOfCharacters)) {
      window.alert("Invalid entry, please enter a number from 8 to 128");
      getNumofCharacters();
    } else getCharacterTypes(); 

    console.log(numOfCharacters);
  }

  //ask user if they want to include uppercase letters, numbers, and/or special characters
  //and change corresponding include variables depending on confirm window entry
  function getCharacterTypes() {
    includeLower = window.confirm("Include lowercase letters?");
    console.log(includeLower);

    includeUpper = window.confirm("Include Uppercase Letters?");
    console.log(includeUpper);

    includeNum = window.confirm("Include Numbers?");
    console.log(includeNum);

    includeSpecial = window.confirm("Include Special Characters?");
    console.log(includeSpecial);

    if (!includeLower && !includeUpper && !includeNum && !includeSpecial) {
      window.alert("You must choose at least one character type");
      getCharacterTypes();
    } else concatAvailableChar();   
  }  

  //function to create a single string containing all potential characters
  //to be used to generate the password
  function concatAvailableChar() {

    availableChar = "";

    //add lowercase to available characters if checked yes
    if (includeLower) {
      availableChar += lower;
    }

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
    
    console.log(availableChar);
    generatePassword();
  }

  //use .charAt and math.floor with math.random to randomly choose a character from the string
  //of available characters the same number of times as the chosen password length
  function generatePassword () {
    pwChar = '';
    for (let i = 0; i < numOfCharacters; i++) {
      var nextChar = Math.floor(Math.random()*availableChar.length + 1);
      console.log(nextChar);
      pwChar += availableChar.charAt(nextChar)  
    }
    console.log(pwChar);
    recordPassword();
  }

  //put randomly chosen password into text area
  function recordPassword() {
  
    var passwordText = document.querySelector("#password");

    passwordText.value = pwChar;
  }

// Add event listener to generate password button
generateBtn.addEventListener("click", getNumofCharacters);
