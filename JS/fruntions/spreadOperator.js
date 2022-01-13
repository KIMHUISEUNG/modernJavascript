let calc = function (x, y, ...restparams) {
  return (
    x +
    y +
    restparams.reduce(function (sum, param) {
      return sum + param;
    })
  );
};
let arr11 = [0, 1];
console.log(calc(-1, ...arr11, 2, ...[3])); // 배열로 넘어가는 인자들을 펼쳐 파라메터에 순서대로 적용함.

let arr12 = [1, 2, 3, 4, 5, 6];
console.log(calc(...arr12));
console.log(calc(null, ...arr12)); // null,1,2,3,4,5,6 이 파라메터에 적용

// 배열과 객체의 복사와 합치기(병합)
var parts = ["shoulers", "knees"];
var lyrics = ["head", ...parts, "and", "toes"]; //배열을 합침

var arr21 = [1, 2, 3];
var arr22 = [...arr21]; //배열의 복사
arr22.push(4);
console.log(arr22);

var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
var cloneObj = { ...obj1 }; // Object {foo: "bar", x: 42}
console.log(cloneObj);
var mergedObj = { ...obj1, ...obj2 }; // Object {foo: "baz", x: 42, y: 13}
console.log(mergedObj);
