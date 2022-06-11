// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//things you need
var passwordlength = function() {
  var asklength = window.prompt('How many characters long would you like your password? Passwords must contain at least 8 and at most 128.')
}

var passwordupper = function () {
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
}