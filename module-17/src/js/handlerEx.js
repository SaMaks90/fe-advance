import exercise from './exercies';
import {lang} from './lang';
import {startTimer, stopTimer} from './timer';
import {error} from './elements';


function keystrokeEx(event){
    let charsArr = exercise.string[lang.currentLang].split('');
    let charsArrButton = Array.from(document.querySelectorAll('.keyboard__btnEx'));

    if(event.key === charsArr[exercise.symbol]){
        
        if(exercise.startTimer === 0){
            startTimer();
        }

        charsArrButton[exercise.symbol].classList.add('keyboard__btn--ready');
        exercise.symbol +=1;

        if(exercise.symbol === charsArr.length){
            stopTimer();
            error.textContent = `${exercise.errors} ошибок.`
            exercise.countKPS();
        }

    }else if(exercise.symbol === charsArr.length){
        stopTimer();
    }else{
        exercise.errors += 1;
    }
}

export default keystrokeEx;