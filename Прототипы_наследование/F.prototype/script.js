//!F.prototype

let animal = {
    eats: true,
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");//raabb
console.log(rabbit.name + " " + rabbit.eats);

function Cat(nme) {

}
let cat = new Cat();
console.log(Cat.prototype.constructor == Cat);
console.log(cat.constructor == Cat);

function Dog(name) {
    this.name = name;
    console.log(name);
}
let dog = new Dog("Sharik");
let dog2 = dog.constructor("Bobik");

