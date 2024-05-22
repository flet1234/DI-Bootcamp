"use strict";
// class User {
// //     public name:string
// //     private age:number
// //     protected active:boolean
// //     constructor(name:string,age:number,active:boolean) {
// //         this.name=name
// //         this.age=age
// //         this.active=active
// //     }
// //     getAge(){
// //         return `My age is ${this.age}`
// //     }
// //     getActive(){
// //         return this.active
// //     }
// // }
// // class Student extends User {
// //     constructor(name:string,age:number,active:boolean) {
// //         super(name,age,active)
// //     }
// //     // getStudentAge() {
// //     //     return `My age is ${this.age}`
// //     // }
// // }
// // let user = new User('John',30,true)
// // console.log(user.getAge());
// // let user2 = new User('Jane', 25, false)
// // console.log(user2.getAge());
// // console.log(user.name);
// // // console.log(user.age);
// // let student = new Student('Doe',20,true)
// // console.log(student.getAge());
// // console.log(student.name);
// // // console.log(student.age);
// // console.log(user.getActive());
// // console.log(student.getActive());
// // interface UserInterface {
// //     name:string
// //     age:number
// //     active:boolean
// // }
// // class User implements UserInterface{
// //     name:string
// //     age:number
// //     constructor(name:string,age:number, public active:boolean) {
// //         this.name=name
// //         this.age=age
// //     }
// //     get gAgeUser(){
// //         return this.age
// //     }
// //     set sAge(age:number){
// //         this.age = age
// //     }
// // }
// // index keys
// interface EmployeeInterface {
//     // readonly [key: string]: string | number
//     name: string
//     age:number
//     role:string 
// }
// let employee1: EmployeeInterface = {
//     name:'John',
//     age:30,
//     role:'Developer'
// }
// console.log(employee1.name);
// console.log(employee1['name']);
// // employee1['email']='jjj@gamil.com'
// // console.log(employee1['email']); // error
// let prop:string = 'name'
// // console.log(employee1[prop]);
// // for (let key in employee1) {
// //     console.log((key, employee1[key as keyof EmployeeInterface]));
// // }
// Object.keys(employee1).forEach((key)=>{
//     // console.log(key,employee1[key as keyof EmployeeInterface]);
//     // console.log(key,employee1[key as keyof typeof employee1]);  
// })
// const logEmployee = (employee: EmployeeInterface, key: keyof EmployeeInterface) => {
//     console.log(key,employee[key]);
// }
// console.log(logEmployee(employee1,'name'));
// record type <T, U>
// type names = 'name' | 'age' | 'role'
// type NewEmployee = Record<names,string | number>
// let employee2: NewEmployee = {
//     name: ' john',
//     age:30,
//     role:'Developer'
// }
// for (let key in employee2){
//     console.log(key, employee2[key as keyof NewEmployee]);
// }
// Generics
const strEcho = (arg) => arg;
const echo = (arg) => arg;
// to check the type if it is  an object
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
// console.log(isObj({name:'john'}));
// console.log(isObj(['name','john']));
// console.log(isObj(3));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (typeof arg === 'object' && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBool = (arg) => {
    return { value: arg, is: !!arg };
};
const hasId = (arg) => {
    return arg.id;
};
hasId({ id: 1 });
const userJson = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];
// console.log(hasId(userJson[0]));
const getUserInfo = (users, key) => {
    return users.map(user => user[key]);
};
// console.log(getUserInfo(userJson,'name'));
class StateObject {
    constructor(initialState) {
        this._state = initialState;
    }
    get state() {
        return this._state;
    }
    set state(newState) {
        this._state = newState;
    }
}
const username = new StateObject('John');
username.state = 'dan';
console.log(username.state);
const username2 = new StateObject(123);
username2.state = 345;
console.log(username2.state);
const adminUser = {
    name: 'john',
    role: 'papa',
    email: 'sd@gamil.com'
};
const post = {
    title: 'Post Title',
    content: 'Post Content',
    author: 'John'
};
const updatePost = (post, update) => {
    return Object.assign(Object.assign({}, post), update);
};
console.log(updatePost(post, { title: 'New Title' }));
// Required
const updatePostAllData = (post, update) => {
    return Object.assign(Object.assign({}, post), update);
};
console.log(updatePostAllData(post, { title: 'New title' }));
//Readonly
const readOnlyPost = Object.assign(Object.assign({}, post), { author: 'John' });
// ReturnType
const createUser = (name, age) => {
    return { name, age };
};
const usernew = { name: 'John', age: 24 };
const userParams = ['John', 30];
const newusernew = createUser(...userParams);
console.log(newusernew);
