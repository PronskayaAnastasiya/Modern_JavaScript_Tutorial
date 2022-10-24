//!Методы прототипов, объекты без свойства __proto__

let animal = {
    eats: true,
};

let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});
console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit) === animal);
//Object.setPrototypeOf(rabbit, {});

let obj = Object.create(null);
obj.__proto__ = "some value";
console.log(obj.__proto__);
console.log(obj);

