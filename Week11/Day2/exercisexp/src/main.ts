import './style.css'

class Person {
  constructor(public age:number, protected address:string, private firstname:string, private lastName:string){}

  getFullName(){
    return `Fullname is ${this.firstname} ${this.lastName}`
  }
}

let x = new Person(12,'new-york','max','poper')
console.log(x.getFullName());

// Daily_chalenge

const validateUnionType = (value: any, allowedTypes: string[]):boolean => {
  return (allowedTypes.some(item => item === typeof value))  
}

console.log(validateUnionType(true,['string','number','boolean']));








//======================================================
