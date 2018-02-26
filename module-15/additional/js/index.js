/* Task one */
/*
  Создать набор (Set) emails, который будет хранить список 
  почт пользователей.
  
  Написать функцию проверки существования записи в наборе (Set).
  Это фунция которая проверяет существование пользователя по mail. 
  С помощью методов Set проверяйте уникальность mail. 
  Если mail есть, функция должна вернуть true, в противном случае false. 
  
  Написать отдельную фнукция showResults, которая по результатам работы 
  функции проверки выводит в консоль 'Такой mail уже есть' если true и 
  'Вы зарегистрированы' если false.
*/

/* Создаем набор emails и добавляем в него почты пользователей */
let emails = new Set();

emails.add('samchenkoms@gmail.com');
emails.add('1111@gmail.com');
emails.add('life@i.ua');
emails.add('support@gmail.com');

/* Функции */
function checkedEmail (email){
    return emails.has(email);
}

function showResults(email){
    if(checkedEmail(email)){
        console.log(`Такой ${email} уже есть в системе!`);
    }else{
        emails.add(email)
        console.log(`Вы зарегестрированы!`);
    }
}

/* Проверка */
console.log(emails);
showResults('samchenkoms@gmail.com');
showResults('google.support@gmail.com');
console.log(emails);

/* Task two */
/*
  Создать класс Clock с полями  startTime и stopTime. 
  Для класса Clock создать метод show, 
  который выводит в консоль значения всех полей.
  
  Создать экземпляр, вывести в консоль.
*/
/* Task three */
/*
  Создать статический метод convertTime для класса Clock. 
  Он получает кол-во миллисекунд и возвращает дату с помощью Date.
  
  То есть будет возможность вызвать Clock.convertTime(111111) 
  и получить обратно дату.
*/
/* Task four */
/*
  Создать класс Timer наследующий от класса Clock из 
  предыдущих заданий этого модуля.
  
  Класс Timer должен иметь сообственное поле interval.
  
  Подсказка: используйте super.
*/

class Clock {
    constructor(startTime, stopTime){
        this.startTime = startTime;
        this.stopTime = stopTime;
    }

    show(){
        for(let key in this){
            console.log(this[key]);
        }
    }

    /* Статический метод */
    static convertTime(value){
        return new Date(value);
    }
}

/* Создаем класс унаследующий от Clock и добаить поле interval */
class Timer extends Clock {
    constructor (startTime, stopTime, interval){
        super(startTime, stopTime);
        this.interval = interval;
    }
}

let clock = new Clock('10:00', '10:10');
clock.show();

console.log(Clock.convertTime(1499935235243));
let timer = new Timer('12:30', '12:31', '60000 ms');
timer.show();