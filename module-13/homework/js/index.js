/*
  Соединить задание 1 и 2
  
  Напишите функцию validate которая проверяет все поля формы 
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для поля.
  
  При клике на кнопку submit должна происходить проверка.
  
  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.
  
    showResults добавляет в список с классом .results 
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation
  
    Для li с положительным результатом дать класс success, 
    с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
const form = document.forms[0];

const obj = {
  firstname: false,
  lastname: false,
  tel: false
}

submitBtn.addEventListener("click", validate);

function validate(evt) {
  evt.preventDefault();
  /* Проверка имени */
  if(/^(\w{1,}\s\w{1,}\s\w{1,}$)/.test(firstname.value) 
    || /^(\w{1,}\s\w{1,}$)/.test(firstname.value) 
    || /^\w{1,}$/.test(firstname.value)
    || /^(\W{1,}\s\W{1,}\s\W{1,}$)/.test(firstname.value) 
    || /^(\W{1,}\s\W{1,}$)/.test(firstname.value) 
    || /^\W{1,}$/.test(firstname.value)) {
    obj.firstname = true;
  }

  /*  */  
  if(/^(\w{1,}$)/.test(lastname.value) 
  || /^(\w{1,}\D{1,3}\w{1,}$)/.test(lastname.value)
  || /^(\W{1,}$)/.test(lastname.value) 
  || /^(\W{1,}\D{1,3}\W{1,}$)/.test(lastname.value)){
    obj.lastname = true;
  }

  /*  */
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
        // console.log(`tel +${num[0]}${num[1]}${num[2]}-${num[3]}${num[4]}-${num[5]}${num[6]}-${num[7]}${num[8]}-${num[9]}${num[10]}${num[11]}`);
      }
    }

  showResults(obj);
}

function showResults(results) {
  let res = '';
  for(let key in results){
    if(results[key] === true){
      res += `<li class='success'>SUCCESS: ${key} passed validation</li>` 
    } else {
      res += `<li class='error'>ERROR: ${key} failed validation</li>` 
    }
  }
  resultsList.innerHTML = res;
  form.reset();
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}