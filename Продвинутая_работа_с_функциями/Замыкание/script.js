//!Замыкание

//!Лексическое окружение
let name = "John";
function sayHi() {
    console.log("Hi " + name);
}
name = "Tom";
sayHi();

function makeWorker() {
    let name2 = "Pete";
    return function () {
        console.log(name2);
    };
}

let name2 = "John";
let work = makeWorker();
work();

//!Вложенные функции

function sayHiBye(firstName, lastNAme) {
    function getFullName() {
        return firstName + " " + lastNAme;
    }
    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());
}
sayHiBye("Tom", "Ford");


function User(name) {
    this.sayHi = function () {
        console.log(name);
    };
}
let user = new User("John");
user.sayHi();

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}
let counter = makeCounter();
console.log(counter());
console.log(counter());

let counter2 = makeCounter();
console.log(counter2());

//!Окружение в деталях
