const fs = require('fs')

fs.readdir('../file-explorer',(err,files)=>{
    if (err){
        console.log(err);
        return
    }
    console.log(files);
})