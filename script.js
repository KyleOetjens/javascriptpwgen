// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
let arr
let password = ""
let tlength
let lowerConfirm
let upperConfirm
let numberConfirm
let specialConfirm
let allchar = [];
let lowchar =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let highchar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let spchar = [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`];
let numchar= [0,1,2,3,4,5,6,7,8,9,]

function getRandomPw (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function writePassword() {
do
{tlength = window.prompt ("How many characters should be in your Password(Min-8 Max-128, must be a numeric value)")}
while (tlength < 8 || tlength > 128 || isNaN(tlength));

  if (lowerConfirm = window.confirm("would you like lowercase characters")){
    allchar = [...allchar,...lowchar];
    password += getRandomPw(lowchar);
  }
  if (upperConfirm = window.confirm("would you like uppercase characters?")){
    allchar = [...allchar,...highchar];
    password += getRandomPw(highchar);
  }
  if (numberConfirm = window.confirm("would you like numbers?")){
    allchar = [...allchar,...numchar];
    password += getRandomPw(numchar);
  }
  if (specialConfirm = window.confirm("would you like special characters")){
    allchar = [...allchar,...spchar];
    password += getRandomPw(spchar);
  }
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    window.alert ("Then think of one yourself!")
    return
  }
  let runlength = (tlength - password.length)
    for  (let i = 0; i< runlength; i++) {
    password += allchar[Math.floor(Math.random() * allchar.length)];
    let passwordText = document.querySelector("#password");
    passwordText.value = password;}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/*Tutor Questions
How to add a MIT license after the fact
*/