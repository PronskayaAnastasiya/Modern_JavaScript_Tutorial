//!Класс: базовый синтаксис

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
    get name() {
        return this._name
    }
    set name(value) {
        this._name = value;
    }
}
let tom = new User("Tom");
tom.sayHi();

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHi);


function UserFunc(name) {
    this.name = name;
}
UserFunc.prototype.sayHi = function () { console.log(this.name) };
let Ivan = new UserFunc("Ivan");
Ivan.sayHi();

//User();
UserFunc();
console.log(User);


let Flower = class MyClass {
    constructor(options) {
        this.name = options.name;
        this.color = options.color;
    }

    SayName() {
        console.log(`Flower: ${this.name}   color: ${this.color}`);
    }
};
let rose = new Flower({ name: "Rose", color: "red" });
rose.SayName();
let astra = new Flower({ name: "Astra", color: "white" })
astra.SayName();


function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        };
    };
}
let Hi = makeClass("Hi");
let By = makeClass("By");
let hi = new Hi();
let hi_2 = new Hi();
hi.sayHi();
hi_2.sayHi();
console.log(Hi);