"use strict";

// Promise is a JavaScript object for asynchronous operation.
// 1.state(상태) 2.제공자와 사용자의 견해 이해 필요.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// promise가 생성됨과 동시에 실행이 된다.
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files 등은 비동기로 하는것이 좋음)
  console.log("doing something...");
  setTimeout(() => {
    //resolve("hatso");
    //or
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally 을 이용해서 값을 받아올 수 있다.
// then은 위 promise가 정상적으로 작동하여 최종적으로 resolve 콜백함수를 통해 전달받아온 값을 받아온다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chanining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// 콜백함수를 전달할때 받아오는 벨류를 바로 하나를 호출하는 경우에는 생략이 가능하다. 암묵적으로 전달해 준다
getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🥖";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
