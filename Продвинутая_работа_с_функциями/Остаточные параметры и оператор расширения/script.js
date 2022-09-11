//!Остаточные параметры и оператор расширения

//!Остаточные параметры (...)

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2, 3, 4, 5));

function sumAll(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4, 5));

function showName(firstName, lastName, ...titles) {
    console.log(firstName + ' ' + lastName);
    for (let title of titles) {
        console.log(title);
    }
}
showName("Юлий", "Цезарь", "Консул", "Император");

//!Переменная "arguments"

function showName2() {
    for (let arg of arguments) {
        console.log(arg);
    }
}
showName2("Юлий", "Цезарь", "Консул", "Император");

//!Оператор расширения
let arr = [3, 5, 1, 7, 8, 9];

console.log(Math.max(...arr));

let arr2 = [1, 14, 5, 7, 30, 22];
console.log(Math.max(...arr, ...arr2));

let arr3 = [1, ...arr, 2, ...arr2];
console.log(arr3);

let str = "Привет";
console.log(...str);

