const { log } = require("console");

const triviaQuestions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "Blue whale",
    },
  ];

let count = 0
let score = 0

const getQuestion = (req,res) => {
    let question = triviaQuestions[count].question
    res.json(question)
}
const submitQuestion = (req,res) => {
    let answer = req.body.answer
    console.log(answer);
    if (answer == triviaQuestions[count].answer){
        count++
        if (count<triviaQuestions.length){
            score+=10
            let question = triviaQuestions[count].question
        res.json({message : 'Correct',question})
        }
        else{
            score+=10
            count=0
            res.send(`You finished with ${score} points`)
        }
    }
    else{
        count++
        if (count<triviaQuestions.length){
            let question = triviaQuestions[count].question
        res.json({message : 'Nope',question})
        }
        else{
            count=0
            res.send(`Nope, you finished with ${score} points`)
        }
    }
}

const showScore = (req,res) => {
    res.send(`You have ${score} points`)
}

module.exports={
    getQuestion,
    submitQuestion,
    showScore
}
