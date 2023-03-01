// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["1,2,3,4,5,6,7,8,9,0"];
var symbols = ["!,),(,&,*,%,^,$,#,@,+,?,>,<,:,|,{,},~"];
var uppercase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]; 
var lowercase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var length;
var uppercaseletters;
var lowercaseletters;
var numbers;
var symbolschar;


// Length of Password
function chosepasswordlength(){
  length = prompt("Thank you for coming, please chose password length. (between 8-128 characters):");

  if (length <8){
    confirm("password length cannot be shorter than 8 characters, please try again");
    chosepasswordlength();

  }else if (length >128){
    confirm("password length cannot be longer than 128 characters, please try again");
    chosepasswordlength();

  }else if (isNaN (length)){
    confirm ("Only numbers must be entered here. Please try again");
    chosepasswordlength();



  // }else if (passwordlength== "1234567890"){
  //   confirm("You may now proceed to the next steps");
  //   return length();

  // }else if (passwordlength!= numbers){
  //   confirm("Password must contain only numbers");
  //   // chosepasswordlength();
    
  }else {
    confirm("You may now proceed to the next steps.");
  }
  return length;

}



function chosesymbols(){
  symbolschar = prompt("Would you like to include any symbols in your password? (Yes/No)");
  symbolschar = symbolschar.toLowerCase();


  // if (symbolschar !== ("Yes or No")){
  //   confirm ("Please enter Yes or No")
  //   chosesymbols();
  // }
  
  if (symbolschar == ("")){
    confirm("please enter Yes or No");
    chosesymbols();

  }if (symbolschar == ("Yes or No")){
      confirm ("You may now proceed to the next step")
      chosesymbols();

  }else if (symbolschar === "yes"){
    symbolschar = true;
    return symbolschar
    
  }else if (symbolschar === "no"){
    symbolschar = false;
    return symbolschar;
  }else {
    alert("Please answer Yes or No");
    chosesymbols();
  }
  return symbolschar;
  }


  function uppercaseselect(){
    uppercaseletters = prompt("Would you like to include uppercase letters in your password? (Yes/No)");
    uppercaseletters = uppercaseletters.toLowerCase();
    
    if (uppercaseletters == ("")){
      alert ("please enter Yes or No");
      uppercaseselect();
  
    }else if (uppercaseletters === "yes"){
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
    lowercaseletters = prompt("Would you like to include lowercase letters in your password? (Yes/No)");
    lowercaseletters = lowercaseletters.toLowerCase();
    
    if (lowercaseletters == ("")){
      alert ("please enter Yes or No");
      lowercaseselect();
  
    }else if (lowercaseletters === "yes"){
      lowercaseletters = true;
      return lowercaseletters
  
    }else if (lowercaseletters ==="no"){
      lowercaseletters = false;
      return lowercaseletters;
  
    }else {
      alert("You may now proceed to the next step");
      lowercaseselect();
    }
    return lowercaseletters;
  
  }

  function generatePassword(){
    chosepasswordlength();
    console.log(length);
    chosesymbols();
    console.log(symbolschar);
    uppercaseselect();
    console.log(uppercaseletters);
    lowercaseselect();
    console.log(lowercaseletters);

    var characters = numbers;
    var password = "";
    if (lowercaseletters && symbolschar && uppercaseletters){
     characters += lowercaseselect + chosesymbols + uppercaseselect;

    }else if (lowercaseletters && symbolschar){
      characters += lowercaseselect + chosesymbols;

    }else if (symbolschar && uppercaseletters){
      characters += chosesymbols + uppercaseselect;

    }else if (lowercaseletters && uppercaseletters){
      characters += lowercaseselect + uppercaseselect;

    }else if (lowercaseletters){
      characters += lowercaseselect;

    }else if (symbolschar){
      characters += chosesymbols;

    }else if (uppercaseletters){
      characters += uppercaseselect;

    }else{
      characters === numbers;
    }

    for(var i = 0; i < length; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password1;

}

