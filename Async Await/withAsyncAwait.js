const async = require('asyncawait/async');
const await = require('asyncawait/await');

console.log('person1: shows ticket');
console.log('person2: shows ticket');


const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('tickets')
    },3000);
  });
  const getPopcorn = new Promise((resolve,reject) => resolve('caramel popcorn'));
  const getCoke = new Promise((resolve,reject) => resolve('frozen coke'));
  const getCandy = new Promise((resolve,reject) => resolve('butter candy'));
  const addButter = new Promise((resolve,reject) => resolve('chocolate butter'));
  
  let ticket = await promiseWifeBringingTickets;

  console.log(`wife: I got the ${ticket}`);
  console.log(`husband: We should go in!`);
  console.log(`wife: No I am hungry!`);

  let popcorn = await getPopcorn;

  console.log(`husband: I got the ${popcorn}`);
  console.log(`husband: We should go in!!`);
  console.log(`wife: Wait, I need butter on my popcorn`);

  let butter = await addButter;
    
  console.log(`husband: I got some ${butter} on ${popcorn}`);
  console.log(`husband: Anything else darling?`);
  console.log(`wife: Some Candy and Coke, Hurry Up!`);
  let [candy,coke] = await Promise.all([getCandy,getCoke]);
  
  console.log(`husband: Baby I bought some ${candy} and ${coke}`);
  console.log(`wife: Hurry up, we're getting late!`);
  console.log(`husband: Thanks for the reminder honey. *sobs*`);



  return ticket;
};  

preMovie().then((m) => console.log(`person3: shows ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');