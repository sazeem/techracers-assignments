const async = require('asyncawait/async');
const await = require('asyncawait/await');

console.log('person1: shows ticket');
console.log('person2: shows ticket');


const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve,reject) => {
    setTimeout(() => {
      reject('tickets');
    },3000);
  });
  const getPopcorn = new Promise((resolve,reject) => resolve('caramel popcorn'));
  const getCoke = new Promise((resolve,reject) => resolve('frozen coke'));
  const getCandy = new Promise((resolve,reject) => resolve('butter candy'));
  const addButter = new Promise((resolve,reject) => resolve('chocolate butter'));
  
  let ticket;

  try{
     ticket = await promiseWifeBringingTickets;
    let popcorn = await getPopcorn;
    let butter = await addButter;
    let [candy,coke] = await Promise.all([getCandy,getCoke]);    
  }catch(err){
    ticket = 'sad face';
  }
  


  return ticket;
};  

preMovie().then((m) => console.log(`person3: shows ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');