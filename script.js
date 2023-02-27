// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["%", "#", "@", "$", "!", "*", "(", ")", "^", "="];
var uppercase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]; 
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
    prompt("password length cannot be shorter than 8 characters");
    chosepasswordlength();
  }else if (length >128){
    prompt ("password length cannot be longer than 128 characters");
    chosepasswordlength;
  // }else if (length =0){
  //   prompt ("password length must be a number between 8-128 characters");
  //   chosepasswordlength;
  }else{
    prompt("You may now proceed to the next steps");
  }
  return length;

}

function chosesymbols(){
  symbolschar = prompt ("Would you like to include any symbols in your password? (Yes/No)");
  symbolschar = symbolschar();

  if (""){
    prompt("please enter Yes or No");

  }else if (symbolschar === "yes"){
    symbolschar = true;
    return symbolschar
    
  }else if (symbolschar === "no"){
    symbolschar = false;
    return symbolschar;
  }else {
    prompt("please enter Yes or No");
    chosesymbols();
  }
  return symbolschar;
  }

  function generatePassword(){
    chosepasswordlength();
    console.log(length);
    chosesymbols();
    console.log(symbolschar);
  }









// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



