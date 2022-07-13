//!перевидите текст вида border-left в borderLeft
function camelize(str) {
    let arr = str.split('-');
    arr = arr.filter(item => {
        return (item != null && item != '');
    });
    arr = arr.map((item, index) => {
        if (index == 0) return item;
        return item[0].toUpperCase() + item.slice(1);
    });
    return arr;
}

//!Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//!Функция должна возвращать новый массив и не изменять исходный.
function filterRange(arr, a, b) {
    let arr2 = [];
    arr.forEach(element => {
        if (element >= a && element <= b) {
            arr2.push(element);
        }
    });
    return arr2;
}

function filterRange2(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

//!Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr
//!и удаляет из него все значения кроме тех, которые находятся между a и b.
//!То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//!Функция должна изменять принимаемый массив и ничего не возвращать.
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
};

//!Сортировать по убыванию
let arr1 = [1, 2, 15];
arr1.sort(function (a, b) { return b - a; });
//onsole.log(arr1);

//!Скопировать и отсортировать массив
function copySorted(arr) {
    return arr.slice().sort();
}
//let arr = ["HTML", "JavaScript", "CSS"];
//let sorted = copySorted(arr);
//console.log(sorted);
//console.log(arr);

//!Расширяемый калькулятор который принимает строку
function Calculator() {
    this.metods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {
        let split = str.split(' ');
        let a = +split[0];
        let op = split[1];
        let b = +split[2];

        if (!this.metods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.metods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.metods[name] = func;
    };
}
let calc = new Calculator();
//console.log(calc.calculate("3 + 4"));

//!Трансформировать массив объектов в массив имен
//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 28 };
//let users = [vasya, petya, masha];
function usersName(arr) {
    return arr.map(user => user.name);
};
//let names = usersName(users);
//console.log(names);


//!Трансформировать в объекты
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [vasya, petya, masha];
let userMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
console.log(userMapped);
*/

//!отсортировать пользователей по возрастанию
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [vasya, petya, masha];

function sortFunc(a, b) {
    if (a.age > b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
};
function sortByAge(arr) {
    arr.sort(sortFunc);
};
sortByAge(arr);
//console.log(arr);

//!Перемешайте массив
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let arr2 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < 5; i++) {
    shuffle(arr2);
    //console.log(arr2);
}

//!Получить средний возраст
function getAverageAge(user) {
    let age = 0;
    user.forEach(element => {
        age += element.age;
    });
    return age / user.length;
};
console.log(arr);
console.log(getAverageAge(arr));

function getAverageAge2(user) {
    return user.reduce((previousValue, user) => previousValue += user.age, 0) / user.length;
}
console.log(getAverageAge2(arr));


//!Оставить уникальные элементымассива
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); 