import exercise from './exercies';
import {timerOutput} from './elements';

function startTimer() {
  exercise.startTimer = setInterval(()=> {
    exercise.currentTimer += 4;
      timerOutput.textContent = `${exercise.currentTimer} ms`;
  }, 1);
}

function stopTimer() {
  clearInterval(exercise.startTimer);
}

export {startTimer, stopTimer};