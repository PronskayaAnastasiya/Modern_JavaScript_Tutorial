/*
!Изменяем "prototype"

В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся 
изменить его прототип.
*/

function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

//Rabbit.prototype = {};
//console.log(rabbit.eats);   //true

//Rabbit.prototype.eats = false;
//console.log(rabbit.eats);  //false

//delete rabbit.eats;
//console.log(rabbit.eats); //true

delete Rabbit.prototype.eats;
console.log(rabbit.eats); // undefined



/*
!Создайте новый объект с помощью уже существующего

Представьте, что у нас имеется некий объект obj, созданный
функцией-конструктором – мы не знаем какой именно, но хотелось бы
создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();

Приведите пример функции-конструктора для объекта obj, с которой такой
вызов корректно сработает. И пример функции-конструктора, с которой такой
код поведёт себя неправильно.
 */

//?Можем.

function User(name) {
    this.name = name;
}
let user1 = new User("Jhon");
let user2 = new user1.constructor("Tom");

console.log(user2.name);

function User2(name) {
    this.name = name;
}
User2.prototype = {};
let user3 = new User2("Maks");
let user4 = new user3.constructor("Alex");
console.log(user4.name);

