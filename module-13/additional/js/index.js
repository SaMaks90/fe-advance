/*==================== Task one ====================*/
/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 3-х слов, а слова должны состоять 
  только из букв латинского и кириллического алфавита.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами, 
  дефисом или пробелами и дефисом. Слова должны состоять только из 
  букв латинского и кириллического алфавита.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/
// const firstname = document.getElementById("first_name");
// const lastname = document.getElementById("last_name");
// const submitBtn = document.getElementById("submit-btn");

// const obj = {
//   'first name': false,
//   'last name': false
// }

// submitBtn.addEventListener("click", validate);

// function validate(evt) {
//   evt.preventDefault();
//   if(/^(\w{1,}\s\w{1,}\s\w{1,}$)/.test(firstname.value) 
//   || /^(\w{1,}\s\w{1,}$)/.test(firstname.value) 
//   || /^\w{1,}$/.test(firstname.value)
//   || /^(\W{1,}\s\W{1,}\s\W{1,}$)/.test(firstname.value) 
//   || /^(\W{1,}\s\W{1,}$)/.test(firstname.value) 
//   || /^\W{1,}$/.test(firstname.value)) {
//     obj['first name'] = true;
//   } else {
//     console.log('Введите правильно имя!');
//   }

//   if(/^(\w{1,}$)/.test(lastname.value) 
//   || /^(\w{1,}\D{1,3}\w{1,}$)/.test(lastname.value)
//   || /^(\W{1,}$)/.test(lastname.value) 
//   || /^(\W{1,}\D{1,3}\W{1,}$)/.test(lastname.value)){
//     obj['last name'] = true;
//   } else {
//     console.log('Введите правильно фамилию!');
//   }

//   if(obj['first name'] && obj['last name']) {
//     console.log(obj);
//   }
// }

/*==================== Task two ====================*/
/* 
  Напишите функцию validate которая проверяет поле формы 
  номера телефона tel и возвращает результат в виде обьекта 
  со свойством tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для поля.
  {
    tel: true или false,
  }
  
  Критерии валидации:
  1) Правильный формат записи начинается с + и содержит 12 цифр от 0 до 9.
  
  2) При вводе допускаются пробелы или дефисы между любыми цифрами. 
  
  3) При выводе номер должен быть отформатирован в том же стиле что и номер 
  в placeholder
 
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект и результирующий номер телефона 
  в правильном фонрмате, выводить в консоль.
*/

const tel = document.getElementById("tel");
const submit = document.querySelector(".btn");

const obj = {
  tel: false
};

submit.addEventListener("click", validate);


function validate(evt) {
  evt.preventDefault();
  if(Array.from(tel.value.split(''), elem => 
    isNumeric(elem)
    || elem === ' '
    || elem === '-'
    || elem === '+'
    ? elem = true
    : elem = false)
    .find(elem => elem === false) === undefined){
      let num = [];
      Array.from(tel.value.split(''), elem => isNumeric(elem) ? num.push(elem) : elem);
      if(num.length === 12){
        obj.tel = true;
        console.log(`tel +${num[0]}${num[1]}${num[2]}-${num[3]}${num[4]}-${num[5]}${num[6]}-${num[7]}${num[8]}-${num[9]}${num[10]}${num[11]}`);
      } else {
        console.log('Вы ввели неправильное количество цифр!');
      }
    } else {
      console.log('Введите правильно номер телефона!');
    }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}