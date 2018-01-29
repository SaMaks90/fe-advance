//taks one
/*  
  Напишите код, который последовательно: 
 - добавляет поле mood со значением'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user 
    циклом в формате ключ: значение
*/

const user = {
    name: 'Mango',
    age:  20,
    hobby: 'html',
    premium: true
  };
  
  for (let key in user){
    console.log(`${key} : ${user[key]}`);
  }
  
  user.mood = 'happy';
  user.hobby = 'javascript';
  delete user.premium;
  
  for (let key in user){
    console.log(`${key} : ${user[key]}`);
  }

//taks two
/*  
  Напишите код, который бы  с помощью функции-конструкора 
  (CF - Constructor Function) User позволял создавать 
  объекты пользователя со следующим свойствами:
 - тип - 'user'
 - имя - параметр CF
 - age - параметр CF
 - friends - число, параметр CF

  Написать функцию getUserInfo, которая на основании одного 
  параметра - имени объекта, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать один объект пользователя User и 
  с помощью функции getUserInfo вывести строку в консоль.
*/

/*==================== Variable ====================*/
const user = new User('Andrey', '45', 4);

/*==================== Check ====================*/
console.log(getUserInfo(user));

/*==================== Function ====================*/
function User(name, age, friends){
  this.type = 'user';
  this.name = name; 
  this.age = age;
  this.friends = friends || 0;
}

function getUserInfo(obj){
  return `User ${obj.name} is ${obj.age} years old and has ${obj.friends} friends`;
}

//taks three
/*  
  В этой работе создается объект - хранилище.
  Должны хранится пары ключ-значение.
  Ососбенность данного хранилища в том, 
  что ключи генерируются специальной 
  функцией на основе замыкания, что гарантирует уникальность ключа. 
  Ключи создаются как у масива от 0 и далее добавляя по 1.
  Ваша задача состоит в том, чтобы создать функцию addToObj, 
  которая гарантирет уникальность добавляемого значения 
  (вернее в соданную функцию добавить код)
*/

// счетчик на основе замыкания
const counter = (function() {
    let privateCounter = 0;
  
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };
  })();
  
  /*
    Пример ипользования счетчика
  */ 
    // console.log(counter.value()); // 0
    // console.log(counter.increment());
    // console.log(counter.value()); // 1
  
  
  // создает объект без методов
  const emtyObject = Object.create(null);
  
  // Реализовать проверку на уникальность value перед добавлением.
  function addToObj(value, obj) {
    // реализацию добавления пишем сюда
    obj[counter.value()] = value;
    counter.increment();
  }
  addToObj("one", emtyObject);
  addToObj("two", emtyObject);
  addToObj("three", emtyObject);
  addToObj("four", emtyObject);
  addToObj("one", emtyObject);
  
  // Вывод объекта
  console.log(emtyObject);

//taks four
/*  
  Дополните код так, чтобы скрипт последовательно выводил в консоль
  строку пары ключ:значение объекта poly. 
  Поле с датой вывести в Украинской локали.
  
  - Реализуйте перебор ключей обьекта используя for in в функции showUserInfoA
  - Реализуйте перебор ключей обьекта НЕ используя for in в функции showUserInfoB
*/

function User(login, pass) {
    this.login = name;
    this.pass = pass;
    this.regDate = new Date();
  }
  
  const poly = new User("Poly", "12345qwerty");
  let options = {day: 'numeric', weekday: 'long', year: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric'};
  
  function showUserInfoA(obj) {
    for(let key in obj){
      if(key === 'regDate'){
        console.log(`${key}:${obj[key].toLocaleString('Uk-uk', options)}`);
      } else {
        console.log(`${key}:${obj[key]}`);  
      }
    }
    console.log("===== With for in =====");
  }
  
  showUserInfoA(poly);
  
  function showUserInfoB(obj) {
    let keys = Object.keys(obj);
    let value = keys.map(elem => elem = obj[elem]);
  
    for(let i = 0; i < keys.length; i++){
      if(keys[i] === 'regDate'){
        console.log(`${keys[i]}:${value[i].toLocaleString('Uk-uk', options)}`);   
      } else {
        console.log(`${keys[i]}:${value[i]}`);      
      }
    }
    console.log("===== Without for in =====");
  }
  
  showUserInfoB(poly);

//taks five
/*  
    Написать функцию, которая бы выводила в консоль
    время, оставшееся до следующего Нового Года
    в Украинской локали
*/

const today = new Date(); // Получаем текущую дату
const nextYear = today.getFullYear();
var endYear = new Date(nextYear, 11, 31, 23, 59, 59, 999); // Устанавливаем месяц и день на конец года

function DayNewYear (todayDay, endYearDay){
  let msPerDay = 24 * 60 * 60 * 1000;
  let daysLeft = Math.round((endYearDay.getTime() - todayDay.getTime()) / msPerDay);
  
  return daysLeft;
}

console.log(`До Нового 2019 года осталось ${DayNewYear(today, endYear)} дней.`);