//Методымассивов

//*!Добавление/удаление элементов
//**arr.push(...items)-добавляет элементы в конец
let mas1 = [1, 2, 3, 4];
mas1.push(5);
//console.log(mas1);
mas1.push(6, 7, 8);
//console.log(mas1);
mas1.push('nine');
//console.log(mas1);

//**arr.pop()-извлекает элемент изконца
let a = mas1.pop();
let b = mas1.pop();
//console.log(a);
//console.log(b);
//console.log(mas1);

//**arr.shift()-извлекаетэлемент из начала;
//console.log(mas1);
a = mas1.shift();
b = mas1.shift();
//console.log(a);
//console.log(b);
//console.log(mas1);

//**arr.unshift(...items)-добавляет элементывначало
//console.log(mas1);
mas1.unshift(true, 'hello', 10);
//console.log(mas1);


//**arr.splice(index[,deleteCount,elem1,...,elemN])-начинаяспозиции index
//удаляет deleteCountэлементови вставляет elem1,...,elemN на их место
//Возвращает массив из удаленных элементов
let arr1 = ['Я', 'изучаю', 'JavaScript'];
//console.log(arr1);
let arr2 = arr1.splice(1, 1);
//console.log(arr1);
//console.log(arr2);

arr1 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
//console.log(arr1);
arr2 = arr1.splice(0, 3, 'Давай', 'танцевать');
//console.log(arr1);
//console.log(arr2);

arr1 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
//console.log(arr1);
arr1.splice(2, 0, 'сложный', 'язык');
//console.log(arr1);


//**arr.slice([start],[end])-возврвщает новый массив, в который копирует элементы
//начинаяс индекса start и до end(не включая end).Оба индексамогут бытьотрицательны
arr2 = arr1.slice(0, 4);
//console.log(arr1);
//console.log(arr2);
arr2 = arr1.slice();//создаст копию
//console.log(arr2);


//**arr.concat(arg1arg2,...)-методсоздает новый массивБ в который копирует данные издругих массивов 
arr1 = [1, 2];
//console.log(arr1);
//console.log(arr1.concat([3, 4]));
//console.log(arr1.concat([3, 4], [5, 6]));
//console.log(arr1.concat([3, 4], 5, 6));
//console.log(arr1);
let arrayLike = {
    0: "что-то",
    length: 1
};
//console.log(arr1.concat(arrayLike));
arrayLike[1] = "ещё";
arrayLike[Symbol.isConcatSpreadable] = true;
arrayLike.length = 2;
//console.log(arr1.concat(arrayLike));

//*!Перебор:forEach
//**arr.foreach(function(item,index,array){
// ....делать что-то с item
//});
["Bilbo", "Gandalf", "Nazgul"].forEach((item) => {
    //console.log(item);
});
arr1.forEach((item, index, array) => {
    //console.log(`${item} имеет позицию ${index} в ${array}`);
});


//*!Поискв массиве
//indexOf/lastIndexOf и includes

//**arr.indexOf(item,from)-ищет item начиная c индекса from, и возвращает
//индекс на котором был найден искомый элемент,иначе -1

//**arr.lastIndeOf(item,from)-тоже самое, что и indexOf,ноищет справа налево*/

//**arr.includes(item,from)-ищет item, начиная синдекса from и возвращает
//**true если поиск успешен */

arr1 = [false, 1, 0, false];
//console.log(arr1.indexOf(0));
//console.log(arr1.indexOf(false));
//console.log(arr1.lastIndexOf(false));
//console.log(arr1.indexOf(5));
//console.log(arr1.includes(false));
//console.log(arr1.includes(true));


//find и findindex
//*let result =  arr.find(function(item,index,array)){
//*если true - возвращается текущий элемент и перебор прерывается
//*если все итерации ложные, то возвращает undefined   
//*}
let users = [
    { id: 1, age: 14, name: "Вася" },
    { id: 2, age: 20, name: "Петя" },
    { id: 3, age: 17, name: "Маша" },
    { id: 3, age: 21, name: "Cаша" }
];
let user = users.find(item => item.id == 1);
//console.log(user.name);

//*let result = arr.filter(function(item,index,array){
//*если true - элемент добавляется к результату, и перебор продолжается
//*возвращается пустой массив в случае, если ничего не найдено
//*});
let adultUsers = users.filter(item => item.age >= 18);
//console.log(adultUsers);

//!Преобразование массива

//*let result = arr.map(function(item,index,array){
//*возвращаетновоезначение вместо элемента
//*});
let lengths = ['Nasta', 'Liza', 'Kolya'].map(item => item.length);
//console.log(lengths);
lengths = ['Nasta', 'Liza', 'Kolya'].map((item, index) => item = index);
//console.log(lengths);

//*arr.sort-сортируетмассив на месте, меняя в немпорядок элементов
arr1 = [1, 2, 15, 22, 3];
//console.log(arr1.sort());//сортирует как строки!!!!1<15<2<22<3
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
};
//console.log(arr1.sort(compareNumeric));
arr1.sort((a, b) => a - b);
//console.log(arr1);

//*arr.reverse-меняет порядок элементов в arr на обратный
//console.log(arr1);
//console.log(arr1.reverse());

//*split и join
//*str.split(delim)- разбивает строку на массив по разделению delim
let names = 'Nastya, Kolya, Liza, Vasya';
let arrNames = names.split(',');
for (let name of arrNames) {
    //console.log(name);
}
let arrNames2 = names.split(',', 2);
//console.log(arrNames2);
let arrNames3 = names.split('a');
//console.log(arrNames3);
//console.log(names.split(''));

//*arr.join(glue)-создает строку из элементов arr, вставляя glue между ними
//console.log(arrNames);
//console.log(arrNames.join('; '));

//*reduce/reduceRight
//*let value = arr.reduce(function(previosValue,item,index,array)){
//*...
//*},[inital]);
//
//*previousValue-результат предыдущего вызова этой функции, равен inital при первом вызове
arr1 = [1, 2, 3, 4, 5];
let result = arr1.reduce((sum, current) => sum + current, 0);
console.log(result);

//!Array.isArray
//console.log(typeof {});
//console.log(typeof []);

//console.log(Array.isArray({}));
//console.log(Array.isArray([]));

//! большинство методов поддерживают thisArg
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};
let users2 = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 },
    { age: 25 }
];

//найти пользователей для которых army.canJoin возвращает true
let soldiers = users2.filter(army.canJoin, army);
//console.log(soldiers);
