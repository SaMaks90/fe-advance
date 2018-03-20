import {langSelect} from './elements';

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ",
    ru: "йцукенгшщзхъфывапролджэячсмитьбю. ",
    ua: "йцукенгшщзхїфівапролджєячсмитьбю. ",
    langs: ['en', 'ru', 'ua'],
    currentLang: localStorage.getItem('language') || 'en'
};

function checkLang (){
    let a = document.querySelector('input[checked]');
    let b = document.querySelector(`input[value=${lang.currentLang}]`);
    if(lang.currentLang !== a.value){
        a.removeAttribute('checked');
        b.setAttribute('checked', 1);
    }
}

export {lang, checkLang};