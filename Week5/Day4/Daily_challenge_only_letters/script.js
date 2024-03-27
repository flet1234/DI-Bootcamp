
document.getElementById('onlyLetters').addEventListener('input',checkInput)

function checkInput(){
    let checkText=document.getElementById('onlyLetters').value.split()[0]
    let pattern = /[a-zA-Z]/ 
    let resultText=''
    for (letter of checkText){
        if (letter.match(pattern)){
            resultText+=letter
            }
    }   document.getElementById('onlyLetters').value=resultText
}   
