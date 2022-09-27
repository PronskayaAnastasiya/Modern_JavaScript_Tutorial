/*
!Вывод каждую секунду

Напишите функцию printNumbers(from, to), которая выводит число каждую 
секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout.
*/

/*
let timerId = setTimeout(function printNumbers(from, to) {
    if (from == to) {
        clearTimeout(timerId);
    } else {
        console.log(from);
        from++;
        timerId = setTimeout(printNumbers, 1000, from, to);
    }
}, 1000, 1, 10)
*/

function printNumbers_sT(from, to) {
    setTimeout(function print() {
        if (from != to) {
            console.log(from++);
            setTimeout(print, 1000);
        }
    }, 1000)
}

function printNumbers_sV(from, to) {
    let timerId = setInterval(function print() {
        if (from == to) {
            clearInterval(timerId);
        } else {
            console.log(from++);
        }
    }, 1000)
}

//printNumbers_sT(1, 10);
//printNumbers_sV(1, 10);


/*
!Что покажет setTimeout?

В приведённом ниже коде запланирован вызов setTimeout, а затем 
выполняется сложное вычисление, для завершения которого требуется более 
100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?
*/

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
    i++;
}
