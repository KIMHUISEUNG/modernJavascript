"use strict";

//Arrayπ

// 1. Declaration(μ μΈ)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
// print all fruits
// λ°©λ² 1. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// λ°©λ² 2. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// λ°©λ² 3-1. forEach
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
// λ°©λ² 3-2.
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift("π«", "π");
console.log(fruits);
// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
// spliceλ (λ°§μ€μ λλμ ν¨κ» κΌ¬μμ)μλ€ λΌλ λ»μ κ°μ§κ³  μλ€
fruits.push("π", "π", "π");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
// μΈλ±μ€ 1λ²λΆν° 1κ°λ₯Ό μ­μ νλ€ μ¬κ³Όμ μλ°μ μΆκ°νλ€.
fruits.splice(1, 1, "π", "π");
console.log(fruits);

// combine two arrays
const fruits2 = ["π", "π₯₯"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
// ν΄λΉ κ°μ΄ λͺλ²μ§Έ μΈλ±μ€ λ²νΈμ μλμ§ μΆλ ₯
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π"));
// λ°°μ΄μ μ‘΄μ¬ νμ§ μλ κ°μ΄ λ€μ΄μ€λ©΄ -1μ μΆλ ₯νλ€.
console.log(fruits.indexOf("π₯₯"));

// includes
// μ‘΄μ¬νλμ§ boolκ°μΌλ‘ μΆλ ₯
console.log(fruits.includes("π"));
console.log(fruits.includes("π₯₯"));

// lastIIndexOf
console.clear();
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.lastIndexOf("π"));
