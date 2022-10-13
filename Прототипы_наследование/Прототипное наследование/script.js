//!Прототипное наследование

let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
};

let longEar = {
    earLength: 10,
    __proto__: rabbit,
};

rabbit.walk = function () {
    console.log("Rabbit!Bounce-bounce!");
}

rabbit.__proto__ = animal;
console.log(rabbit.jumps);
console.log(rabbit.eats);
rabbit.walk();


let user = {
    name: "Jhon",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);
admin.fullName = "Maks Barskich";
console.log(admin.fullName);


let animal2 = {
    walk() {
        if (!this.isSleeping) {
            console.log("I walk");
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit2 = {
    name: "White Rabbit",
    __proto__: animal2,
};

rabbit2.sleep();
console.log(rabbit2.isSleeping);
console.log(animal2.isSleeping);

console.log("Object.keys(rabbit2)");
console.log(Object.keys(rabbit2));

console.log("for...in");
for (let prop in rabbit2) {
    console.log(prop);
}

console.log("obj.hasOwnProperty(key)");
for (let prop in rabbit2) {
    let isOwn = rabbit2.hasOwnProperty(prop);
    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inherited: ${prop}`);
    }
}




