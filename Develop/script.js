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

var passwordlength = window.prompt("How many characters long would you like your password? Passwords must contain at least 8 and at most 128.");
var passwordupper = window.confirm("Would you like your password to contain upper case letters?");
var passwordlower = window.confirm("Would you like your password to contain lower case letters?");
var passwordnumeric = window.confirm("Would you like your password to contain numbers?");
var passwordspecial = window.confirm("Would you like your password to contain special characters?");

var passwordupper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var passwordlower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','q','x','y','z'];
var passwordnumeric = ['1','2','3','4','5','6','7','8','9','0'];
var passwordspecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

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
  var password = "";
}

//needs to go somewhere
for(var i = 0; i < passwordlength; i++) {
  console.log(passwordlength[i]);
}


//okay let's try this yet again.

console.log(passwordlength);

console.log(passwordupper);