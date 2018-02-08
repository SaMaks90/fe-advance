/*==================== Variable ====================*/
const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ "
};

const keyboard = {
  en: {
    top: [],
    middle: [],
    bottom: [],
    space: []
  },
  note: ['do', 're', 'mi', 'fa', 'sol', 'la', 'si']
}

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const html = document.querySelector('#keyboard__template').textContent.trim();
const container = document.querySelector('.keyboard');

const check = document.querySelector('#slideThree');
const keys = lang.en.split("");
const obj = {
  keyBoar: null
}

/*==================== Run function ====================*/
alphabet(lang.en);
renderKeyboard(html, keyboard.en, container);

/*==================== Variable ====================*/
const buttons = Array.from(document.querySelectorAll("button"));

spaceClass();
window.addEventListener('keydown', keystroke);

/*==================== function ====================*/
function alphabet(str){
  let alphabet = str.split('');
    
  return alphabet.map((elem, i, alphabet) => (i <= alphabet.indexOf(']')) ? keyboard.en.top.push(elem) : (i >= alphabet.indexOf('a') && i <= alphabet.indexOf('\'')) ? keyboard.en.middle.push(elem) : (elem === ' ') ? keyboard.en.space.push('space') : keyboard.en.bottom.push(elem)); 
}

function renderKeyboard(tpl, obj, parent) {
  const compiled = _.template(tpl);
  const result = compiled({
    data: Object.keys(obj)
  });

  container.innerHTML = result;
}

function keystroke(event){
    let keyBoard = keys.find(elem => elem === event.key);
    if(keyBoard === ' '){
        keyBoard = 'space';
    }
    if(keyBoard !== undefined){
      let a = buttons.find(elem => elem.textContent === keyBoard);
      if(obj.keyBoar !== null){
        obj.keyBoar.classList.remove('keyboard__btn--active');
      }  
      obj.keyBoar = a;
      a.classList.add('keyboard__btn--active');        
      if(check.checked){
          playSound(`'${a.dataset.note}'`);
      }
  }
}

function spaceClass (){
  let space = buttons.find(elem => elem.textContent === 'space')
  space.classList.add('keyboard__btn--space');
}

function randomNumber(){
  return Math.floor(Math.random() * keyboard.note.length);
}