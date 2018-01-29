const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount: '',
  setCharCount: function (){
    let characters = prompt('Введите количество символов: ');
    while(this.checkPositiveInteger(characters)){
      characters = prompt('Введите количество символов: ');
    }
    this.charCount = +characters;
  },
  checkPositiveInteger: function (str){
    let num = +str;
    if(num !== parseInt(num) || num < 0){
      return true;
    }else{
      return false;
    }
  },
  task: '',
  createTask: function (){
    let arr = new Array(this.charCount);

    for(let i = 0; i < this.charCount; i++){
      arr[i] = this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    
    this.task = arr;
  },
  startTask: function (){
    let str = prompt(`Наберите строку: '${this.task.join('')}'`, 'Введите строку');
    let arr = str.split('');
    let value = 0;
    
    if(arr.length > this.task.length){
      for(let i = 0; i < arr.length; i++){
        if(arr[i] !== this.task[i]){
          value += 1;
        }
      }
    }else{
      for(let i = 0; i < this.task.length; i++){
        if(this.task[i] !== arr[i]){
          value += 1;
        }
      }        
    }
    this.userInput = str;
    this.userErrors = value;
    if(value === 0){
      console.log(`Поздравляем вы ввели правильно строку!`);
    }else{
      console.log(`Вы допустили ${value} ошибок. Попробуйте снова!`);
    }
  },
  userInput: '',
  userErrors: ''
}

/*==================== Check ====================*/
run();

/*==================== Function ====================*/
function run(){
  keyTrainer.setCharCount();
  keyTrainer.createTask();
  keyTrainer.startTask();
}