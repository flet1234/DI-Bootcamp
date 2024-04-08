// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// -->

// function makeAllCaps(array) {
//     return new Promise((res,rej)=>{
//         let count=0
//         array.forEach((item,index) => {
//             if (typeof(item)=='string'){
//                 count++
//                 array[index]=item.toUpperCase()
//             }})
//         if (count==array.length){
//             res(array)
//         }
//         else {rej("Eror, you passed non string value")}
//     }) 
// }   

// function sortWords(array) {
//     return new Promise((res,rej)=>{
//         if (array.length>4){
//             res(array.sort())
//         } else {rej('Eror array is to short')}
//     })
// }

// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana"])
// .then((arr) => sortWords(arr))
// .then((result) => console.log(result))
// .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))
// --------------------------------------------------------------------

// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
// -->
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function yoJs(json) {
    return new Promise((res,rej)=>{
        if (json == ''){
            rej('json file is empty')
        } else{res(JSON.parse(json))}
    })
}
function toMorse(morseJS) {
    let result=[]
    return new Promise((res,rej)=>{
        let userInput=prompt('Please input a word or sentence: ').toLowerCase().replace(' ','').split('')
        for (let letter of userInput){
            console.log(userInput);
            if (!Object.keys(morseJS).includes(letter)){
                rej('Diktionary dont have that letter')
            }
            result.push(morseJS[letter])
        }
        res(result)
    })
}

function joinWords(morseTranslation) {
    let root=document.getElementById('root')
    morseTranslation.forEach(element => {
        root.innerHTML+=`${element}<br>`
    });
}

yoJs(morse).then(data=>toMorse(data).then(result=>joinWords(result)))