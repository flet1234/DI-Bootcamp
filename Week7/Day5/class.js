const { error } = require('console');
// const fs = require('fs').promises;
const fs = require('fs')
const path = require('path')

// const read = async()=>{
//     const data = fs.readFile('info.txt','utf-8')
//     console.log(data);
// }
// read()


// const _dirname = path.resolve()
// console.log(_dirname);
// // __dirname

// console.log(__dirname);
// try {
//     const data = fs.readFileSync(__dirname + '/info.txt','utf-8')
//     console.log(data);
// } catch (error) {
//     console.log('no such file');
// }

fs.readFile('info.txt','utf-8',(err,data)=>{
    if (err){
        // console.log(err);
    }
    else{
        // console.log(data);
        return data
        
    }
})
console.log(data);
// let data = '1234567'
// fs.writeFile(__dirname+'newFile.txt',data,'utf-8',(err)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log('Created');
//     }
// })

// let data = 'New appended text'
// fs.appendFile('info.txt',data,'utf-8',(err)=>{
//     if (err){
//         console.log(error);
//     }
//     else{
//         console.log('Append done');
//     }
// })

// fs.copyFile('info.txt','../Day5/newfile.txt',(err)=>{
//     if (err){
//         console.log(err);
//     }
// })