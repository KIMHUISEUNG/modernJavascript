let friends = [
  { name: "라이언", age: 5 },
  { name: "어피치", age: 4 },
  { name: "콘", age: 2 },
  { name: "무지", age: 3 },
];

//while 순환문 출력 예
let i = 0;
while (i < friends.length) {
  console.log("이름: " + friends[i].name + ", 나이: " + friends[i].age);
  i++;
}
i = 0;
do {
  console.log("이름: " + friends[i].name + ", 나이: " + friends[i].age);
  i++;
} while (i < friends.length);

//while 문 순환 제어 예
i = 0;
while (i < friends.length) {
  if (i > 2) {
    break;
  }
  console.log("이름: " + friends[i].name + ", 나이: " + friends[i].age);
  i++;
}
