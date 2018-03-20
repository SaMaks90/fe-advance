import {result} from './elements';

const exercise = {
    string: {
        en: 'hello, how are you'.toLocaleLowerCase(),
        ru: 'привет, как дела'.toLocaleLowerCase(),
        ua: 'привіт, як справи'.toLocaleLowerCase()
    },
    errors: 0,
    symbol: 0,
    startTimer: 0,
    currentTimer: 0,
    countKPS: function (){
      result.textContent = `Количество букв ${Math.round((this.symbol / (this.currentTimer / 1000)))} в секунду в текущем пройденном задании.`;
      if(result.textContent < localStorage.getItem('symbolInSecond') || localStorage.getItem('symbolInSecond') === null){
        localStorage.setItem('symbolInSecond', result.textContent);
      }
    }
}

export default exercise;