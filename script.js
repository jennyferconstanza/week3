//prompt that appears when page is first loaded 
window.onload = alert ("Welcome! You will be prompted with a series questions to generate a password. Please click on 'Generate Password' to get started.");
//array of possible password character choices
function generatePassword() {
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
  var possibleCharacters = [];
//prompt will ask for length of password from 8-128 characters
  passwordLength = prompt("How many characters do you want in your password? The password length must be between 8 and 128 characters.");
//if the user's input of number of characters is less than 8 or greater than 128, return is prompted 
    if (passwordLength < 8 || passwordLength > 128) {
     return "Password length must be between 8 and 128 characters, please enter a valid number of characters.";
  // if the user's input is a character that is not a number, message is prompted
      } else if (isNaN(passwordLength)) {
      passwordLength = prompt("Please enter a valid number.");
  //if user's input of number of characters is between 8-128, the user's input is confirmed
    } else {
      alert("Your password will be " + passwordLength + " characters long.");
    }
  //after user inputs a valid number of characters for password, user is prompted with following series of questions to determine the types of characters that will appear in the finalized generated password
  lowercaseConfirm = confirm("Would you like to include lowercase characters in your password?");
    if (lowercaseConfirm) {
      alert("Your password will have lowercase characters.");
    } else {
      alert("Your password will NOT have lowercase characters.");
    }

  uppercaseConfirm = confirm("Would you like to include uppercase characters in your password?");
    if (uppercaseConfirm) {
      alert("Your password will have uppercase characters.");
    } else {
      alert("Your password will NOT have uppercase characters.");
    }

  numbersConfirm = confirm("Would you like to include numeric characeters in your password?");
    if (numbersConfirm) {
      alert("Your password will have numeric characters.");
    } else {
      alert("Your password will NOT have numeric characters.");
    }

  specialConfirm = confirm("Would you like to include special characters in your password?");
    if (specialConfirm) {
      alert("Your password will have special characters.");
    } else {
      alert("Your password will NOT have special characters.");
    }
//if user does not input any character type, message is prompted and no password will be generated
  if (lowercaseConfirm === false && uppercaseConfirm === false && numbersConfirm === false && specialConfirm === false) {
    return "Please select at least one character type.";
  };
//end of series of questions that are prompted to user
//possibilities for generated password based on selection of character types by user
  if (lowercaseConfirm) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (uppercaseConfirm) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (numbersConfirm) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
  }
  if (specialConfirm) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  } 
//possibilities of generated password
  let finalizedPassword = ""
    for (let i = 0; i < passwordLength; i++) {
      let rng =[Math.floor(Math.random() * possibleCharacters.length)];
      finalizedPassword = finalizedPassword + possibleCharacters[rng];
    }
    return finalizedPassword;
};
//assignment Code
var generateBtn = document.querySelector("#generate");
//write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//add event listener to generate button
generateBtn.addEventListener("click", writePassword);