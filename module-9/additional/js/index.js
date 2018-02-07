const rows = {
    top: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    middle: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    bottom: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
};

/*==================== Task one ====================*/
/* 
   Составить HTML шаблон c id="row-tpl", который принимает
   массив символов и создает одну строку клавиаутры состоящую
   из элементов  button, обернутых в общий div, текстовый
   контент которых будет буквами из массива символов.
   
   html разметка должна быть такая, emmet сокращение
   div>button*n{значение элемента массива}, где n это
   кол-во элементов массива
*/

// Функция для проверки, она использует шаблон с id=row-tpl
// и рендерит строку в элемент с id=row-container.
// Если вы верно запишите шаблон, то в превью отобразится
// строка кнопок
// Подставив rows.middle или rows.middle вмето rows.top,
// изменится строка кнопок на те что указаны в строке

// renderRow(rows.top);
// renderRow(rows.middle);
// renderRow(rows.bottom);

// function renderRow (row){
//     const container = document.querySelector('#row-container');
//     const htmlString = document.querySelector('#row-tpl').textContent.trim();
//     const compiled = _.template(htmlString);
//     const result = compiled({
//         data: row
//     });

//     container.innerHTML = result;
// }

/*==================== Task two ====================*/
/* 
  *** К этому pen подключена библиотека Lodash ***
  
  Используя свой шаблон из Задания 1, написать функцию
  renderRow которая принимает 3 аргумента: 
  - html шаблон: tpl
  - массив символов: row
  - ссылку на элемент в который будет рендериться результат,
    div c id=row-container: parent
  
  Используя функцию Lodash  _.template() и параментры функции
  renderRow, зарендерить результат обработки шаблона и данных
  в parent.
*/
  
// Если передать в renderRow rows.middle или rows.bottom,
// то в превью должна зарендерится строка кнопок с соответствующими
// символами
// renderRow(rows.top);

// renderRow('#row-tpl', rows.top, '#row-container');
// renderRow('#row-tpl', rows.middle, '#row-container');
// renderRow('#row-tpl', rows.bottom, '#row-container');

// function renderRow(tpl, row, parent) {
//     const container = document.querySelector(parent);
//     const htmlString = document.querySelector(tpl).textContent.trim();
//     const compiled = _.template(htmlString);
//     const result = compiled({
//         data: row
//     });

//     container.innerHTML = result;
// }

/*==================== Task three ====================*/
/* 
  *** К этому pen подключена библиотека Lodash ***
  
  Продолжаем тему клавиатуры. В этом задании необходимо
  создать шаблон целой клавиатуры по переданым строкам 
  и отрендерить результат.
  
  Дан объект rows который содержит 3 поля, каждое из которых
  содержит массив символов. Каждое из полей представляет
  собой строку клавиатуры.
  Для перебора полей объекта используйте Object.keys(obj).
  
  Напишите функцию renderKeyboard которая принимает 3
  аргумента:
  - шаблон: tpl
  - данные строк, обьект с полями: rows
  - ссылку на элемент-родитель в который будем рендерить результат: parent
*/
  
const html = document.querySelector("#keyboard-tpl").textContent.trim();
const container = document.querySelector("#keyboard-container");

renderKeyboard(html, rows, container);

function renderKeyboard(tpl, rows, parent) {
    const compiled = _.template(tpl);
    const result = compiled({
        keys: Object.keys(rows)
    });
    
    parent.innerHTML += result;
}