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
  currentLang: ''
};

alphabet();

while(true) {
let language = prompt('Какой язык вы хотите использовать на тренажере: 0 - Английский, 1 - Русский, 2 - Украинский:', 0);
if(language === '0' || language === '1' || language === '2'){
  if(language === '0'){
    keyboard.currentLang = 'en';
  } else if(language === '1'){
    keyboard.currentLang = 'ru';
  } else {
    keyboard.currentLang = 'ua';
  }
  console.log(`Случайная буква из выбраного пользователем алфавита: '${getRandCharInAlph()}'.`);
  break;
}else if(language === null){
  break;
}else {
  alert('Выбран не доступный язык!');
}
}

function getRandCharInAlph(){
let arr = [keyboard.layouts[keyboard.currentLang].topRow, keyboard.layouts[keyboard.currentLang].middleRow,   keyboard.layouts[keyboard.currentLang].bottomRow];
let numRow = Math.floor(Math.random() * arr.length);
return arr[numRow][Math.floor(Math.random() * arr[numRow].length)];
}

function alphabet(){
let alphabetEn = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./'.split('');
let alphabetRu = 'йцукенгшщзхъфывапролджэячсмитьбю.'.split('');
let alphabetUa = 'йцукенгшщзхїфівапролджєячсмитьбю.'.split('');

return alphabetEn.map((elem, i, alphabetEn) => (i <= alphabetEn.indexOf(']')) ? keyboard.layouts.en.topRow.push(elem) : (i >= alphabetEn.indexOf('a') && i <= alphabetEn.indexOf('\'')) ? keyboard.layouts.en.middleRow.push(elem) : keyboard.layouts.en.bottomRow.push(elem)) 
&& alphabetRu.map((elem, i, alphabetRu) => (i <= alphabetRu.indexOf('ъ')) ? keyboard.layouts.ru.topRow.push(elem) : (i >= alphabetRu.indexOf('ф') && i <= alphabetRu.indexOf('э')) ? keyboard.layouts.ru.middleRow.push(elem) : keyboard.layouts.ru.bottomRow.push(elem)) 
&& alphabetUa.map((elem, i, alphabetUa) => (i <= alphabetUa.indexOf('ї')) ? keyboard.layouts.ua.topRow.push(elem) : (i >= alphabetUa.indexOf('ф') && i <= alphabetUa.indexOf('є')) ? keyboard.layouts.ua.middleRow.push(elem) : keyboard.layouts.ua.bottomRow.push(elem));
}