// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["%", "#", "@", "$", "!", "*", "(", ")", "^", "="];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
var lowercase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var passwordlength;
var uppercaseletters;
var lowercaseletter;
var numbers;
var symbolschar;


// Length of Password
function chosepasswordlength(){
  length = prompt("Thank you for coming, please chose password length. (between 8-128 characters):");

  if (length <8){
    prompt("password length cannot be shorter than 8 characters, please try again");
    chosepasswordlength();
  }else if (length >128){
    prompt ("password length cannot be longer than 128 characters");
    chosepasswordlength;
  // }else if (numbers!==(passwordlength)){
  //   prompt ("password length must be a number between 8-128 characters");
  //   chosepasswordlength;
  }else{
    alert("You may now proceed to the next steps.");
  }
  return length;

}



function chosesymbols(){
  symbolschar = prompt("Would you like to include any symbols in your password? (Yes/No)");
  symbolschar = symbolschar.toString();

  if (symbolschar == ("")){
    prompt("please enter Yes or No");
    chosesymbols();

  }else if (symbolschar === "yes"){
    symbolschar = true;
    return symbolschar
    
  }else if (symbolschar === "no"){
    symbolschar = false;
    return symbolschar;
  }else {
    alert("You may now proceed to the next step");
    chosesymbols();
  }
  return symbolschar;
  }


  function uppercaseselect(){
    uppercaseletters = prompt("Would you like to include uppercase letter in your password? (Yes/No)");
    uppercaseletters = uppercaseletters.toLowerCase();
    
    if (uppercaseletters == ("")){
      alert ("please enter Yes or No");
      uppercaseselect();
  
    }else if (uppercaseletters = "yes"){
      uppercaseletters = true;
      return uppercaseletters
  
    }else if (uppercaseletters ==="no"){
      uppercaseletters = false;
      return uppercaseletters;
  
    }else {
      alert("You may now proceed to the next step");
      uppercaseselect
    }
    return uppercaseletters
  
  }

  function lowercaseselect(){
    lowercaseletters = prompt("Would you like to include lowercase letter in your password? (Yes/No)");
    lowercaseletters = lowercaseletters.toString();
    
    if (lowercaseletters !== ("")){
      alert ("please enter Yes or No");
      lowercaseselect();
  
    }else if (lowercaseletters === "yes"){
      lowercaseletterss = true;
      return lowercaseletters
  
    }else if (lowercaseletterss ==="no"){
      lowercaseletters = false;
      return lowercaseletters;
  
    }else {
      alert("You may now proceed to the next step");
      lowercaseselect
    }
    return lowercaseletters
  
  }

  function generatePassword(){
    chosepasswordlength();
    console.log(length);
    chosesymbols();
    console.log(symbolschar);
    uppercaseselect();
    console.log(uppercaseletters);
    lowercaseselect();
    console.log(lowercaseselect);
  }









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



