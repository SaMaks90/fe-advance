// task one
/*  Написать функцию, getPx(str), обратную setPx(). 
    Функция getPx должна получать строку вида '10px' 
    и возвращать число 10.
    */

// функция принимает размер виде строки и возвращает число без px
function getPx(str) {
    if (isNumber(str)){
      return 'Input correct string!';
    } else {
      return parseFloat(str);
    }
    
  }
  // проверка правильности кода
  console.log(getPx('10px') === 10);   // должно быть:  true
  console.log(getPx('10.5') === 10.5); // должно быть:  true
  console.log(getPx('0') === 0);       // должно быть:  true
  console.log(getPx(-1));              // должно быть:  'Input correct string!'
  console.log(getPx(10));              // должно быть:  'Input correct string!'
  
  // Вспомогательная информация
  // функция проверяет является ли параметр числом
  function isNumber(value) {
    return typeof value === 'number' &&  isFinite(value);
  }
  /*
  console.log(`-10 is number? -> ${isNumber(-10)}`)             // -> true
  console.log(`10.5 is number? -> ${isNumber(10.5)}`)           // -> true
  console.log(`'10.5' is number? -> ${isNumber('10.5')}`)       // -> false
  console.log(`null is number? -> ${isNumber(null)}`)           // -> false
  console.log(`undefined is number? -> ${isNumber(undefined)}`) // -> false
  console.log(`NaN is number? -> ${isNumber(NaN)}`)             // -> false
  console.log(`Infinity is number? -> ${isNumber(Infinity)}`)   // -> false
  */
  
  // функция принимает размер в number и возвращает строку добавив px 
  function setPx(num) {
    // если ввели число, то вернем строку
    if (isNumber(num)) {
      return num + 'px';
    } 
    // если ввели не число, то вернем -1
    else {
      return -1;
    }
  }
  /*
  console.log(`10.5 -> ${setPx(10.5)}`); // -> "10.5px"
  console.log(`'10.5' ${setPx('10.5')}`); // -> -1
  */
  
  /*
  console.log(parse  ?   ('10.5px'));   // -> 10
  console.log(parse  ?   ('10.5px'));   // -> 10.5
  */

// task two
/*  Написать фукнцию findLongestWord(str) 
    которая получает аргументом произвольную строку и
    возвращает самое длинное слово в этой строке.   
    Важное условие  - в строке должны быть только пробелы
    и символы букв и цифр!
*/

function findLongestWord(str) {
  
    if (isNumber(str) || str === false || str === true) {return str + '';}
    if (str === '') {return 'Введите непустую строку';}
    return str.split(' ').reduce((accum, next) => accum = (accum.length >= next.length) ? accum : next);
  
  }
  
  // Проверки
  const find = findLongestWord("a bb ccc dddd eeeee ffff ggg hh i") === "eeeee";
  console.log("правильность поиска: ", find);
  // должно вернуть true
  
  const equal = findLongestWord("bb cc hh") === "bb";
  console.log("обработка равных строк: ", equal);
  // должно вернуть true
  
  const symbol = findLongestWord("a") === "a";
  console.log("обработка строки-символа: ", symbol);
  // должно вернуть true
  
  const empty = findLongestWord("") === "Введите непустую строку";
  console.log("обработка пустой строки: ", empty);
  // должно вернуть true
  
  const fromNum = findLongestWord(5) === "5";
  console.log("приведение к строке number: ", fromNum);
  // должно вернуть true
  
  const fromBool = findLongestWord(false) === "false";
  console.log("приведение к строке boolean: ", fromBool);
  
  if (fromBool && fromNum && empty && symbol && equal && find) {
    alert(
      "Функция работает правильно! Можно сдавать работу и закоментировать этот alert!"
    );
  }
  
  // вспомогательная информация
  // function findNumbers(str) {
  //   if (isNumber(str) || str === false || str === true) {
  //     return str + '';
  //   }else if(str === false){
  //     return str + '';
  //   }else {
  //     return str.split(" ");    
  //   }
  // }
  
  function isNumber(value) {
    return typeof value === 'number' &&  isFinite(value);
  }

