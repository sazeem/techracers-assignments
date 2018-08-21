console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('tickets')
  },3000);
});

const getPopcorn = promiseWifeBringingTicks.then((ticks) => {
  console.log(`wife: I got the tickets`);
  console.log(`husband: We should go in!`);
  console.log(`wife: No I am hungry!`);
  return new Promise((resolve,reject) => resolve(`${ticks} popcorn`));
});

const getButter = getPopcorn.then((t) => {
  console.log(`husband: I got the popcorn`);
  console.log(`husband: We should go IN!!`);
  console.log(`wife: Wait, I need butter on my popcorn`);
  return new Promise((resolve, reject) => resolve(`${t} butter`));  
});

getButter.then((tee) => console.log(tee));

console.log('person4: shows ticket');
console.log('person5: shows ticket');