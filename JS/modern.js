function run() {
  var sum = 0;
  if (true) {
    let sum = sum + 10;
  }
}
run();

/**
 * let으로 선언하는 변수는 선언 후에 사용해야 함.
 * Uncaught ReferenceError: Cannot access 'sum' before initialization
    at run (modern.js:4)
    at modern.js:7
  run @ modern.js:4
  (익명) @ modern.js:7
 */
