const container = document.querySelector('.container');

const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: '',
    createLayout: function (){
        const userKeyboard = document.createElement('div');
        userKeyboard.classList.add('keyboard');

        let lang = this.layouts[this.currentLang];

        userKeyboard.append(fillString(lang.topRow, 'topRow'), fillString(lang.middleRow, 'middleRow'), fillString(lang.bottomRow, 'bottomRow'));
        return userKeyboard;
    }
};

/*==================== Checking ==================== */
alphabet();

while(true) {
    let language = prompt('Какой язык вы хотите использовать на тренажере: 0 - Английский, 1 - Русский, 2 - Украинский:');
    
    if(language === '0' || language === '1' || language === '2'){
        // if(language === '0'){
        //     keyboard.currentLang = 'en';
        // } else if(language === '1'){
        //     keyboard.currentLang = 'ru';
        // } else {
        //     keyboard.currentLang = 'ua';
        // }
        
        keyboard.currentLang = keyboard.langs[+language];

        container.append(keyboard.createLayout());
        break;
    }else if(language === null){
        break;
    }else {
        alert('Выбран не доступный язык!');
    }
}


/*==================== Function ==================== */
function alphabet(){
    let alphabetEn = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./'.split('');
    let alphabetRu = 'йцукенгшщзхъфывапролджэячсмитьбю.'.split('');
    let alphabetUa = 'йцукенгшщзхїфівапролджєячсмитьбю.'.split('');

    return alphabetEn.map((elem, i, alphabetEn) => (i <= alphabetEn.indexOf(']')) ? keyboard.layouts.en.topRow.push(elem) : (i >= alphabetEn.indexOf('a') && i <= alphabetEn.indexOf('\'')) ? keyboard.layouts.en.middleRow.push(elem) : keyboard.layouts.en.bottomRow.push(elem)) 
&& alphabetRu.map((elem, i, alphabetRu) => (i <= alphabetRu.indexOf('ъ')) ? keyboard.layouts.ru.topRow.push(elem) : (i >= alphabetRu.indexOf('ф') && i <= alphabetRu.indexOf('э')) ? keyboard.layouts.ru.middleRow.push(elem) : keyboard.layouts.ru.bottomRow.push(elem)) 
&& alphabetUa.map((elem, i, alphabetUa) => (i <= alphabetUa.indexOf('ї')) ? keyboard.layouts.ua.topRow.push(elem) : (i >= alphabetUa.indexOf('ф') && i <= alphabetUa.indexOf('є')) ? keyboard.layouts.ua.middleRow.push(elem) : keyboard.layouts.ua.bottomRow.push(elem));
}

function fillString (str, classBoard){
    const stringRow = document.createElement('ul');
    stringRow.classList.add(classBoard);

    for(let i = 0; i < str.length; i++){
        let symbol = document.createElement('li');
        symbol.textContent = str[i];
        stringRow.append(symbol);
    }

    return stringRow;
}