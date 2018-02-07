const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const check = document.querySelector('#slideThree');
const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
const obj = {
  keyBoar: null
}

window.addEventListener('keydown', keystroke);

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