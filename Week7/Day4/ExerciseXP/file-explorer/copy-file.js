const fs = require('fs')
const read =() => {
    fs.readFile('source.txt','utf-8',function(err,data){
    if (err){
        console.log(err);
    }
    else{
        let text = data
        console.log(text);
        write(text);
    }
})}
const write = (data) => {
    fs.writeFile('SourceCopy.txt',data,function(err){
        if (err){
            console.log(err);
        }
        else{
            console.log('Copyed');
        }
})}

read()