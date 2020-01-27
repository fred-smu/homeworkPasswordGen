// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var CharArry = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "{", "}", "|", "~"];
var MaxCharArry = CharArry.length;
var MaxPassWLength = 128;
var MaxLetter
var alfaRB, alfaNumRB, allRB, capchoiceL, capchoiceU, capchoiceB = false;
var passwordPart = "";
var elementNum = -1;
var passwordALL = "";
var PasswordCount = -1;
var text = "";
var letter1, letter2 = null;
var numberSize = 8;
var i = 0;
function writePassword() {
    if (passwordALL.length > 7){ passwordALL = ""};
    do {
        alfaRB = false;
        alfaNumRB = false;
        allRB = false;
        letter1 = prompt("Do you want just (L)etters Letters and (N)numbers or Letters,Numpers And (S)pecial Characters");
        if (letter1 === "L" || letter1 === "l" || letter1 === "N" || letter1 === "n" || letter1 === "s" || letter1 === "S") {
            if (letter1 === "L" || letter1 === "l") {
                alfaRB = true;
                alfaNumRB = false;
                allRB = false;
                i = 10;
            } else if (letter1 === "N" || letter1 === "n") {
                alfaRB = false;
                alfaNumRB = true;
                allRB = false;
                i = 10;
            } else if (letter1 === "S" || letter1 === "s") {
                alfaRB = false;
                alfaNumRB = false;
                allRB = true;
                i = 10;
            }
        } else {
            alert(" Please Enter a L,N, or S");
        }
    }
    while (i < 5);
    i = 0;
    capchoiceL = false;
    capchoiceU = false;
    capchoiceB = false;
    do {
        letter1 = prompt("Do you want your password in all (L)ower , (U)pper case or (B)oth");
        if (letter1 === "L" || letter1 === "l" || letter1 === "U" || letter1 === "u" || letter1 === "b" || letter1 === "B") {
            if (letter1 === "L" || letter1 === "l") {
                capchoiceL = true;
                capchoiceU = false;
                capchoiceB = false;
                i = 10;
            } else if (letter1 === "U" || letter1 === "u") {
                capchoiceL = false;
                capchoiceU = true;
                capchoiceB = false;
                i = 10;
            } else if (letter1 === "B" || letter1 === "b") {
                capchoiceL = false;
                capchoiceU = false;
                capchoiceB = true;
                i = 10;
            }
        } else {
            alert(" Please Enter a L,U, or B");
        }
    }
    while (i < 5);
    i = 0;
    do {
        letter2 = prompt("Enter a Number bewteen 8 and 128 for how long you want your password to be");
        numberSize = parseInt(letter2);
        if (numberSize >= 8 && numberSize <= 128) {
            PasswordCount = numberSize;
            i = 10;
        } else {
            alert("Number out of range value, Please enter number between 8 and 128");
        }
    }
    while (i < 5);
    /*************************** ********************
    * code selects proper element
    * if the select just alfa then elemend 0 to 26
    * if the select alfa numeric 0 to 36
    * if the select Specile char the 0 to 63
    ************************************************************/
    PasswordCount = numberSize;
    for (let index = 0; index < PasswordCount; index++) {
        // const element = array[index];
        // alfaRB= true;
        //alfaNumRB = true;
        //allRB = true;
        if (alfaRB === true) {
            elementNum = Math.floor(Math.random() * 26);
            passwordPart = CharArry[elementNum];
        } else if (alfaNumRB === true) {
            elementNum = Math.floor(Math.random() * 36);
            passwordPart = CharArry[elementNum];

        } else if (allRB === true) {
            elementNum = Math.floor(Math.random() * 63);
            passwordPart =  CharArry[elementNum];
        }
         /*************************************************
         * code changes case based on users selection
         * if capchoice = lower case
         * if capchoice = upper case
         * if capchoice is both upper and lowwer case
         * ************************************************/
        // capchoiceL= true;
        // capchoiceU = true;
        //  capchoiceB = true;
        if (capchoiceL === true) {
            passwordPart = CharArry[elementNum].toLowerCase();
        }
        else if (capchoiceU === true) {
            passwordPart = CharArry[elementNum].toUpperCase();
        } else if (capchoiceB === true) {
            if (Math.floor(Math.random() * 11) < 5) {
                passwordPart = CharArry[elementNum].toLowerCase();
            } else {
                passwordPart = CharArry[elementNum].toUpperCase();
            }
        }
        passwordALL = passwordALL + passwordPart;
    }
    passwordText.value = passwordALL;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
passwordALL = null;
