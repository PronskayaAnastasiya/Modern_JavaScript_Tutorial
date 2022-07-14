//!Weak и WeakSet
let weakMap = new WeakMap();
let john = { name: "John" };
weakMap.set(john, '...');
//объект доступен, переменная john - этоссылка на него
//перепишем ссылку
john = null;
//объектбудет удален из пямяти
let tom = { name: "Tome" };
let array = [tom];
tom = null;
//объект tom хранится в массиве,поэтому он небудет удален сборщиком мусора


//если мы используем объект какключ в Map, то до тех пор покасуществует Map,
//также будет существовать и этот объект.Например:

let max = { name: "Max" };
let map = new Map();
map.set(max, "...");
weakMap.set(max, '...');
max = null;//перезаписываем ссылкунаобъект
//объект max сщхранен внутри объекта Map,
//он доступен через map.keys();
console.log(map);


//!WeakMap

let obj = {};
weakMap.set(obj, "ok");//работает(объект в кач-ве ключа)
//*weakMap.set("test", "Whoops");//Ошибка,тюк test не объект

let piter = { name: "Piter" };
weakMap.set(piter, "...");
console.log(weakMap);
piter = null;
console.log(weakMap); //объект piter удален изпамяти


//!Пример: дополнительные данные

//!Применение для кеширования

//!WeakSet
let visitedSet = new WeakSet();

let kolya = { name: "Kolya" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(kolya);
visitedSet.add(pete);
visitedSet.add(kolya);


console.log(visitedSet.has(kolya));
console.log(visitedSet.has(mary));

kolya = null;
console.log(visitedSet.has(kolya));


