/* 
    -Создать две кнопки в HTML: start и stop.
    
    -Реализовать функционал таймера отсчета старта печати через 
    функцию-конструктор со свойсвами startTime, stopTime и interval. 
    Добавить в prototype методы start и stop.
    
    -При нажатии на кнопку start, функция сохраняет момент нажатия 
    в свойство startTime.
    
    -При нажатии на кнопку stop, функция сохраняет значение текущего 
    момента времени в stopTime и записывает разницу между startTime 
    и stopTime в interval.

    -При нажатии на stop, значение interval выводится в консоль.
*/
function Timer(startTime, stopTime, interval){
    this.startTime = startTime || 0;
    this.stopTime = stopTime || 0;
    this.interval = interval || 0;
}

const timer = new Timer();

const btnStart = document.querySelector('button[value="start"]');
const btnStop = document.querySelector('button[value="stop"]');

btnStart.addEventListener('click', handlerStart);
btnStop.addEventListener('click', handlerStop);

function handlerStart (evt){
    timer.startTime = Date.now();
}

function handlerStop (evt){
    if(timer.stopTime === 0){
        timer.stopTime = Date.now();
        timer.interval = timer.stopTime - timer.startTime;
        console.log(`${timer.interval} ms`);
    } else {
        console.log(`Таймер уже был остановлен ${timer.interval} ms`)
    }
}