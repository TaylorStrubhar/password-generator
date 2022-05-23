// Assignment code here

// User input
var output;
var userUppercase;
var userLowercase;
var userNumeric;
var userSpecial;
var yesNo
var generateBtn = document.querySelector("#generate");

// Password Variables

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// I had to look up how to add "[, ] and \" on fullstack
special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

generateBtn.addEventListener("click", function () {
    pwstring = writePassword();
    document.getElementById("password").placeholder = pwstring;
});

function writePassword() {
enter = parseInt(prompt("How many characters would you like in your password? Please choose a number between 8 and 128."));
if (!enter) {
    alert("Please enter a number!");
} else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must enter a number between 8 and 128!"));

} else {
    confirmSpecial = confirm("Do you want your password to contain special characters?")
    confirmNumber = confirm("Do you want your password to contain numeric values?");
    confirmLower = confirm("Do you want your password to contain lowercase letters?");
    confirmUpper = confirm("Do you want your password to contain uppercase letters?")
};

}

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
