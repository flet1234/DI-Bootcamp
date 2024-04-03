function allTruthy (array){
    count=0
    array.forEach(item => {
        if (Boolean(item)) {
            count++
        }})
     if (count==array.length){
            return true
        } else {return false};
}
console.log(allTruthy([5, 4, 3, 2, 1,0]));
