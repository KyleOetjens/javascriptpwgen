//-Requires Object----------------------------This code works but is pussing the arrays as blocks?  not in to one-------------------------------
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

function boil (){ 
    if (window.confirm("would you like lowercase characters")){
      
      pwoption.lowchar.push(caselow);
      pwoption.allchar.push(caselow);
      console.log(pwoption.lowchar);
      console.log(pwoption.allchar);
    }
    if (window.confirm("would you like uppercase characters?")){
      
      pwoption.highchar.push(casehigh);
      pwoption.allchar.push(casehigh);
      console.log(pwoption.highchar);
      console.log(pwoption.allchar);
      
     }
    if (window.confirm("would you like numbers?")){
      
      pwoption.numchar.push(numInclude);
      pwoption.allchar.push(numInclude);
      console.log(pwoption.numchar);
      console.log(pwoption.allchar);
      
    }
    if (window.confirm("would you like special characters")){
      
      pwoption.spchar.push(charSpecial);
      pwoption.allchar.push(charSpecial);
      console.log(pwoption.spchar);
      console.log(pwoption.allchar);
      
     }}
     
     function gentok(tlength){
        let pw = "";
        acharlength=pwoption.allchar.length
        for (let i = 0; i<= tlength; i++) {
          pwoption.allchar[Math.floor(Math.random() * acharlength)];
          console.log([i])
        }
       }


// EXTRA STUFF BELOW THIS LINE_____________________________________________________________________________________
/*
 for (let i = 0; i<tlength; i++) {
        [Math.floor(Math.random() * galaxy.length)]
        console.log([i])}

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
 function gentok(tlength){
  let pw = "";
  acharlength=pwoption.allchar.length
  for (let i = 0; i<= tlength; i++) {
    pwoption.allchar[Math.floor(Math.random() * acharlength)];
    console.log([i])
  }
 }



 var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;



SAVE ASSIGNMENT CODE__________________
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
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

function writePassword() {

  let tlength = window.prompt ("How many characters should be in your Password(Min-8 Max-128)")
  if (window.confirm("would you like lowercase characters")){
      
    pwoption.lowchar.push(caselow);
    pwoption.allchar.push(caselow);
    console.log(pwoption.lowchar);
    console.log(pwoption.allchar);
  }
  if (window.confirm("would you like uppercase characters?")){
    
    pwoption.highchar.push(casehigh);
    pwoption.allchar.push(casehigh);
    console.log(pwoption.highchar);
    console.log(pwoption.allchar);
    
   }
  if (window.confirm("would you like numbers?")){
    
    pwoption.numchar.push(numInclude);
    pwoption.allchar.push(numInclude);
    console.log(pwoption.numchar);
    console.log(pwoption.allchar);
    
  }
  if (window.confirm("would you like special characters")){
    
    pwoption.spchar.push(charSpecial);
    pwoption.allchar.push(charSpecial);
    console.log(pwoption.spchar);
    console.log(pwoption.allchar);
  }
    let pw = "";
    acharlength=pwoption.allchar.length
    for (let i = 0; i<= tlength; i++) {
      pwoption.allchar[Math.floor(Math.random() * acharlength)];
      console.log([i])
    }
    var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
   }
   
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



allchar: [],
  lowchar: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  highchar:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  spchar: [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`],
  numchar: [0,1,2,3,4,5,6,7,8,9,]

*/







// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
let pwoption = {
  allchar: [],
  lowchar: [`abcdefghijklmnopqrstuvwxyz`],
  highchar:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  spchar: [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`],
  numchar: [0,1,2,3,4,5,6,7,8,9,]
  }
function writePassword() {

  let tlength = window.prompt ("How many characters should be in your Password(Min-8 Max-128)")
  
  if (window.confirm("would you like lowercase characters")){
    pwoption.allchar.concat(pwoption.lowchar);
    console.log(pwoption.allchar);
    console.log("step 1");
  }
  if (window.confirm("would you like uppercase characters?"))
  {
    pwoption.allchar.push(pwoption.highchar);
    console.log(pwoption.allchar);
    console.log("step 2");
   }
  if (window.confirm("would you like numbers?"))
  {
    pwoption.allchar.push(pwoption.numchar);
    console.log(pwoption.allchar);
    console.log("step 3");
  }
  if (window.confirm("would you like special characters"))
  {
    pwoption.allchar.push(pwoption.spchar);
    console.log(pwoption.allchar);
    console.log("step 4");
  }
let password = ""
const runlength = pwoption.allchar.length
    for (let i = 0; i< tlength; i++) {
     password = pwoption.allchar[Math.floor(Math.random() * runlength)];
     console.log(password);
     let passwordText = document.querySelector("#password");
      passwordText.value = password;
     
      
    }}
  //let passwordText = document.querySelector("#password");
  //passwordText.value = password;

  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

----------------------------------------------------------------------
"THISONEWORKS"
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

 let allchar = [];
  let lowchar =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 let highchar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let spchar = [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`];
  let numchar= [0,1,2,3,4,5,6,7,8,9,]
  
function writePassword() {

  let tlength = window.prompt ("How many characters should be in your Password(Min-8 Max-128)")
  
  if (window.confirm("would you like lowercase characters")){
    allchar = [...allchar,...lowchar];
    console.log(allchar);
    console.log("step 1");
  }
  if (window.confirm("would you like uppercase characters?"))
  {
    allchar = [...allchar,...highchar];
    console.log(allchar);
    console.log("step 2");
   }
  if (window.confirm("would you like numbers?"))
  {
    allchar = [...allchar,...numchar];
    console.log(allchar);
    console.log("step 3");
  }
  if (window.confirm("would you like special characters"))
  {
    allchar = [...allchar,...spchar];
    console.log(allchar);
    console.log("step 4");
  }
let password = ""
const runlength = allchar.length
    for (let i = 0; i< tlength; i++) {
     password += allchar[Math.floor(Math.random() * runlength)];
     console.log(password);
     let passwordText = document.querySelector("#password");
      passwordText.value = password;
     
      
    }}
  //let passwordText = document.querySelector("#password");
  //passwordText.value = password;

  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*Tutor Questions
The starter code has var password = generatePassword();---- What does that mean?
*/