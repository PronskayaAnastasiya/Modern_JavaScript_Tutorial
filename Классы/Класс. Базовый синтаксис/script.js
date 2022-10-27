//!Класс: базовый синтаксис

class User {
    constructor(name) {
        this.name = name
    };
    sayHi() {
        console.log(`Hi, ${this.name}`);
    };
}
let user1 = new User("Иван");
let user2 = new User();
user1.sayHi();
user2.sayHi();

//Класс это функция
console.log(typeof User);

//..или, если точнее, это метод constructor
console.log(User === User.prototype.constructor)

//Методы находятся в User.prototype
console.log(User.prototype.sayHi);

//Методы прототипа
console.log(Object.getOwnPropertyNames(User.prototype));


//ВСЕ тоже самое без конструкции класс
function User2(name) {
    this.name = name;
}
console.log(User2);
User2.prototype.sayHi = function () {
    console.log(`Привет, ${this.name}`)
};
let user3 = new User2('Джон');
user3.sayHi();

//Class Expression
let User3 = class {
    sayHi() {
        console.log('Hi');
    }
};

let User4 = class MyClass {
    sayHi() {
        console.log(MyClass);
    }
};

new User4().sayHi();


class Animal {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Имя слишком короткое");
            return;
        }
        this._name = value;
    }
}
