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

        let lang;
        if(this.currentLang === 'en'){ 
            lang = this.layouts.en;
        } else if(this.currentLang === 'ru'){
            lang = this.layouts.ru;
        } else {
            lang = this.layouts.ua;
        }

        const topRow = document.createElement('ul');
        topRow.classList.add('topRow');

        for(let i = 0; i < lang.topRow.length; i++){
            let a = document.createElement('li')
            a.textContent = lang.topRow[i];
            topRow.append(a);
        }

        const middleRow = document.createElement('ul');
        middleRow.classList.add('middleRow');

        for(let i = 0; i < lang.middleRow.length; i++){
            let a = document.createElement('li')
            a.textContent = lang.middleRow[i];
            middleRow.append(a);
        }

        const bottomRow = document.createElement('ul');
        bottomRow.classList.add('bottomRow');

        for(let i = 0; i < lang.bottomRow.length; i++){
            let a = document.createElement('li')
            a.textContent = lang.bottomRow[i];
            bottomRow.append(a);
        }

        userKeyboard.append(topRow, middleRow, bottomRow);
        return userKeyboard;
    }
};

/*==================== Checking ==================== */
alphabet();

while(true) {
    let language = prompt('Какой язык вы хотите использовать на тренажере: 0 - Английский, 1 - Русский, 2 - Украинский:');
    
    if(language === '0' || language === '1' || language === '2'){
        if(language === '0'){
            keyboard.currentLang = 'en';
        } else if(language === '1'){
            keyboard.currentLang = 'ru';
        } else {
            keyboard.currentLang = 'ua';
        }
        
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