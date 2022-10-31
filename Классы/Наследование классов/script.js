class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed} м/с`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит неподвижно`)
    }
}

class Rabbit extends Animal {
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    jump() {
        console.log(`${this.name} прыгает`)
    }

    hide() {
        console.log(`${this.name} прячется`);
    }

    stop() {
        super.stop();
        this.hide();
    }
}

let catTom = new Animal("Кот Том");
catTom.run(1);
catTom.stop();

let rabbitJeck = new Rabbit("Кролик Джек");
rabbitJeck.jump();
rabbitJeck.stop();


function f(phrase) {
    return class {
        sayHi() { console.log(phrase); }
    };
}
class User extends f("Привет") { };
new User().sayHi();

