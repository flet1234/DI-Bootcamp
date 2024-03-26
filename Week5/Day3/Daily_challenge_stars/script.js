// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:



// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

// -->

function starDestroyer3000(){
    let myArray=[]
    while(true){
        let user_input=prompt('Input a word')
        if (user_input=='' || user_input==null){
            break;
        } 
        if (!isNaN(user_input)) {
            continue;
        }
        myArray.push(user_input)
    }
    

    console.log(myArray);
    let maxLength=0
    let bonusSpace
    let fixedWord
    for (word of myArray){
        if (maxLength<word.length){
            maxLength=word.length
        }
    }
    console.log('*'.repeat(maxLength+4));
    for (word=0;word<myArray.length;word++){
        fixedWord=myArray[word]
        if (fixedWord.length<maxLength){
            for (i=0;i<(maxLength-myArray[word].length);i++){
                fixedWord+=' '
            }
        }
        console.log('* '+fixedWord+' *');
    }
    console.log('*'.repeat(maxLength+4));    
}
starDestroyer3000()