// Task one
const a = 6;
const b = 10;
let result;

result = a + b;
console.log(result); // -> 16

result = b - result;
console.log(result); // -6

result = a * b;
console.log(result); // 60

result = a / b;
console.log(result); // 0.6

// использовать %
result = b % a;
console.log(result); // 4

// Task two
const day = 2;
const month = 10;
const year = 2017;

const date = '0' + day + "\/" + month + "\/" + year;
const sameDate = `0${day}/${month}/${year}`;

console.log(date);
console.log(sameDate);

// Task three
const message = prompt("Enter any message:", "");

let inLowerCase = message.toLowerCase(); // -> "success: in all lowercase"
let inUpperCase = message.toUpperCase(); // -> "success: in all uppercase"

console.log(checkCase(inLowerCase)); // success: in all lowercase
console.log(checkCase(inUpperCase)); // success: in all uppercase

//============= Функция для проверки кода ================= //
function checkCase(str) {
  if (str && str === str.toLowerCase()) {
    return "success: in all lowercase";
  } else if (str && str === str.toUpperCase()) {
    return "success: in all uppercase";
  }
  return "error: not in all lowercase or uppercase";
}
//============= end Функция для проверки кода ============== //

// Task four
const name = 'Mango';
const typingSpeed = 50;

const message = `${name} печатает со скоростью ${typingSpeed} знаков в минуту.`;

console.log(message); // Mango печатает со скоростью 50 знаков в минуту.

// Task five
const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + 'px';

console.log(totalWidth); // '125px'

// Task six
const padding = "20.25px";
const border = "5.15px";
const contentWidth = "100.45px";

let totalWidth = parseFloat(padding) + parseFloat(border) + parseFloat(contentWidth) + 'px';

console.log(totalWidth); // '125.85px'

// Task seven
const a = 0.1;
const b = 0.2;
const c = 0.3;

// Исправить вычисления тут
const summ = +(a + b + c).toFixed(10);

console.log(0.6 === summ); // должно быть true