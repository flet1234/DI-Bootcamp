
// class User {

//     public name:string
//     private age:number
//     protected active:boolean

//     constructor(name:string,age:number,active:boolean) {
//         this.name=name
//         this.age=age
//         this.active=active
//     }

//     getAge(){
//         return `My age is ${this.age}`
//     }
//     getActive(){
//         return this.active
//     }
// }

// class Student extends User {
//     constructor(name:string,age:number,active:boolean) {
//         super(name,age,active)
//     }
//     // getStudentAge() {
//     //     return `My age is ${this.age}`
//     // }
// }


// let user = new User('John',30,true)
// console.log(user.getAge());

// let user2 = new User('Jane', 25, false)
// console.log(user2.getAge());

// console.log(user.name);
// // console.log(user.age);


// let student = new Student('Doe',20,true)
// console.log(student.getAge());
// console.log(student.name);
// // console.log(student.age);
// console.log(user.getActive());
// console.log(student.getActive());


interface UserInterface {
    name:string
    age:number
    active:boolean
}

class User implements UserInterface{
    name:string
    age:number
    constructor(name:string,age:number, public active:boolean) {
        this.name=name
        this.age=age
    }
    get gAgeUser(){
        return this.age
    }
    set sAge(age:number){
        this.age = age
    }
}

