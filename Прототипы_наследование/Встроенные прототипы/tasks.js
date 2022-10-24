/*
!Добавить функциям метод "f.defer(ms)"

Добавьте всем функциям в прототип метод defer(ms), который вызывает 
функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
*/

if (!Function.prototype.defer) {
    Function.prototype.defer = function (ms) {
        setTimeout(this, ms);
    }
}

function f() {
    console.log("Hello!");
}

f.defer(1000);
f.defer(2000);
f.defer(3000);




/*
!Добавьте функциям декорирующий метод "defer()"

Добавьте всем функциям в прототип метод defer(ms), который возвращает 
обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.
*/

if (!Function.prototype.defer2) {
    Function.prototype.defer2 = function (ms) {
        let f = this;
        return function (...args) {
            setTimeout(() => f.apply(this, args), ms);
        };
    }
}
function f2(a, b) {
    console.log(a + b);
}
f2.defer2(1000)(1, 2);