const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const pass1 = document.getElementById('pass-1');
const pass2 = document.getElementById('pass-2');
const generateBtn = document.getElementById('generate-btn');

const passLength = 15;

generateBtn.addEventListener('click', () => {
    pass1.textContent = generatePass();
    pass2.textContent = generatePass();
})

function getRandomNumber() {
    return Math.floor(Math.random() * characters.length);
}

function generatePass() {
    let pass = '';

    for (let i = 0; i < passLength; i++) {
        let character = characters[getRandomNumber()];
        pass += character;
    }

    return pass;
}
