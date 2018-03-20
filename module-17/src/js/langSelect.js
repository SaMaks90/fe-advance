import {lang} from './lang';
import renderKeyboard from './keyboardBuild';
import renderExercies from './exerciesBuild';
import exercise from './exercies'; 

let arr = lang.langs;

function langSelected (event){
    let language = arr.find(elem => elem === event.target.value);
    if(language !== undefined){
        if(language !== lang.currentLang){
            lang.currentLang = language;
            localStorage.setItem('language', language);
            renderKeyboard();
            renderExercies();
            exercise.startTimer = 0;
            exercise.errors = 0;
            exercise.symbol = 0;
            exercise.currentTimer = 0;
        }
    }
}

export default langSelected;