// task three
/*  Есть массив с логинами (logins)
    Написать функцию, addLogin(value) 
    которая 
     1)проверяет количество символов и 
       пропускает от 3-х до 16-ти включительно,
       иначе возвращает текст с просьбой изменить
       логин (уменьшить - 'Не более 16 символов', если больше 16 
       и увеличить 'Не менее 3-х символов', если меньше 3-х)
     2)добавлет новый логин в logins только если тот уникальный 
       и возвращает true.
       Если не уникальный, то функция предлагает придумать новый логин,
       возвращая строку 'Such name already exists'.
    */

    let logins = ['ImFirst', 'robotGoogles', 'R2D2', 'admin', 'test', 'user'];

    function addLogin(value) {
      let login = logins.find(login => login === value);
      
      if (login === value) {
        return 'Этот логин уже занят, подберите другой логин.';
      } else if (value.length < 3) {
        return 'Не менее 3-х символов';
      } else if (value.length > 16) {
        return 'Не более 16 символов';
      } else {
        logins.push(value);
        return true;
      }
    
    }
    console.log( addLogin('ImFirst') === 'Этот логин уже занят, подберите другой логин.'); 
    // должно быть -> true
    
    console.log(addLogin('a') === 'Не менее 3-х символов'); 
    // должно быть -> true
    
    console.log(addLogin('aaa') === true); 
    // должно быть -> true
    
    console.log(addLogin('123456789abcdef') === true); 
    // должно быть -> true
    
    console.log(addLogin('0123456789abcdefg') === 'Не более 16 символов'); 
    // должно быть -> true

// task four
/*  Напишите функцию toPhoneFormat(str) 
    которая получает строку c телефонным номером, 
    содержащим любые символы и 12 цифр.
    Нужно извлечь все цифры в порядке написания
    и вернуть текст номера телефона в формате строки
     +(12)(345)123-45-67. 
    */

    const arr = ['+38050-1234567', '+38(050)1234-567', '38-050-123-4567', '38/050/123:45:67', '380501234567', '38-050(123-4567)'];

    function toPhoneFormat(value) {
    
      let tel = value.split('')
                                .map(elem => elem)
                                .filter(n => isNumber(+n));
      return `+(${tel[0] + tel[1]})(${tel[2] + tel[3] + tel[4]})${tel[5] + tel[6] + tel[7]}-${tel[8] + tel[9]}-${tel[10] + tel[11]}`;
    }
    
    // проверка 
    let res = arr.map(elem => elem = toPhoneFormat(elem));
    console.log( res.every(elem => elem === '+(38)(050)123-45-67'));
    
    // Вспомогательная информация
    
    // let simbols = '+38050-1234567'.split();
    // console.log(simbols);
    // ['+38050-1234567']
    
    // simbols = '+38050-1234567'.split('');
    // console.log(simbols);
    // ["+", "3", "8", "0", "5", "0", "-", "1", "2", "3", "4", "5", "6", "7"]
    
    
    // console.log('charCodeAt 0 == ', '0'.charCodeAt(0));
    // "charCodeAt 0 == " 48
    
    // console.log('charCodeAt 9 == ', '9'.charCodeAt(0))
    //"charCodeAt 9 == " 57
    
    // let arrSimbols = simbols.filter(elem => ... );
    // console.log(arrSimbols)
    // ["3", "8", "0", "5", "0", "1", "2", "3", "4", "5", "6", "7"]
    
    
    // let result =  `+(${arrSimbols[0]}${arrSimbols[1]})(${arrSimbols[3]}${arrSimbols[4]}${arrSimbols[5]})`;
    // console.log(result)
    // "+(38)(501)"
    
    function isNumber(value) {
      return typeof value === 'number' &&  isFinite(value);
    }

