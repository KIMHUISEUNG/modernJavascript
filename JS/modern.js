const num = 12345678;
console.log(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
//num.toString().replace()

console.log(parseFloat("0.0333E+2"));
console.log(parseFloat("1.234abc"));
console.log(parseFloat("실수"));
