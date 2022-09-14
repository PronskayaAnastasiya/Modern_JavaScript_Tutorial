//!Устаревшее ключевое слово "var"

function sayHi() {
    var pharse = "Hi";
    console.log(pharse);
}
sayHi();
//console.log(pharse);

//!Для «var» не существует блочной области видимости
if (true) {
    var test = true;
    let test2 = true;
}
console.log(test);
//console.log(test2); Ошибка

for (var i = 0; i < 10; i++) {

}
console.log(i);

//!«var» допускает повторное объявление
var user = "Pete";
var user = "Tom";
console.log(user);

//!«var» обрабатываются в начале запуска функции
function sayHello() {
    hello = "Hello";
    console.log(hello);
    var hello;
}
sayHello();