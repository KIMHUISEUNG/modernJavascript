"use strict";

//Array🎉

// 1. Declaration(선언)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
// 방법 1. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 방법 2. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// 방법 3-1. forEach
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
// 방법 3-2.
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift("🫐", "🍉");
console.log(fruits);
// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
// splice는 (밧줄의 두끝을 함께 꼬아서)잇다 라는 뜻을 가지고 있다
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
// 인덱스 1번부터 1개를 삭제한뒤 사과와 수박을 추가한다.
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
// 해당 값이 몇번째 인덱스 번호에 있는지 출력
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));
// 배열에 존재 하지 않는 값이 들어오면 -1을 출력한다.
console.log(fruits.indexOf("🥥"));

// includes
// 존재하는지 bool값으로 출력
console.log(fruits.includes("🍉"));
console.log(fruits.includes("🥥"));

// lastIIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));
