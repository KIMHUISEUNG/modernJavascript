/**
 * Objects
 * one of the JavaScript's data types.
 * a collection of related data and/or functionality.
 * Nearly all objects in JavaScript are instances of Object
 * object = {key : value};
 */

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const hatso = { name: "hatso", age: 26 };
print(hatso);

// with JavaScrpt magic (dynamically typed language)
// can add properties later
hatso.hasJob = true;
console.log(hatso.hasJob);

// can delete properties later
delete hatso.hasJob;
console.log(hatso.hasJob);

// 2. Computed properties
// Key should be always string
console.log(hatso.name);
console.log(hatso["name"]);
hatso["hasJob"] = true;
console.log(hatso.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(hatso, "name");
printValue(hatso, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("hatso", 26);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  //return this;
}

// 5. in operator: property existence check (key in obj) key가 있는지 없는지 확인 유무
console.log("name" in hatso);
console.log("age" in hatso);
console.log("random" in hatso);
console.log(hatso.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 지금까지 사용한 콘솔 출력들을 삭제한다

for (key in hatso) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
// ref 레퍼런스가 같은 오브젝트를 가르킬때 오브젝트가 수정되면 수정된 값을 받는다.
const user = { name: "hatso", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

//ver01.
const user4 = {};
Object.assign(user4, user);
console.log(user4);
//ver02.
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
