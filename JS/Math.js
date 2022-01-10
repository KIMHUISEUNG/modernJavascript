const num = 3.141592;
const minusnum = -3.6789;
const halfnum = 3.5;
const halfminusnum = -3.5;

/**
 * Math 메서드
 * floor() : 내림
 * ceil() : 올림
 * round() : 반올림
 * trunc() : 버림
 */
console.log(Math.ceil(num)); //4 반환
console.log(Math.ceil(minusnum)); //-3

console.log(Math.floor(num)); //3
console.log(Math.floor(minusnum)); //-4

console.log(Math.round(num)); //3
console.log(Math.round(minusnum)); //-4
console.log(Math.round(halfnum)); //4반환 3.5는 4에 더 가까움
console.log(Math.round(halfminusnum)); //-3반환 -3.5는 -3에 더 가까움

console.log(Math.trunc(num)); //3
console.log(Math.trunc(minusnum)); //-3

/**
 * Math 메서드
 * abs() : 절대값
 * sign() : 부호   / 1,0,-1,NaN
 */

const num2 = -137;
console.log(Math.abs(num2)); //절대값 얻기

const arr = [-3, 2, -45, 0, 4, 7];

const arr2 = arr.map(function (x) {
  return Math.sign(x);
});
console.log(arr2);
