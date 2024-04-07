const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]
Promise.all([promise1,promise2,promise3]).then(data=> console.log(data))
// it return values of res only if all 3 resolve

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2));
  }
  
  const arr = [1, 2, 3];
  const promiseArr = arr.map(timesTwoAsync);
  
  Promise.all(promiseArr)
    .then(result => {
      console.log(result);
    });
    // [2,4,6] - bocouse we use our timesTwoAsync on each element 
    // of array by map,  and then resolve all in one time by promise1.all

