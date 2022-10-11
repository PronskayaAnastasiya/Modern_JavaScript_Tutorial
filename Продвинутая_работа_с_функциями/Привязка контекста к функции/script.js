//!Привязка контекста к функции

let user = {
    firstName: "Вася",
    sayHi() {
        console.log(`Привет, ${this.firstName}`);
    }
};


let boundFunc = user.sayHi.bind(user);

user = {
    sayHi() {
        console.log("Другойпользователь вsetTimeout");
    }
};



let user2 = {
    firstName: "John"
};
function printName() {
    console.log(this.firstName);
};
let fincUser = printName.bind(user2);
fincUser();

let user3 = {
    firstName: "Tom",
    say(phrase) {
        console.log(`${phrase}, ${this.firstName}`);
    }
}
let say = user3.say.bind(user3);
say("Hello");
say("Hi");

function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);
console.log(double(2));
console.log(double(4));
console.log(double(6));

function partial(func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args);
    }
};

function partial(func, ...argsBound) {
    console.log(argsBound);
    return function (...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}

// использование:
let user4 = {
    firstName: "John",
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

// добавляем частично применённый метод с фиксированным временем
user4.sayNow = partial(user4.say, new Date().getHours() + ':' + new Date().getMinutes(), 'hi');

user4.sayNow();
user4.sayNow();
user4.sayNow();
// Что-то вроде этого:
// [10:00] John: Hello!




