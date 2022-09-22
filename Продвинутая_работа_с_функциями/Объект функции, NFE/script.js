//!Объект функции, NFE

//!Свойство «name»

function sayHi() {
    console.log("Hi!");
}
let sayBye = function () {
    console.log("Bye");
}
console.log(sayHi.name);
console.log(sayBye.name);

//!Свойство «length»
function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }
console.log(f1.length);
console.log(f2.length);
//console.log(f3.length);

function ask(question, ...handlers) {
    let isYes = confirm(question);
    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }
}
ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));