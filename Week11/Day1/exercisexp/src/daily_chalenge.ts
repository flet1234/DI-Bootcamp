const processInput = (input:number | string | boolean):number | string | boolean => {
    if(typeof(input)==='number'){
        return input**2
    } else if(typeof(input)==='string'){
        return input.toUpperCase()
    } else {
        return !input
    }
}
console.log(processInput(4));
console.log(processInput('panica'));
console.log(processInput(true));
