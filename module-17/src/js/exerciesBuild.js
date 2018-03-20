import {htmlExercies, containerExercies} from './elements';
import exercies from './exercies';
import {lang} from './lang';
import _ from '../../node_modules/lodash';

function renderExercies() {
    const compiled = _.template(htmlExercies);
    const result = compiled({
      data: exercies.string[lang.currentLang].split('')
    });
  
    containerExercies.innerHTML = result;
}

export default renderExercies;