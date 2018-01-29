const container = document.querySelector('.container');

/*============================== Users ==============================*/
const userOne = {
    img: './img/img-1',
    name: 'Claudia Cardinale',
    age: 29,
    location: 'Philadelphia, PA',
    strawberries: 19,
    lemons: 5
};

const userTwo = {
    img: './img/img-2',
    name: 'Amanda Oplah',
    age: 57,
    location: 'Kiev, Ukraine',
    strawberries: 58,
    lemons: 1
};

const userThree = {
    img: './img/img-3',
    name: 'Aleksandr Voytovich',
    age: 22,
    location: 'Lviv, Ukraine',
    strawberries: 92,
    lemons: 16
};

/*============================== Checking ==============================*/
// container.append(createUserCard());
container.insertAdjacentHTML('beforeend', createUserCard(userOne));
container.insertAdjacentHTML('beforeend', createUserCard(userTwo));
container.insertAdjacentHTML('beforeend', createUserCard(userThree));

/*============================== Task one ==============================*/
// function createUserCard(){
//     const post = document.createElement('div');
//     post.classList.add('user');

//     const postImage = document.createElement('img');
//     postImage.classList.add('user__image');
//     postImage.setAttribute('src', './img/img-1.jpg');

//     const postTitle = document.createElement('h2');
//     postTitle.classList.add('user__name');
//     postTitle.textContent = 'claudia cardinale';

//     const postGeneral = document.createElement('ul');
//     postGeneral.classList.add('user__general');

//     const postGeneralAge = document.createElement('li');
//     postGeneralAge.classList.add('general__age');
//     postGeneralAge.textContent = 29;

//     const postGeneralLocation = document.createElement('li');
//     postGeneralLocation.classList.add('general__location');
//     postGeneralLocation.textContent = 'Philadelphia, PA';

//     postGeneral.append(postGeneralAge, postGeneralLocation);

//     const postOther = document.createElement('ul');
//     postOther.classList.add('user__other');

//     const postOtherStrawberry = document.createElement('li');
//     postOtherStrawberry.classList.add('other__strawberry');
//     postOtherStrawberry.textContent = 19;

//     const postOtherLemon = document.createElement('li');
//     postOtherLemon.classList.add('other__lemon');
//     postOtherLemon.textContent = 5;

//     const postOtherLike = document.createElement('li');
//     postOtherLike.classList.add('other__like');

//     postOther.append(postOtherStrawberry, postOtherLemon, postOtherLike);

//     post.append(postImage, postTitle, postGeneral, postOther);

//     return post;
// };

/*============================== Task two ==============================*/
// function createUserCard(){
//     const post = `
//     <div class="user">
//         <img src="./img/img-1.jpg" alt="" class="user__image">
//         <h4 class="user__name">claudia cardinale</h4>
//         <ul class="user__general">
//             <li class="general__age">29</li>
//             <li class="general__location">Philadelphia, PA</li>
//         </ul>
//         <ul class="user__other">
//             <li class="other__strawberry">19</li>
//             <li class="other__lemon">5</li>
//             <li class="other__like"></li>
//         </ul>
//     </div>
//     `;

//     return post;
// }

/*============================== Task three ==============================*/
function createUserCard(obj){
    const post = `
    <div class="user">
        <img src="${obj.img}.jpg" alt="" class="user__image">
        <h4 class="user__name">${obj.name}</h4>
        <ul class="user__general">
            <li class="general__age">${obj.age}</li>
            <li class="general__location">${obj.location}</li>
        </ul>
        <ul class="user__other">
            <li class="other__strawberry">${obj.strawberries}</li>
            <li class="other__lemon">${obj.lemons}</li>
            <li class="other__like"></li>
        </ul>
    </div>
    `;

    return post;
}