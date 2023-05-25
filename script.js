let generatePasswordButtonElement = document.querySelector("#generate-password")
let newPassword = [];
let generatePasswordElement = document.querySelector('#generated-password')

let upperCaseLettersArr= [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ]

function generatePassword() {
    console.log("clicked!!!")


    for(let i = 0; i < 8; i++) {
    let randomUpperCaseLetter = upperCaseLettersArr[Math.floor(Math.random() * 26)]
        newPassword.push(randomUpperCaseLetter)
        // console.log(newPassword)
    }
    

    console.log(newPassword)
    
    generatePasswordElement.innerHTML = newPassword.join('')
}

generatePasswordButtonElement.addEventListener('click', generatePassword);
