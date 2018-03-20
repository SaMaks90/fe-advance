import {lastObj} from './elements';
import letters from './letters';
import {lang} from './lang';

function keystroke(event){
    let keyBoard = letters[lang.currentLang].split('').find(elem => elem === event.key);
    
    if(keyBoard !== undefined){
        let a = Array.from(document.querySelectorAll('.keyboard__btn')).find(elem => elem.textContent === keyBoard);
        
        if(lastObj.lastPressKey !== null){
            lastObj.lastPressKey.classList.remove('keyboard__btn--active');
        }  
        
        lastObj.lastPressKey = a;
        a.classList.add('keyboard__btn--active');        
    }
}

export default keystroke;