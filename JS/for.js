//for 순환문 출력 예
let friends = [
  { name: "라이언", age: 5 },
  { name: "어피치", age: 4 },
  { name: "콘", age: 2 },
  { name: "무지", age: 3 },
];
for (let i = 0; i < friends.length; i++) {
  console.log("이름: " + friends[i].name + ", 나이: " + friends[i].age);
}
i = 0;
//for~of 순환문 출력 예
for (let friend of friends) {
  console.log("이름: " + friend.name + ", 나이: " + friend.age);
}
i = 0;
//for~in 순환문 출력 예
let ryon = { name: "라이언", age: 5, gendor: "male" };
for (let prop in ryon) {
  console.log("속성: " + prop + "값: " + ryon[prop]);
}
i = 0;
//forEach 순환 메서드 출력 예
friends.forEach(function (friend, idx) {
  console.log("이름: " + friend.name + " 나이: " + friend.age);
});
