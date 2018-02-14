/* 
    Написать приложение для работы с REST сервисом http://fecore.net.ua/rest/, 
реализовать следующий функционал:
    - функция getUsers должна получать текущий список всех пользователей в БД.
    - функция addUser должна записывать в БД юзера с полями name и score.
    - функция removeUser должна удалять из БД юзера по id.
    - функция updateUser должна обновлять данные пользователя по id.
    
    Сделать минимальный графический интерфейс в виде панели с полями и кнопками, 
а так же панелью для вывода результатов операций с REST сервисом.
*/
/*==================== const ====================*/
// Get
const getForm = document.querySelector('#js-get');
// Add
const addForm = document.querySelector('#js-add');
const inputAddName = document.querySelector('.add_userName');
const inputAddScore = document.querySelector('.add_userScore');
// Delete
const delForm = document.querySelector('#js-delete');
const inputDelId = document.querySelector('#del_userId');
// Update
const updForm = document.querySelector('#js-update');
const inputUpdId = document.querySelector('#upd_userId');
const inputUpdName = document.querySelector('#upd_userName');
const inputUpdScore = document.querySelector('#upd_userScore');
// Result
const result = document.querySelector('.result');

const rest = 'http://fecore.net.ua/rest/';
/*==================== listener ====================*/
getForm.addEventListener('click', getUsers);
addForm.addEventListener('click', addUser);
delForm.addEventListener('click', removeUser);
updForm.addEventListener('click', updateUser);

/*==================== function ====================*/
function getUsers (evt){
    evt.preventDefault();
    fetch(rest)
    .then(response => {
        if(response.ok){
            return response.json();
        }

        throw new Error('error');
    })
    .then(data => {
        const usersList = document.querySelector('#users_list').textContent.trim();
        const compiled = _.template(usersList);
        let htmlString = '';
        data.forEach(name => {
            htmlString += compiled(name);
        });

        result.innerHTML = `<table>
        <thead>
            <tr>
                <td>Id</td>
                <td style="width: 250px">Users</td>
                <td>Score</td>
            </tr>
        </thead>
        <tbody>${htmlString}</tbody>
    </table>`;
    })
    .catch(eror => {
        console.log(eror);
    });
}

function addUser (evt){
    evt.preventDefault();
    let api = `${rest}?action=1&name=${inputAddName.value}&score=${inputAddScore.value}`;
    fetch(api)
    .then(response => {
        if(response.ok){  
            return response.json();
        }
        
        throw new Error('error');
    })
    .catch(error => {
        console.log(error);
    });
}

function removeUser (evt){
    evt.preventDefault();
    let api = `${rest}?action=3&id=${inputDelId.value}`;
    fetch(api)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Error');
    })
    .catch(error => {
        console.log(error);
    });
}

function updateUser (evt){
    evt.preventDefault();
    let api = `${rest}?action=2&id=${inputUpdId.value}&name=${inputUpdName.value}&score=${inputUpdScore.value}`;
    fetch(api)
    .then(response => {
        if(response.ok){
            return response.json();
        }

        throw new Error('Error');
    })
    .catch(error => {
        console.log(error);
    });
}