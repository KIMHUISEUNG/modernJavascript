// async & await
// clear style of using promise :)

// 1. async
// async 를 사용하면 해당 코드블록이 Promise로 바뀐다.
// 우리는 이것을 Promise의 syntactic sugar 라고 한다.

// 기존 Promise
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network reqeust in 10 secs...

//     resolve("hatso");
//   });
// }

async function fetchUser() {
  // do network reqeust in 10 secs...
  return "hatso";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // throw 'error'; 에러발생
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// //기존 promise
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickFruits().then(console.log);

// 에러발생 시 try{} catch(){} 문을 사용하여 핸들링 가능

// 병렬 처리 문제가 발생
// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// 병렬 처리 문제 개선 코드
// Promise는 생성과 동시에 실행되는 특성 활용
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// API를 활용한 코드 개선

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 가장 먼저 수행된 값을 전달하면 종료한다.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
