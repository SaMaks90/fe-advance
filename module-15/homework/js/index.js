/* 
+ - Создать две кнопки в HTML: start и stop.
+ - Создать класс Timer с полями startTime, stopTime и interval. Создать 
 несколько экземпляров класса с разными значениями свойств, 
 вывести их в консоль.
+ - Для класса Timer создать методы start и stop, getTime.
+ - Создать экземпляр класса Timer, пусть он называется stopwatch.
+ - При нажатии на кнопку start, метод stopwatch.start сохраняет 
 момент нажатия в свойство startTime.
+ - При нажатии на кнопку stop, метод stopwatch.stop сохраняет 
 значение текущего момента времени в stopTime и записывает разницу 
 между startTime и stopTime в interval. А метод stopwatch.getTime 
 возвращает значение поля interval, которое необходимо вывести в консоль.
+ - Для класса Timer создать статический метод timeToNY который 
 возвращает кол-во дней от сегодня и до Нового Года.
*/
const start = document.querySelector('button[value="start"]');
const stop = document.querySelector('button[value="stop"]');

class Timer {
    constructor (startTime = 0, stopTime = 0, interval = 0){
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.interval = interval;
    }

    start (){
        this.startTime = Date.now();
    }

    stop (){
        this.stopTime = Date.now();
        this.interval = this.stopTime - this.startTime;
    }

    getTime (){
        console.log(`${this.interval} ms`);
    }
    
    static timeToNY (){
        let dateNow = new Date();
        let dateNY = new Date(dateNow.getFullYear(), 12, 31, 23, 59, 59, 999);
        let days = parseInt((dateNY - dateNow)/(24*60*60*1000));
        console.log(`До Нового Года осталось ${days} дней!`);
    }
}

// let timerOne = new Timer('10:10', '10:12', '120000');
// let timerTwo = new Timer('10:10', '10:14', '240000');
let stopwatch = new Timer();

start.addEventListener('click', handler);
stop.addEventListener('click', handler);

Timer.timeToNY();
// console.log(timerOne);
// console.log(timerTwo);

function handler (evt){
    if(evt.toElement.textContent === 'Start'){
        stopwatch.start();
    } else {
        stopwatch.stop();
        stopwatch.getTime();
    }
}