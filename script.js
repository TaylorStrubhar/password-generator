// Assignment code here

// User input
var output;
var userUppercase;
var userLowercase;
var userNumeric;
var userSpecial;

// Password Variables

upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// I had to look up how to add "[, ] and \"
special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



generateBtn.addEventListener("click", writePassword);

function writePassword(length) {
    var result = "";
    var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numericCharacters = "0123456789";
    var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    
}


// Get references to the #generate element
var generateBtn = document.querySelector("generate"); {
    var upperCase = window.prompt("Would you like to include upper case characters?");
    var lowerCase = window.prompt("Would you like to include lower case characters?");
    var numeric = window.prompt("Would you like to include numeric characters?");
    var specialChar = window.prompt("Would you like to include special characters?");
    var charactersLength = window.prompt("How many characters would you like to include in your password? (between 8 and 128)")
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
