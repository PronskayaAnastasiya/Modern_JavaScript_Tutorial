//!Фильтрация уникальных элементов массива
/*
  Допустим, у нас есть массив arr.
  Создайте функцию unique(arr), которая вернёт массив уникальных, 
  не повторяющихся значений массива arr.
*/
function unique(arr) {
    let set = new Set()
    for (let value of arr) {
        set.add(value);
    }
    return Array.from(set);
}
function unique2(arr) {
    return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));
console.log(unique2(values));

//!Отфильтруйте анаграммы
/*
  Напишите функцию aclean(arr), которая возвращает
  массив слов, очищенный от анаграмм.
*/
function aclean(arr) {
    let obj = {};
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        obj[sorted] = word;
    }
    return Object.values(obj);
};
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

//!Перебираемые ключи
/* 
  Мы хотели бы получить массив ключей map.keys() в переменную  и далее 
  работать с ними, например, применить метод .push. Но это не выходит:

  let map = new Map();
  map.set("name", "John");
  let keys = map.keys();   Error: keys.push is not a function 
                           Ошибка: keys.push -- это не функция
  keys.push("more");
*/
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);
