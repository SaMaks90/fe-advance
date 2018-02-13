/*==================== Task one ====================*/
/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
  Country name: имя страны
  Capital: столица
  Main currency: название денежной единицы
  Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение элемента по умолчанию.
*/

// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#js-submit");
// const result = document.querySelector(".result");
// const apiUrl = "https://restcountries.eu/rest/v2/name/";

// submitBtn.addEventListener("click", fetchCountryData);

// function fetchCountryData(evt) {
//     evt.preventDefault();
//     fetch(apiUrl + input.value)
//     .then(response => {
//         if(response.ok){
//             return response.json();
//         }
//         throw new Error('Error fetching data');
//     })
//     .then(data => {
//         result.innerHTML = `<p>Country name: ${data[0].name}</p>
//                             <p>Capital: ${data[0].capital}</p>
//                             <p>Main currency: ${data[0].currencies[0].name}</p>
//                             <img src="${data[0].flag}" alr="flag">`;
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

/*==================== Task two ====================*/
/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
    С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
  Avatar: аватартка 
  Username: логин
  Bio: описание профиля
  Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#js-submit");
// const result = document.querySelector(".result");
// const apiUrl = "https://api.github.com/users/";

// let a;

// submitBtn.addEventListener("click", fetchUserData);

// function fetchUserData(evt) {
//   evt.preventDefault();
//   fetch(apiUrl + input.value)
//   .then(response => {
//     if(response.ok){
//       return response.json();
//     }
//     throw new Error('Error fetching data');
//   })
//   .then(data => {
//     a = data;
//     result.innerHTML = `<img src="${data.avatar_url}" alt="avatar">
//                         <p>Username: ${data.login}</p>
//                         <p>Bio: ${data.bio}</p>
//                         <p>Public repos: ${data.public_repos}</p>`;
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

/*==================== Task three ====================*/
/*
  Написать функцию get, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить форму состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
  Name Score
  имя  кол-во очков 
  имя  кол-во очков 
*/

// const getBtn = document.querySelector("#js-get");
// const result = document.querySelector("#result");

// const userScore = document.querySelector("#users__score").textContent.trim();
// const compiled = _.template(userScore);

// getBtn.addEventListener("click", get);

// function get(evt) {
//   evt.preventDefault();
//   fetch('http://fecore.net.ua/rest/')
//   .then(response => {
//     if(response.ok){
//       return response.json();
//     }
//     throw new Error('Error cetching');
//   })
//   .then(data => {
//     let htmlString = '';
//     data.forEach(name => {
//       htmlString += compiled(name);
//     });

//     result.innerHTML = htmlString;    
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

/*==================== Task four ====================*/
/*
  Написать функцию post, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает post запрос с именем введенным в input.
  
  Результатом fetch будет ответ от сервера со статусом
  операции записи, вывести ОК или ERROR в поле result.
*/
const input = document.querySelector("input");
const postBtn = document.querySelector("#js-post");
const result = document.querySelector(".result");

postBtn.addEventListener("click", post);
let a;
function post(evt) {
  evt.preventDefault();
  fetch('http://fecore.net.ua/rest/')
  .then(response => {
    if(response.ok){
      return response.json();
    }

    throw new Error('Error');
  })
  .then(data => {
    if(Array.from(data, elem => elem.name === input.value)
            .find(elem => elem === true)){
              result.textContent = `Такой пользователь есть в системе!`;
            } else {
              result.textContent = `Извините такого пользователя нет(`;
            }
  })  
  .catch(error => {
    console.log(error);
  });
}