//Конструкторы, создание объектов через "new"

function User(name){
    this.name=name;
    this.isAdmin=false;
    this.sayHi=function(){
        console.log(`My name is ${this.name}`);
    }
}

let user=new User('Vasya');
console.log(user);

function Test(){
    console.log(new.target);
}
Test();
new Test();

function Calculator(){
    this.read=function(){
        this.a=+prompt('a?',0);
        this.b=+prompt('a?',0);
    };
    this.sum=function(){
        return this.a+this.b;
    };
    this.mul=function(){
        return this.a*this.b;
    }
};

let calculator=new Calculator();
/*calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());*/

function Accumulator(startingValue){
    this.value=startingValue;
    this.read=function(){
        this.value+=+prompt('value?',0);
    }
}
let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
console.log(accumulator.value); // выведет сумму этих значений