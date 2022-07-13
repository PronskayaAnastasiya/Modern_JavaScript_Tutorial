//! Map и Set

//!Map-коллекция ключ/значение
let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map.get(1));
console.log(map.get("1"));
console.log(map.get(true));
console.log(map.size);

let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap);
console.log(visitsCountMap.get(john));

let visitsCountObj = {};
visitsCountObj[john] = 123;
visitsCountObj[ben] = 234;
console.log(visitsCountObj);

//!Перебор Map

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
]);
//перебор по ключам
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
};
//перебор по значениям
for (let amount of recipeMap.values()) {
    console.log(amount);
};
//перебор поэлементам в формате [ключ,значение]
for (let entry of recipeMap.entries()) {
    console.log(entry);
    console.log(typeof entry);
};
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}   ${map}`);
});

//!Object.entries:Map из Object
let obj = {
    name: "John",
    age: 30
};
let map2 = new Map(Object.entries(obj));
console.log(map2);

//!Object.fromEntries: Object из Map
let prices = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
let objPrices = Object.fromEntries(prices);
console.log(objPrices);

//!Set
//вид коллекции: множество значений без ключей, где каждоезначение может появляться только 1 раз
let set = new Set();
let vasya = { name: "Vasya" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

//считаем гостей некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(john);
set.add(mary);
set.add(john);
set.add(mary);
console.log(set);

//!Перебор объекта Set
set = new Set(["апельсин", "яблоко", "банан"]);
for (let value of set) {
    console.log(value);
};
set.forEach(value => console.log(value));
