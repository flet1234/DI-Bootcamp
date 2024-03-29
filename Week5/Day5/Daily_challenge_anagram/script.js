
function anagramCheck(word1,word2){
    if (typeof(word1)=='string' && typeof(word2)=='string'){       
            let firstWord=word1.toLowerCase()
            let secondWord=word2.toLowerCase()
            let newWord=[]
            let newWord2=[]
            for (i of firstWord){
                if (i!=' '){
                    newWord.push(i)
                }
            }
            for (i of secondWord){
                if (i!=' '){
                    newWord2.push(i)
                }
            }
            if (newWord.length == newWord2.length){
                if (newWord.sort().join() == newWord2.sort().join()){
                    return true
                }
            }

        } return false
        
    }  
    
console.log(anagramCheck ("The Morse Code","Here come dots"));