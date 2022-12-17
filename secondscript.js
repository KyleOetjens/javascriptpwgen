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

       for (let i = 0; i<tlength; i++) {
        [Math.floor(Math.random() * galaxy.length)]
        console.log([i])