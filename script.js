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
    
}

// Get references to the #generate element
 {
    var upperCase = window.prompt("Would you like to include upper case characters?");
    var lowerCase = window.prompt("Would you like to include lower case characters?");
    var numeric = window.prompt("Would you like to include numeric characters?");
    var specialChar = window.prompt("Would you like to include special characters?");
    var charactersLength = window.prompt("How many characters would you like to include in your password? (between 8 and 128)")
};

// Write password to the #password input
function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
