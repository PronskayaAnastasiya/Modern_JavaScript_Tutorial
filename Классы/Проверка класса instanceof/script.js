class Rabbit { };
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);

function Cat() { }
console.log(new Cat() instanceof Cat);

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






