import {html, container} from './elements';
import keyboard from './keyboard';
import {lang} from './lang';
import _ from '../../node_modules/lodash';

function renderKeyboard() {
    const compiled = _.template(html);
    const result = compiled({
        dataRow: Object.keys(keyboard[lang.currentLang]),
        dataWord: keyboard[lang.currentLang]
    });

    container.innerHTML = result;

    let button = Array.from(document.querySelectorAll('button'));
    button[button.length - 1].classList.add('keyboard__btn--space');
};

export default renderKeyboard;