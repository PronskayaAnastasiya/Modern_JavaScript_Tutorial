//!Дата и время

//!Создание
let nowDate = new Date();
console.log(nowDate);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

let Jan26_2017 = new Date("2017-01-26");
console.log(Jan26_2017);

let Now02_2002 = new Date("2002.11.02");
console.log(Now02_2002);

console.log(new Date(2011, 0, 1, 0, 0, 0, 0));
console.log(new Date(2011, 0, 1));

//!Получение компонентов даты
console.log(nowDate.getUTCHours());

console.log(nowDate.getTimezoneOffset());

//!Установка компонентов даты
let today = new Date();
today.setHours(0);
console.log(today);
today.setHours(0, 0, 0, 0);
console.log(today);

//!Автоисправление даты
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
console.log(date);

date = new Date();
date.setSeconds(date.getSeconds() + 70);
console.log(date);

date.setDate(date.getDate() - 5);
console.log(date);

//!Преобразование к числу разность дат
console.log(+date);
let start = new Date();
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = new Date();
console.log(`Цикл отработал за ${end - start} миллисекунд`);

//!Date.now()
start = Date.now();
for (let i = 0; i < 1000000; i++) {
    let doSomething = i * i * i;
}
end = Date.now();
console.log(`Цикл отработал за ${end - start} миллисекунд`);


//!Бенчмаркинг
function diffSubtract(date1, date2) {
    return date2 - date1;
}
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}
function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) {
        f(date1, date2);
    }
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}
console.log('Время diffSubtract: ' + time1 + 'мс');
console.log('Время diffGetTime: ' + time2 + 'мс');
