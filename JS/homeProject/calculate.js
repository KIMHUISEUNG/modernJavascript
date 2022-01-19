function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "sub":
      return a % b;
    case "div":
      return a / b;
    case "mul":
      return a * b;
    case "rem":
      return a ** b;
    default:
      throw Error("unkonwn command");
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}
console.log(getRandomInt(0, 20));
