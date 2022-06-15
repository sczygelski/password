// user clicks generate button
  // function that asks quesiton
    // add event listener to button
// ask the user questions
  // length, upper, lower, number, special
  // prompt, confirm x4
// get their password
  // function that returns random password
    // 




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordlength;
var passwordupper;
var passwordlower;
var passwordnumeric;
var passwordspecial;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

var answer ="";
var password ="";
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','q','x','y','z'];
var numeric = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

passwordlength = parseInt(prompt("How many characters long would you like your password? Passwords must contain at least 8 and at most 128."));
  if (passwordlength < 8 || passwordlength > 128) {
    alert("You entered " + passwordlength + " which is not between 8 and 128. Try again!")
    return;  
  }  
passwordupper = confirm("Would you like your password to contain upper case letters?");
  if (passwordupper) {
    answer+=upper
  }
passwordlower = confirm("Would you like your password to contain lower case letters?");
  if (passwordlower) {
    answer+=lower
  }
passwordnumeric = confirm("Would you like your password to contain numbers?");
  if (passwordnumeric) {
    answer+=numeric
  }
passwordspecial = confirm("Would you like your password to contain special characters?");
  if (passwordspecial) {
    answer+=special
  }


  for(var i = 0; i < passwordlength; i++) {
    var randomLetter = Math.floor(Math.random() * answer.length);
    password +=answer(randomLetter);
  }
  return password;
}

