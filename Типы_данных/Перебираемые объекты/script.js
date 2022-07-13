//*Перебираемые объекты

//!Symbol.iterator
let range = {
    from: 1,
    to: 5
};
//Мыхотим чтобы работал for..of:
//for(let num of range)...num=1,2,3,4,5

//1.вызов for..of сначалавызывает эту функцию
range[Symbol.iterator] = function () {
    //...она возвращает объект итератора
    //2.Далее for..of работает толькос этим итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,
        //3. next() вызывается га каждой итерации цикла for..of
        next() {
            //4. он должен вернуть значение в виде объекта {done:..., value:...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};
for (let num of range) {
    console.log(num);
};

//!Строка-перебираемый объект
for (let char of '𝒳😂') {
    console.log(char);
}

//!Явный вызов итератора
let str = "Hello";
//Делает то же самое, что и
//for(let char of str){console.log(char)};
let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

//!Итерируемые объекты и псевдомассивы
//строки итерируемыи являются псевдомассивами
//объекткоторыйявляется псевдомассивом, но его нельзяитерировать:
let arrayLike = {//естьиндексыи свойство length
    0: "Hello",
    1: "World",
    length: 2
};

//!Array.from
let arr = Array.from(arrayLike);
console.log(arr);
arr = Array.from(range);
console.log(arr);

//синтаксис:
//*Array.from(obj[,mapfn, thisArg]);

//возводим каждоечисло вквадрат
arr = Array.from(range, num => num * num);
console.log(arr);

//разбиваем строку на массив её элементов
console.log(Array.from(str));

str = '𝒳😂𩷶';
function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}
console.log(slice(str, 1, 3));
console.log(str.slice(1, 3));