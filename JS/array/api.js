const arr1 = ["🍎", "🍐", "🍊", "🍋"];
const numberArr = [3, 4, 5, 6];

//every
console.log(
  numberArr.every(function (x) {
    return x > 4;
  })
);
console.log(
  numberArr.every((x) => {
    return x < 7;
  })
);

console.clear();
//some
function someFun(number) {
  return number < 2;
}
function otherFun(number) {
  return number > 4;
}

console.log(numberArr.some(someFun));
console.log(numberArr.some(otherFun));
