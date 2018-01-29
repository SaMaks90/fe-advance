// Task one
let max = 250;
let min = 1;

const winner = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Победитель является обладателем номера ${winner}!`);

// task two
let res;

let num = +prompt('Введите число от 1 до 5-ти', 1);

switch (num) {
  case 1: 
    res = "Каталог хостелов"; 
    break;
  case 2: 
    res = "Каталог бюджетных отелей"; 
    break;
  case 3: 
    res = "Каталог отелей ***"; 
    break;
  case 4: 
    res = "Каталог отелей ****";
    break;
  case 5:
    res = "Каталог лучших отелей"; 
    break;
  default : res = "Введите верное число!";
}

console.log(`Вашему вниманию предлагается ${res}!`)

// task three
const days = 14;
const rate = 50;
let discount = 12;
let cost;
    
discount = undefined;
// discount = -0;
// discount = +0;
// discount = NaN;
// discount = false;

// if(discount !== 0 && discount !== undefined && discount !==-0 && !isNaN(discount) && discount !== false) {
if (discount){
  cost = days * rate / discount;
} else {
  cost = days * rate;
}

console.log(`cost = ${cost}`)

// task four
const num = parseInt(Math.random() * 100);

const res = num % 2 === 1 ? "odd" : "even";

console.log(`${num} is ${res}`);

// task five
// функция для вывода времени на экран
function start() {
    // получение текущего времени
    let d = new Date();
  
    // Начало блока для правок
    // вывод секунд
    tableS.textContent = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    // вывод милисекунд
    if (d.getMilliseconds() < 10) {
      tableMS.textContent = "00" + d.getMilliseconds();
    } else if (10 < d.getMilliseconds() && d.getMilliseconds() < 100) {
      tableMS.textContent = "0" + d.getMilliseconds();
    } else {
      tableMS.textContent = d.getMilliseconds();
    }
    // конец блока для правок
  
    // вывод часов в виде 2-х значного числа
    tableH.textContent = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
  
    // вывод минут в виде 2-х значного числа
    tableM.textContent = d.getMinutes() < 10
      ? "0" + d.getMinutes()
      : d.getMinutes();
  }
  
  // поиск элемента DOM
  const tableH = document.querySelector(".hour");
  const tableM = document.querySelector(".min");
  const tableS = document.querySelector(".sec");
  const tableMS = document.querySelector(".msec");
  
  // вызов функции start каждые 33мс
  setInterval(start, 33);  