import fs from 'fs'

export const read = (file) => {
    fs.readFile(file,function(err,data){
if (err){
    console.log(err);
}
else {
    console.log(data.toString());
}
})
}
