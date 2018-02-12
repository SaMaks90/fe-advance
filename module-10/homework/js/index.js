const string = 'hello, how are you'.toLocaleLowerCase();
const charsArr = string.split("");
const timerOutput = document.querySelector(".timer");
const erros = document.querySelector('.exercise');
const errorsLast = document.querySelector('.exercise__last');
const result = document.querySelector('.result');
const exercise = {
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
};

const html = document.querySelector('#keyboard__template').textContent.trim();
const container = document.querySelector('.keyboard');

/*==================== Run function ====================*/
renderKeyboard(html, charsArr, container);
errorsLast.textContent = `Количество букв ${localStorage.getItem('symbolInSecond')} в секунду.`
const buttons = Array.from(document.querySelectorAll("button"));
window.addEventListener('keydown', keystroke);
/*==================== Variable ====================*/


/*==================== function ====================*/
function renderKeyboard(tpl, arr, parent) {
  const compiled = _.template(tpl);
  const result = compiled({
    data: arr
  });

  container.innerHTML = result;
}

function keystroke(event){
  if(event.key === charsArr[exercise.symbol]){
    if(exercise.startTimer === 0){
      startTimer()
    };
    let b = buttons[exercise.symbol];
    b.classList.add('keyboard__btn--active');
    exercise.symbol +=1;
    if(exercise.symbol === charsArr.length){
      stopTimer();
      erros.textContent = `${exercise.errors} ошибок.`
      exercise.countKPS();
    }
  }else if(exercise.symbol === charsArr.length) {
    stopTimer();
  }else {
    exercise.errors += 1;
  }
}

function startTimer() {
  exercise.startTimer = setInterval(()=> {
    exercise.currentTimer += 4;
      timerOutput.textContent = `${exercise.currentTimer} ms`;
  }, 1);
}

function stopTimer() {
  clearInterval(exercise.startTimer);
}