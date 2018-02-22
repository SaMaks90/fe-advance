/* Task one */
/*
  Создать функцию-конструктор Timer 
  с полями startTime, stopTime 
  и interval. 
  
  Создать несколько экземпляров 
  с разными значениями свойств, 
  вывести их в консоль.
*/
// function Timer(startTime, stopTime, interval){
//   this.startTime = startTime;
//   this.stopTime = stopTime;
//   this.interval = interval;
// }

// let one = new Timer(1, 1, 1);
// let two = new Timer(2, 2, 2);
// let three = new Timer(3, 3, 3);

/* Task two */
/*
  Для конструктора Timer, из задания #1, создать 
  метод show, который выводит в консоль значения 
  всех полей. Метод show записать в prototype. 
  
  Обратите внимание, метод будет всего один, 
  в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
*/ 

// Timer.prototype.show = function (){
//   return console.log(`startTime: ${this.startTime}, stopTime: ${this.stopTime}, interval: ${this.interval}`);
// }

// one.show();
// two.show();
// three.show();

/* Task three */
/*
  Добавить в prototype конструктора Array 
  метод getLastElem, который возвращает
  последний элемент массива на котором этот 
  метод вызвали, либо undefined если массив пустой.
*/

// function Array (arr){
//   this.arr = arr || [];
// }

// Array.prototype.getLastElem = function (){
//   if(this.arr.length > 0){
//     return this.arr[this.arr.length -1];
//   } else {
//     return undefined;
//   }
// }

// let one = new Array([1,2,3,4,5,'asd']);
// let two = new Array();

// one.getLastElem();
// two.getLastElem();

/* Task four */
/*
  Используя Object.assign написать код,
  который позволяет пользователю
  установить цвет фона страницы по своему вкусу
  выбрав цвет с помощью input и подтвердив выбор
  кнопкой 'ok'
*/
const defaultSettings = {
  body: {
    color: '#fff',
    bg: '#c0c0c0'
  }
};

const userSettings = {
  body: {
    bg: ''
  }
};

const btn = document.querySelector('#js-submit');
const bg = document.querySelector('input[type="color"]');
const body = document.body;

const settings = Object.assign(userSettings, defaultSettings);

updateDisplay(settings);

btn.addEventListener('click', handler)

function handler (evt){
  evt.preventDefault();
  userSettings.body.bg = bg.value;
  updateDisplay(settings);
}

function updateDisplay (){
  body.style.background = settings.body.bg;
  body.style.color = settings.body.color;
}