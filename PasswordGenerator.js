
function generatepassword(passwordLength,includeLowercase,includeUppercase,includeSymbols,includeNumbers){
 
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolsChars = '@!é^$*ù;:,§/%µ£?-_€'

let allowedChars = '';
let password = '';

allowedChars += includeLowercase ? lowercaseChars : "";
allowedChars += includeUppercase ? uppercaseChars : "";
allowedChars += includeNumbers ? numberChars : "";
allowedChars += includeSymbols? symbolsChars : "";

if (passwordLength <= 0){
    return `(password length must be atleast 1)`;
}
if (allowedChars.length === 0){
return `(password must contain atleast 1 set of characters)`;
}

for(let i=0; i < passwordLength; i++ ){
 const randomIndex = Math.floor(Math.random() * allowedChars.length);
password += allowedChars[randomIndex]

}

return password;
}


const passwordLength= 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatepassword(passwordLength,
    includeLowercase,includeUppercase,includeNumbers,includeSymbols)

    console.log(`generated password is ${password}`)

    document.getElementById('password').value = password;
