import renderKeyboard from './js/keyboardBuild';
import keystroke from './js/handler';
import {langSelect, container} from './js/elements';
import langSelected from './js/langSelect';
import {checkLang} from './js/lang';
import renderExercies from './js/exerciesBuild';
import keystrokeEx from './js/handlerEx';

checkLang();
renderExercies();
renderKeyboard();
window.addEventListener('click', langSelected);
window.addEventListener('keydown', keystroke);
window.addEventListener('keydown', keystrokeEx);