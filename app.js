 const passwordBox = document.getElementById("password");
 const copyBtn = document.getElementById("copy").addEventListener("click", passwordCopy);;
 const generateBtn = document.getElementById("generate").addEventListener("click", generatePassword);
 const lenght = 12;

 const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
 const numbers = "0123456789";
 const symbols = ".-+=_,!@$#*%<>[]{}";

 const allChars = upperAlphabet + lowerAlphabet + numbers + symbols;

 function generatePassword(){
    let password = "";
    password += upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];
    password += lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
 }

 function passwordCopy() {
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordBox.value);
    if (passwordBox.value == "") {
        document.getElementById("successful").style.color = "red";
        document.getElementById("successful").innerHTML = "Not Copied! Please generate a password!";
    } else {
        document.getElementById("successful").style.color = "green";
        document.getElementById("successful").innerHTML = "Copied!";
    }
}
