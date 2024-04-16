// List of available emojis
const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

const getEmoji = (req,res) =>{
    res.json(emojis)
}

const generateGreet = (req,res) =>{
    let {name,emojiIndex} = req.body
    let emoji = emojis[emojiIndex]
    res.json(`${emoji}Greetings to ${name}!!!${emoji}`)
}

module.exports = {
    getEmoji,
    generateGreet
}