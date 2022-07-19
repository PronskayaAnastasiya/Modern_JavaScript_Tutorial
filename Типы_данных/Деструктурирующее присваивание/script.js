//!Деструктурирующее присваивание

//!Деструктуризация массива
//массив с именем и фамилией
let arr = ["Ilya", "Kantor"];
//деструктирующее присваивание
//записывает firstname=arr[0] surname=arr[1]
let [firstname, surname] = arr;
console.log(firstname);
console.log(surname);

let person = "John Snow";
let [value1, value2] = person.split(" ");

let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(firstName, ' ', title);

let [a, b, c] = "abc";
console.log(a + " " + b + " " + c);

let user = {};
[user.name, user.surname] = person.split(" ");
console.log(user);

user.age = 30;
//циклпо ключамизначениям 
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
};

let userMap = new Map();
userMap.set("name", "John");
userMap.set("age", 25);
for (let [key, value] of userMap.entries()) {
    console.log(`${key}:${value}`);
};

let [q, w, ...values] = ["q", "w", "e", "r", 't', "y"];
console.log(values);

//let [cat = prompt('cat?'), dog = prompt('dog?')] = ["cat"];
//console.log(cat + " " + dog);

//!Деструктуризация объекта
let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true

};

/*
let { titl: t, width: wid, height: h } = options;
console.log(t);
console.log(wid);
console.log(h);

let fruit = {
    banana: 1,
    orange: 3,
    apple: 10
};
*/
let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    text = "Menu",
    extra
} = options;

//!Умные параметры функций
