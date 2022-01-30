"use strict";

// Javascript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 선언들이 제일 위로 올라가는 것
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// 즉각적으로, 동기적으로 실행하는
// Synchronous callback (동기)
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// 언제 실행될지 예측할 수 없는
// Asynchronous callback (비동기)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "hatso" && password === "hee") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "hatso") {
        onSuccess({ name: "hatso", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
