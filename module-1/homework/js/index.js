const topRow = 'qwertyuiop\[\]\\';
const averageRow = 'asdfghjkl;\'';
const lowerRow = 'zxcvbnm,./';

const lengthTopRow = topRow.length;
const lengthAverageRow = averageRow.length;
const lengthLowerRow = lowerRow.length;

console.log(`Верхний ряд символов: ${topRow}. Первый символ - ${topRow.charAt(0)}, последний символ - ${topRow.charAt(topRow.length - 1)}.
Средний ряд символов: ${averageRow}. Первый символ - ${averageRow.charAt(0)}, последний символ - ${averageRow.charAt(averageRow.length - 1)}.
Нижний ряд символов: ${lowerRow}. Первый символ - ${lowerRow.charAt(0)}, последний символ - ${lowerRow.charAt(lowerRow.length - 1)}.
Поиск символов \[ и \]:
- Верхний ряд символов: ${topRow.indexOf('[')} и ${topRow.indexOf(']')}
- Средний ряд символов: ${averageRow.indexOf('[')} и ${averageRow.indexOf(']')}
- Нижний ряд символов: ${lowerRow.indexOf('[')} и ${lowerRow.indexOf(']')}
Если -1 тогда символ не найден.`);