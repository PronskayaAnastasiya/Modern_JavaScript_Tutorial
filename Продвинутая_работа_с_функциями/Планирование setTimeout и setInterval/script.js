//!Планирование: setTimeout и setInterval


//!setTimeout

function sayHi() {
    console.log("hi");
}

function sayHi_2(pharse, who) {
    console.log(pharse + " " + who);
}

//setTimeout(sayHi, 5000);
//setTimeout(sayHi_2, 5000, "Привет", "Джон");
//setTimeout('console.log("Hi")', 1000);
//setTimeout((name) => console.log("Bye " + name), 2000, "Tom");

//!отмена через clearTimeout

let timerId = setTimeout(() => console.log("ничего не происходит"), 3000);
console.log(timerId);
clearTimeout(timerId);
console.log(timerId);

//!setInterval
/*
let timerId_2 = setInterval(() => console.log("tick"), 2000);
function stop() {
    clearInterval(timerId_2);
    console.log('stop');
}
setTimeout(stop, 10000);
*/


//!Вложенный setTimeout
/*
let timerId_3 = setTimeout(function tick() {
    console.log('tick');
    timerId_3 = setTimeout(tick, 2000);
}, 2000);
*/

/*
let delay = 5000;
let timerId_4 = setTimeout(function request() {
    !отправка запроса
    if (ошибка запроса ) {
        delay *= 2;
    }
    timerId_4 = setTimeout(request, delay);
}, delay);
*/

/*
let k = 2;
setInterval(function () {
    console.log(k);
}, 100);

let i = 1;
setTimeout(function run() {
    console.log(i);
    setTimeout(run, 100);
}, 100);
*/

//!setTimeout с нулевой задержкой
setTimeout(() => console.log("Мир"), 0);
console.log("Привет");

let start = Date.now();
let times = [];
/*
setTimeout(function run() {
    times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова

    if (start + 100 < Date.now()) console.log(times); // показываем задержку через 100 мс
    else setTimeout(run); // если нужно ещё запланировать
});

 пример вывода:
 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100
*/






