// user clicks generate button
  // function that asks quesiton
    // add event listener to button
// ask the user questions
  // length, upper, lower, number, special
  // prompt, confirm x4
// get their password
  // function that returns random password
    // 



// Assignment code here

var passwordupper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var passwordlower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','q','x','y','z'];
var passwordnumeric = ['1','2','3','4','5','6','7','8','9','0'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordupper = "";
}


//things you need
var passwordlength = function() {
  var asklength = window.prompt('How many characters long would you like your password? Passwords must contain at least 8 and at most 128.')
}

var passwordupper = function (message) {
  var askupper = window.prompt('Would you like your password to contain uppercase letters?')
}


var passwordlower = function () {
  var asklower = window.prompt('Would you like your password to contain lowercase letters?')
}

var passwordnumeric = function () {
  var asknumeric = window.prompt('Would you like your password to contain numbers?')
}


var passwordspecial = function () {
  var askspecial = window.prompt('Would you like your password to contain special characters?')
  if (askspecial === "yes") {}

  else if (askspecial === "no") {}

}

//try again?
function getinfo() {
  choices = [];
  passwordlength = parseInt(prompt("How many characters long would you like your password? Passwords must contain at least 8 and at most 128."));
  if(isNaN(passwordlength) || passwordlength < 8 || passwordlength > 128) {
    alert("Password length must be between 8 and 128 characters.")
    return false;
  }
}