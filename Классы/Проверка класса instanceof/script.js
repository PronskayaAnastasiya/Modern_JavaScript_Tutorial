class Rabbit { }
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Object);


function Dog() { };
console.log(new Dog() instanceof Dog);

let arr = [1, 2, 3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);



class Animal {
    static [Symbol.hasInstance](obj) {
        if (obj.canEat) return true;
    }
}

let obj = { canEat: true };
console.log(obj instanceof Animal);


function Cat() { };
let cat = new Cat();
Cat.prototype = {};
console.log(cat instanceof Cat);




let obj2 = {};
console.log(obj2);
console.log(obj.toString());


let objectToString = Object.prototype.toString;
let arr2 = [];
console.log(objectToString.call(arr));
console.log(objectToString.call(123));
console.log(objectToString.call(alert));
console.log(objectToString.call(null));

let user = {
    [Symbol.toStringTag]: "User"
};
console.log(objectToString.call(user));


console.log(window[Symbol.toStringTag]);
console.log(XMLHttpRequest.prototype[Symbol.toStringTag]);
console.log(objectToString.call(window));
console.log(objectToString.call(new XMLHttpRequest()));








