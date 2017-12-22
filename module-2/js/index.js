/* Task one */
var resort = +prompt(`Введите число соответствующее от 1 до 3, где:
1 - город Таба;
2 - город Шарм;
3 - город Хургада.`,1);

switch(resort) {
  case 1: 
    console.log('Вы выбрали город Таба');
    break;
  case 2: 
    console.log('Вы выбрали город Шарм');
    break;
  case 3: 
    console.log('Вы выбрали город Хургада');
    break;
  default:
    console.log('Вы ввели число, варианта города которого не было в списке!');
}

/* Task two */
let resortTaba = 15;
let resortSharm = 25;
let resortHurgada = 6;

let numberParticipants = +prompt('Введите число участников группы:', 0);

if (!isNaN(numberParticipants) && numberParticipants > 0 && (parseInt(numberParticipants) === numberParticipants)) {
  
  if (numberParticipants <= resortTaba || numberParticipants <= resortSharm || numberParticipants <= resortHurgada) {
    let tabaGroup;
    let sharmGroup;
    let hurgadaGroup;
    
    if (numberParticipants <= resortTaba) {
      tabaGroup = confirm('Есть свободные места в город Таба. Желаете выбрать эту группу?');
      if (tabaGroup == true) {
        resortTaba -= numberParticipants;
        console.log(`Осталось мест в группе Таба - ${resortTaba}`);
      }
    }
    
    if (numberParticipants <= resortSharm && tabaGroup === false) {
      sharmGroup = confirm('Есть свободные места в город Шарм. Желаете выбрать эту группу?');
      if (sharmGroup == true) {
        resortSharm -= numberParticipants;
        console.log(`Осталось мест в группе Шарм - ${resortSharm}`);
      }
    } 
    
    if (numberParticipants <= resortHurgada && sharmGroup === false) {
      hurgadaGroup = confirm('Есть свободные места в город Хургада. Желаете выбрать эту группу?');
      if (hurgadaGroup == true) {
        resortHurgada -= numberParticipants;
        console.log(`Осталось мест в группе Хургада - ${resortHurgada}`);
      }
    }
  } else {
    alert('Мест нет!');
  }
} else {
  alert('Вы ввели неправильное число участников группы. Попробуйте повторить попытку снова.')
}