/*==================== Task one ====================*/
/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике на кнопке с надписью "space", элемету btn
  должен присвоиться класс keyboard__btn--active. 
 
 - При следующем клике этот класс должен удаляться, 
  и так поочереди. Рекомендуется использовать classList.toggle.
 
 - Элементу pressed должно присваиваться значение
  textContent элемента btn.
*/

// const btn = document.querySelector(".keyboard__btn--space");
// const pressed = document.querySelector(".pressed");

// const spaceClick = function (){
//   btn.classList.toggle('keyboard__btn--active');
//   pressed.textContent = btn.textContent;
// }

// btn.addEventListener('click', spaceClick);

/*==================== Task two ====================*/ 
/*
Напишите скрипт который реализует следующее поведение:
 
 - При клике по любой кнопке на клавиатуре keyboard, 
  кнопке должен присваиваться класс keyboard__btn--active. 
 
 - При клике по другой кнопке класс должен удалиться с предыдущей 
  кнопки, и присвоиться новой кнопке.

 - Элементу pressed должно присваиваться текстовое содержимое,
  полученное у элемента кнопки на которую кликнули с помощью
  объекта event и свойства target.textContent.
 
PS: Используйте прием "буфер" - создайте объект activeBtn
  для хранения в свойстве node ссылку на элемент event.target
  до следующего события. 
  
 - При наступлении следующего события удалите класс 
 keyboard__btn--active у activeBtn.node.
 Рекомендуется использовать .classList.remove.

PSS: Обязательно использовать делегирование событий,
  установив addEventListener на вю клавиатуру keyboard.
*/

// const keyboard = document.querySelector(".keyboard");
// const pressed = document.querySelector(".pressed");
// const activeBtn = {
//   node: null
// };

// const onClick = event => {
//   if(event.target !== event.currentTarget){
//     event.target.classList.add('keyboard__btn--active');
//     if(activeBtn.node !== null){
//       activeBtn.node.classList.remove('keyboard__btn--active');
//     }
//     activeBtn.node = event.target;
//     pressed.textContent = event.target.textContent;
//   } 
// }

// keyboard.addEventListener('click', onClick);

/*==================== Task three ====================*/
/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике по любой кнопке на клавиатуре, этому элемету
  должен присваиваться класс keyboard__btn--active. 
 
 - При клике по другой кнопке класс должен удалиться с
 предыдущей кнопки, и присвоиться новой кнопке.
 
 - Элементам с классом x-position и y-position должно присваиваться 
 значение event.clientX и event.clientY
 
PS: При клике вне кнопок класс keyboard__btn--active удаляется с 
  предыдущей кнопки. Никаких других событий происходить не должно:
  класс не приваивается, координаты не записываются.
  Рекомендуется использовать classList.contains.

PSS: Используйте делегирование, установив addEventListener 
  классу keyboard.
*/

// const keyboard = document.querySelector('.keyboard');
// const x = document.querySelector('.x-position');
// const y = document.querySelector('.y-position');
// const activeBtn = {
//   node: null
// };

// keyboard.addEventListener('click', onClick);

// function onClick (event){
//   if(event.target !== event.currentTarget){
//     if(event.target.classList.contains('keyboard__row')){
//       if(activeBtn.node !== null){
//         activeBtn.node.classList.remove('keyboard__btn--active');
//         x.textContent = '';
//         y.textContent = '';
//       }
//     } else {
//       event.target.classList.add('keyboard__btn--active');
//       if(activeBtn.node !== null){
//         activeBtn.node.classList.remove('keyboard__btn--active');
//       }
//       activeBtn.node = event.target;
//       x.textContent = event.clientX;
//       y.textContent = event.clientY;
//       console.log(event);
//     }
//   } 
// }

/*==================== Task four ====================*/ 
/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике по label должен сработать checkbox и 
  включить, либо выключить звук при клике на клавишу.
  
 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
  
 - Для проигрывания музыки вызовите функцию playSound
*/

const playSound = () => {
  const audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
};

const check = document.querySelector('#slideThree');
const btns = document.querySelector(".keyboard");
const activeBtn = {
  node: null
};

btns.addEventListener('click', onClick);

function onClick (event){
  if(event.target !== event.currentTarget){
      if(event.target.classList.contains('keyboard__row')){
      if(activeBtn.node !== null){
        activeBtn.node.classList.remove('keyboard__btn--active');
      }
    } else {
      if(check.checked){
        playSound();
      }
      
      event.target.classList.add('keyboard__btn--active');
      if(activeBtn.node !== null){
        activeBtn.node.classList.remove('keyboard__btn--active');
      }
      activeBtn.node = event.target;
    }
  } 
}