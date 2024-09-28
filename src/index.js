const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': ' ',
};

function decode(expr) {
    let array = [];
    let x = 0;
    let y = 10;
    while (y <= expr.length) {
        array.push(expr.slice(x, y));
        x = x + 10;
        y = y + 10;
    }
    let text=[];
    let newArray = array.map(item => item.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '').replace(/\*{10}/g, ' '));
    newArray.forEach(item => {
        if (MORSE_TABLE[item]){
            text.push(MORSE_TABLE[item]);
        }
    });
    let result=text.join('');
    return result
}

module.exports = {
    decode
}