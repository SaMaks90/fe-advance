/*==================== Task one ====================*/
/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она должна
  вызываться при клике на startBtn.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике по stopBtn.
  
  Написать функцию resetClockface которая обнуляет
  значение счетчика в интерфейсе (00:00:000). 
  Ссылка на элемент для отображения времени хранится
  в переменной clockface
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе.
*/
// const clockface = document.querySelector(".clock__time");
// const startBtn = document.querySelector("#start");
// const stopBtn = document.querySelector("#stop");
// const resetBtn = document.querySelector('#reset');
// const controls = document.querySelector(".lang-ctrls__body");
// const buttons = controls.querySelectorAll("button");
// const timer = {
//   startTime: "",
//   currentTime: 0,
//   id: ""
// };

// controls.addEventListener("click", setActiveBtn);
// startBtn.addEventListener("click", startTimer);
// stopBtn.addEventListener("click", stopTimer);
// resetBtn.addEventListener("click", resetClockface);


// function startTimer() {
//     timer.startTime = setInterval(()=> {
//         timer.currentTime++;
//         updateClockface(timer.currentTime);
//     }, 1);
// }

// function stopTimer() {
//     clearInterval(timer.startTime);
// }

// function resetClockface() {
//     stopTimer();
//     timer.currentTime = 0;
//     timer.id++;
//     clockface.textContent = '00:00:000';
// }

/*==================== Task two ====================*/
/* 
  Напишите скрипт, реализующий функционал таймера
  который считает время от заданого значения до нуля.
  По достижении 00:00:000 выводит alert('n минут прошло').
  
  Создайте функцию countDownFrom, которая бы по клику на кнопку
  startBtn вела обратный отсчет от n минут. n - аргумент
  функции, кол-во минут от 1 до 99.
  
  Создайте функцию alertUser, которая, по истечению
  времени будет просто выводить alert с сообщение 'n минут прошло'.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе.
*/

// const clockface = document.querySelector(".clock__time");
// const startBtn = document.querySelector("#start");
// const controls = document.querySelector(".lang-ctrls__body");
// const buttons = controls.querySelector(".lang-ctrls__btn");
// const timer = {
//     startTime: '',
//     currentTime: 0,
//     id: ""
// };

// controls.addEventListener("click", setActiveBtn);
// startBtn.addEventListener("click", countDownFrom.bind(null, 1));

// function countDownFrom(minutesMax, minutesMin) {
//   timer.currentTime = (minutesMax * 60000) || (minutesMin * 60000);
//   alertUser(timer.currentTime);
  
//   updateClockface(timer.currentTime);
//   timer.startTime = setInterval(() => {
//         timer.currentTime -= 4;
//         updateClockface(timer.currentTime);
//     },1);
// }

// function alertUser(minutes) {
//   let min = minutes;
//   let max = minutes/60000;
//   setTimeout((min) => {
//     clearInterval(timer.startTime);
//     updateClockface(0);
//     alert(`Прошло ${max} минут.`);
//   }, min);
// }

/*==================== Task three ====================*/
/* 
  Написать скрипт, который по клику присваивает
  выбранной кнопке языка класс lang-ctrls__btn--active
  и сохраняет сделанный выбор  в объекте, а этот объект
  сохранятеся в localStorage.
  
  При загрузке окна происходит провека есть ли сохраненный
  выбор в localStorage и если есть, то данные для подсветки 
  коавиши берутся оттуда.
*/

const controls = document.querySelector(".lang-ctrls__body");
const buttons = controls.querySelectorAll("button");

update();

controls.addEventListener('click', setActiveBtn);

function update (){
  if(localStorage.getItem('language') === null){
    return false;
  }
  Array.from(buttons, elem => elem.classList.remove("lang-ctrls__btn--active"));
  let but = Array.from(buttons).find(elem => elem.textContent === localStorage.getItem('language').toLocaleLowerCase());
  but.classList.add('lang-ctrls__btn--active');
}

/*==================== function ====================*/
/*
* Вспомогательные функции
* setActiveBtn - Подсветка активной кнопки
* getFormattedTime - возвращает форматированое время
* updateClockface - обновляет поле счетчика новым значением при вызове
*/
// function updateClockface(time) {
//   clockface.textContent = getFormattedTime(time);
// }
  
// function getFormattedTime(time) {
//   const date = new Date(time);
//   const mt =
//     date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
//   const sc =
//     date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
//   const ms =
//     date.getMilliseconds() < 10
//       ? "00" + date.getMilliseconds()
//       : date.getMilliseconds() < 100
//         ? "0" + date.getMilliseconds()
//         : date.getMilliseconds();

//   return `${mt}:${sc}:${ms}`;
// }
  
function setActiveBtn(e) {
  Array.from(buttons, elem => elem.classList.remove("lang-ctrls__btn--active"));
  let elem = e.target;

  if (e.target.classList.contains("material-icons")) {
    elem = elem.parentNode;
  }
  if (!elem.classList.contains("lang-ctrls__btn")) {
    return false;
  }

  elem.classList.add("lang-ctrls__btn--active");
  localStorage.setItem('language', e.target.innerText);
}