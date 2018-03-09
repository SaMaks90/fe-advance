/* 
- Создать базовый класс Shape, который принимает значения цвета 
и координат x и y: color, initX, initY.
- Создать методы класса Shape:
    - getColor() - возвращает значение цвета.
    - setColor(val) - получает и записывает новое значение цвета.
    - getCoords() - возвращает координаты x и y.
    - moveTo(newX, newY) - принимает 2 параметра, новые значения 
    для x и y и записывает их.
*/

class Shape {
    constructor ({color, initX, initY}){
        this.color = color;        
        this.initX = initX;
        this.initY = initY;
    }

    get Color(){
        return this.color;
    }

    set Color(value){
        this.color = value;
    }

    get Coords(){
        return `(x: ${this.initX}, Y: ${this.initY})`;
    }

    moveTo(newCoordX, newCoordY){
        this.initX = newCoordX;
        this.initY = newCoordY;
    }
}

/*
- Создать класс Rectangle который расширяет класс Shape, 
принимая значения цвета и начальных координат, как его 
родительский класс, и еще значение ширины и высоты сторон 
initWidth и initHeight:
- Создать методы класса Rectangle:
    - setWidth(newWidth) и setHeight(newHeight) - получают 
    ширину/высоту и записывают новые значения.
    - getDims() - метод который возвращает значения 
    width и height.
    - draw() - метод который имитирует рисование 
    прямоугольника используя методы Shape и Rectangle,
     выводя в консоль браузера следующей информации.
*/

class Rectangle extends Shape {
    constructor (params, {initWidth, initHeight}){
        super(params);
        this.initWidth = initWidth;
        this.initHeight = initHeight;        
    }

    set Width(value){
        this.initWidth = value;
    }

    set Height(value){
        this.initHeight = value;
    }

    get Dims(){
        return `width: ${this.initWidth}, 
            height: ${this.initHeight}`;
    }

    get draw(){
        console.log(`
        Drawing a Rectangle at:
            ${this.Coords}
        Width dimentions:
            ${this.getDims}
        Filled with color: ${this.Color}`);
    }
}

const rectangle = new Rectangle({
    color: '#fff',
    initX: 10,
    initY: 10
}, {
    initWidth: 20,
    initHeight: 20
});

rectangle.draw;

/*
- Создать класс Circle который расширяет класс Shape, принимая 
значения цвета и начальных координат, как его родительский 
класс, и еще значение радиуса initRadius:
- Создать методы класса Circle:
    - getRadius() - возвращает текущее значение радиуса.
    - setRadius(val) - получает значение и присваивает его радиусу.
    - draw() - метод который имитирует рисование круга используя 
    методы Shape и Circle, выводя в консоль браузера следующей информации.
*/

class Circle extends Shape {
    constructor(params, {initRadius = 0}){
        super(params);
        this.initRadius = initRadius;
    }

    get Radius(){
        return this.initRadius;
    }

    set Radius(value){
        this.initRadius = value;
    }

    get draw(){
        console.log(`
        Drawing a Circle at:
            ${this.Coords}
        Width dimentions:
            radius: ${this.Radius}
        Filled with color: ${this.Color}
        `);
    }
}

const circle = new Circle({
    color: '#f1f1f1',
    initX: 10,
    initY: 10,
},{
    initRadius: 100
});

circle.draw;