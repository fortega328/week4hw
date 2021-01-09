// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = lowerString.split("")
var upperArray = lowerString.toUpperCase().split("")
var symbolString = "!@#$%^&*()"
var symbolArray = symbolString.split("")
var numberString = "0123456789"
var numberArray = numberString.split("")


function askForOptions() {
  var pwLength = parseInt(prompt('how many chars?'));
  if(pwLength < 8 || pwLength > 128) {
    alert("ple\ase choose a num between 8 and 128");
    return;
  }
  if (isNaN(pwLength)) {
    alert("please choose a valid number between 8 and 128")
    return;
  }
  var wantLower = confirm("do you want lower case letters?");
  var wantUpper = confirm('do you want upper case letters?');
  var wantSymbols = confirm('do you want symbols?');
  var wantNumbers = confirm('do you want numbers?');

  if(wantLower === false && wantUpper === false && wantSymbols === false && wantNumbers === false) {
    alert("please choose at least one char option for pw")
    return;
  }
  console.log(pwLength);

  var optionsObject = {
    pwLength,
    wantLower,
    wantUpper,
    wantNumbers,
    wantSymbols
  }

  return optionsObject
}

// generate pw function
function generatePassword() {
  var options = askForOptions();
  var bigArray = [];
  var results = []


  if (options.wantLower) {
    bigArray = bigArray.concat(lowerArray)
  }
  // if yes add to pw
  if (options.wantUpper) {
    bigArray = bigArray.concat(upperArray)
  }
  // if yes add to pw
  if (options.wantNumbers) {
    bigArray = bigArray.concat(numberArray)

  }
  // // if yes add to pw
  if (options.wantSymbols) {
    bigArray = bigArray.concat(symbolArray)

  }

  // set the character limit of pw. need to apply length to pw
  for(var i = 0; i < options.pwLength; i++) {
    var index = Math.floor(Math.random() * bigArray.length)
    console.log(index)
    var digit = bigArray[index]
    console.log(digit);
    results.push(digit)
  }

  return results.join("")
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

