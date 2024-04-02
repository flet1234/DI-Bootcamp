const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];
//   Use a loop to find the sum of the dogs’ ages in human years.
//   Hint: 1 dog year equals 7 human years
//   Using the reduce() method, find the sum of the dogs’ ages in human years.
// -->

let dogSum=data.filter(item=> item.type == 'dog').forEach(item=>{
    let dogsAge
})

console.log(dogSum);