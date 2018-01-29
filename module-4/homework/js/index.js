const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

/*==================== function ====================*/
function addKeyboardLayout(str) {
  let keyboard = [[],[],[]];
  let arr = str.split('');
  let array = arr.map((elem, i, arr) => (i < arr.indexOf('a')) ? keyboard[0].push(elem) : (i >= arr.indexOf('a') && i <= arr.indexOf('\'')) ? keyboard[1].push(elem) : keyboard[2].push(elem));
  
  return keyboard;
}

function getRandCharInRow(row, arr){
  return arr[row][Math.floor(Math.random() * arr[row].length)];
}

function getRandCharInAlph(){
  let arr = addKeyboardLayout(alphabet);
  let numRow = Math.floor(Math.random() * arr.length);
  
  return arr[numRow][Math.floor(Math.random() * arr[numRow].length)];
}

/*==================== Check ====================*/
// task one
console.log(`Массив-массивов клавиатурных строк:`);
console.log(addKeyboardLayout(alphabet));

// task two
console.log(`
Случайный символ из выбранной строки:
- Первая строка: "${getRandCharInRow(0, addKeyboardLayout(alphabet))}";
- Вторая строка: "${getRandCharInRow(1, addKeyboardLayout(alphabet))}";
- Третья строка: "${getRandCharInRow(2, addKeyboardLayout(alphabet))}".
`);

// task three
console.log(`
Случайная символ из всего алфавита:
- Первый случайный символ: "${getRandCharInAlph()}";
- Второй случайный символ: "${getRandCharInAlph()}";
- Третий случайный символ: "${getRandCharInAlph()}".
`);