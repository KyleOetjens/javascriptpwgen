/*// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*//*
let pwoption = {
  allchar: [],
  lowchar: [],
  highchar:[],
  spchar: [],
  numchar: []
  }

  let casehigh = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  let caselow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let charSpecial = [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`]
  let numInclude = [0,1,2,3,4,5,6,7,8,9,]
  
let lowchar 
let highchar
let spchar 
let numchar 
let galaxy =[]
//let tlength = window.prompt ("How many characters should be in your Password(Min-8 Max-128)")

//if (generateBtn){
  console.log("this is where you start")
  let tlength = window.prompt ("How many characters should be in your Password(Min-8 Max-128)")
  boil()
  gp(

  )*/
  //gentok()

// let randomTopic = compChoices[Math.floor(Math.random() * compChoices.length)]; 



/*
function boil (){
  let length = window.prompt ("How many characters should be in your Password(Min-8 Max-128)")

passwordCaseLower = window.confirm("would you like lowercase characters")
if (passwordCaseLower===true){
  let lowchar = caselow
  console.log(lowchar);
  console.log(pwoption.allchar.concat(lowchar))
}
passwordCaseUpper = window.confirm("would you like uppercase characters?")
if (passwordCaseUpper===true){
  let highchar= casehigh
  console.log(highchar);
  console.log(pwoption.allchar.concat(highchar))
 }
passwordNumber = window.confirm("would you like numbers?")
if (passwordNumber===true){
  let numchar = numInclude
  console.log(numchar);
  console.log(pwoption.allchar.concat(numchar))
}
passwordCharacter = window.confirm("would you like special characters")
if (passwordCharacter===true){
  let spchar = charSpecial
  console.log(spchar);
  console.log(pwoption.allchar.concat(spchar))
 }
  
  console.log(pwoption.allchar);
  console.log(length);
}
*/
/*
function boil (){
if (window.confirm("would you like lowercase characters")){
  let lowchar = caselow;
  console.log(lowchar);
  galaxy.push(lowchar);
 
}
if (window.confirm("would you like uppercase characters?")){
  let highchar= casehigh;
  console.log(highchar);
 galaxy.push(highchar);
 }
if (window.confirm("would you like numbers?")){
  let numchar = numInclude;
  console.log(numchar);
  galaxy.push(numchar)
}
if (window.confirm("would you like special characters")){
  let spchar = charSpecial;
  console.log(spchar);
  galaxy.push(spchar)
 }
 
  console.log(galaxy);
  console.log(tlength);
  
  for (let i = 0; i<tlength; i++) {
    [Math.floor(Math.random() * galaxy.length)]
    console.log(galaxy[i])
  }
}

*/
console.log("can you see me")

const tlength = 5
galaxy = `e,f,#,P,L,w,S,B,3,0,I,8,%`

function gp(tlength){
 let i=0
 while (i<tlength) {
  [Math.floor(Math.random() * galaxy.length)];
        console.log([i]);
        i++;
 }
}
gp(tlength)
/*

 function gentok(tlength){
  let pw = "";
  acharlength=pwoption.allchar.length
  for (let i = 0; i<= tlength; i++) {
    pwoption.allchar[Math.floor(Math.random() * acharlength)];
    console.log([i])
  }
 }

*/

