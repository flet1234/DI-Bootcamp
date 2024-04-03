let arr=['1,2,3,5,6','2,5,2,4,2']

let x = arr[0].replace(/,/g,'')
console.log(z);
let y = arr[1].replace(/,/g,'')
let newAr=[]
for (i of x){
    for(q of y){
        if (i==q){
            newAr.push(i)
            break
        }
    }
}
console.log(newAr);