// task five
/*  Есть массив с ценой проживания в номере (rents).
    1) Написать функцию, arrangeArray,
       которая сортирует массив rents по ценам 
       в порядке возрастания
    2) Написать функцию, uniqRents(arr) 
      которая содает новый массив, 
      состоящий только из уникальных цен. 
    3) Написать функцию rentsToString(arr), 
      которая из анализа массива rents 
      возвращает строку.
    */

    let rents  = [59, 62, 66, 67, 45, 48, 60, 62, 59.0, 62.0, 59.00, 66.00, 45, 45.00, 48, 102];

    function arrangeArray(arr) {
      return arr.sort((current, next) => current - next);
    }
    
    function uniqArray(arr) {
      return arr.map(elem => elem)
                   .filter((n, i, arr) => i === arr.indexOf(n));
    }
    
    function rentsToString (arr) {
      let sum, min, max;
      let array = arr.sort((current, next) => current - next);
      
      min = arr[0];
      max = arr[arr.length - 1];
      sum = arr.reduce((accum, next) => accum += next);
      
      return `Цены проживания в отелях начинаются от ${min} и заканчиваются ${max}. Средняя цена на сегодня состовляет ${sum/array.length}.`;
    }
    
    // Проверки
    
    console.log(`isEqual: ${isEqual(rents, [59, 62, 66, 67, 45, 48, 60, 62, 59.0, 62.0, 59.00, 66.00, 45, 45.00, 48, 102])}`);
    // "isEqual: true"
    console.log(`arrangeArray: ${isEqual(arrangeArray(rents), setArrange(rents))}`);
    // "arrangeArray: true"
    console.log(`uniqArray: ${isEqual(uniqArray(rents), setUniq(rents))}`);
    // "arrangeArray: true"
    
    console.log(rentsToString(rents));
    
    
    
    
    // дополнительные материалы
    // let sorted = rents.sort((current, next) => current - next);
    // console.log(['asd', 'sad', 'das'].sort());
    // ["asd", "das", "sad"]
    
    // console.log([32, 123, 99].sort());
    // [123, 32, 99]
    
    // let srt = [32, 123, 99].sort();
    // console.log(`min = ${srt[0]}, max = ${srt[srt.length - 1]}`);
    // "min = 123, max = 99"
    
    // let sum = [32, 123, 99].reduce((accum, next) => accum + next);
    // console.log(`sum = ${sum}`);
    // "sum = 254"
    
    // console.log(['asd', 'sad', 'das'].sort((current, next) => current < next));
    // ["sad", "das", "asd"]
    
    // console.log(['asd', 'sad', 'das'].indexOf('sad'));
    // 1
    
    // console.log(['asd', 'sad', 'das'].indexOf('das') === 2);
    // true
    
    // console.log(['asd', 'sad', 'das'].filter((value, index, array) => value === array[index]));
    // ["asd", "sad", "das"]
    
    // console.log(['asd', 'sad', 'das'].filter((value, index, array) => array.indexOf(value) === 2));
    // ["das"]
        
// task six
// Все циклы for надо переписать с помощью 
//  map, filter, reduce, every

/* Функция findGreaterThen получает два 
   аргумента  - число и массив.
   Функция фозвращает новый массив,
   содержащий элементы которые больше
   числа.
*/

const findGreaterThen = (n, arr) => {
    return arr.filter((elem) => elem > n);
    // const result = [];
    // for (let i = 0, max = arr.length; i < max; i += 1) {
    //   if (arr[i] > n) {
    //     result.push(arr[i]);
    //   }
    // }
    // return result;
  };
  const numbers = [1, 2, 3, 4, 5];
  console.log(findGreaterThen(2, numbers)); // [3, 4, 5,]
  console.log(findGreaterThen(3, numbers)); // [4, 5,]
  console.log(findGreaterThen(1, numbers)); // [2, 3, 4, 5,]
  
  /* Функция findEvery получает два 
     аргумента  - число и массив.
     Функция фозвращает true если
     все элементы имеют значения больше или равны числу.
     Иначе есть хоть один элемент меньше числа,
     то возвращается false
  */
  
  const findEvery = (n, arr) => {
    return arr.every(elem => elem >= n);
    
    // for (let i = 0, max = arr.length; i < max; i += 1) {
    //   if (arr[i] < n) {
    //     return false;
    //   }
    // }
    // return true;
  };
  const numbs = [5, 6, 7, 8, 9];
  console.log(findEvery(5, numbs)); // true
  console.log(findEvery(6, numbs)); // false
  console.log(findEvery(4, numbs)); // true
  
  //==========================================
  /* Функция multiplyBy принимает два аргумента -
     число и массив. Функция возвращает массив,
     все значения которого умножены на число.
     */
  
  const multiplyBy = (n, arr) => {
    return arr.map(elem => (elem *= n));
    
  //   let result = [];
  //   for (let i = 0, max = arr.length; i < max; i += 1) {
  //     result.push(arr[i] * n);
  //   }
  //   return result;
  };
  
  console.log(multiplyBy(2, numbers)); // [2, 4, 6, 8, 10]
  console.log(multiplyBy(3, numbers)); // [3, 6, 9, 12, 15]
  console.log(multiplyBy(4, numbers)); // [4, 8, 12, 16, 20]
  
  //==========================================
  /* Функция summAllNumbers принимает любое число аргументов.
     Функция возвращает число - сумму всех аргументов.
  */
  
  function summAllNumbers () {
    return Array.from(arguments).reduce((accum, next) => accum += next);
    
    // const args = Array.from(arguments);
    // let accumulator = 0;
    // for(let i = 0, max = args.length; i < max; i += 1) {
    //   accumulator += args[i];
    // }
    // return accumulator;
  };
  
  
  console.log(summAllNumbers(1, 2, 3)); // 6
  console.log(summAllNumbers(1, 2, 3, 4)); // 10
  console.log(summAllNumbers(1, 2, 3, 4, 5)); // 15