/*
!Установка и уменьшение значения счётчика
Измените код makeCounter() так, чтобы счётчик мог увеличивать и 
устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно 
воспользоваться как замыканием, так и свойством функции. Или сделать 
два варианта решения: и так, и так.
*/

function makeCounter() {

    let count = 0;
    function counter() {
        return count++;
    };

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter.set(10));
console.log(counter.decrease());
console.log(counter.decrease());

/*
Сумма с произвольным количеством скобок
важность: 2
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/



function sum(a) {

    let sum = a;

    function f(b) {
        sum += b;
        return f;
    }
    f.toString = function () {
        return sum;
    };

    return f;

}