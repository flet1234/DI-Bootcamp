user={
    name:'john',
    age:25,
    status:{
        married:'yes'
    }
}
user1={...user,status:{...status}}
user1.status.married = 'kaif'
console.log(user);
console.log(user1);
