// Task one
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива 
  испольуя свойство length.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелить указаные в комментариях 
  элементы массива.
*/

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.length); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax

// Task two
/*
  Есть массив имен пользователей.
  Используя методы массива выполнить
  следующие операции.
*/

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить из начала массива нулевой элемент и вывести в консоль результат.
console.log(users.shift());
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент и вывести в консоль результат.
console.log(users.pop());
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
users.unshift('Amanda');
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.push('Monica', 'Bella');
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]

// Task three
/*
  Есть строка, используя методы строки
  преобразовать ее в массив.
  Вывести в консоль длину массива.
  Используя цикл, перебрать массив
  и последовательно вывести элементы
  массива в консоль.
*/

const string = "qwerty";

let arr;

// Составить массив из строки и записать в переменную arr
arr = string.split('');
console.log(arr); // ["q", "w", "e", "r", "t", "y"]

// Вывести в консоли общую длину массива arr
console.log(arr.length); // 6

// Вывести в консоли все индексы массива arr
for (let i = 0; i < arr.length; i++) {
  console.log(i); // последовательный вывод 0 1 2 3 4 5
}

// Вывести в консоли все элементы массива arr
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // последовательный вывод q w e r t y
}

// Вывести в консоли пары индекс:значение
for (let i = 0; i < arr.length; i++) {
  console.log(`${i}:${arr[i]}`); // последовательный вывод 0:q 1:w 2:e 3:r 4:t 5:y
}

// Task four
/*
  Есть массив число numbers.
  Просим пользователя ввести цифру от 1 до 5,
  но пользователь может ввести что угодно.
  
  Необходимо проверить что было введено.
  Преобразовать input в числовой тип.
  Проверить число ли это.
  
  Если нет - выводим alert с сообщением о том,
  что было введено не число
  
  Если да - проверить содержит ли в себе
  массив numbers это число.
  Если содержит - выводим alert с успехом.
  Есл не содержит - выводим alert с неудачей.
*/

const numbers = [1, 2, 3, 4, 5];

// Раскомментрировать строку
const input = +prompt("Введите цифру между 1 и 5: ", "");

if (!isNaN(input)) {
  if (numbers.indexOf(input) !== -1) {
    console.log("Такая цифра в массиве есть!");
  } else {
    console.log("Такой цифры в массиве нет!");
  }
} else {
  console.log("Было введено не число!");  
}

// Task five
// Есть двумерный массив. Перебрать массив в цикле и составить из элементов все подмассивов строку.

// Первая строка будет иметь вид "abcxyz"
// Вторая строка будет иметь вид "axbycz"
const letters = [
    ['a', 'b', 'c'],
    ['x', 'y', 'z']
  ];
  
  let firstString = '';
  let secondString = '';
  
  for(let i = 0; i < letters.length; i++) {
    firstString += letters[i].join('');
  }
  
  console.log(firstString);
  
  let arr = [];
  
  for(let i = 0; i < letters[0].length; i++) {
    for(let j = 0; j < letters.length; j++){
      arr.push(letters[j][i]);    
    }
  }
  
  secondString = arr.join('');
  
  console.log(secondString);