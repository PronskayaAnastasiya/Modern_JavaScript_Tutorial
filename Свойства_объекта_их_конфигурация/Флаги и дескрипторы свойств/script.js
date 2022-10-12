//!Флаги и дескрипторы свойств

let user = {
    name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));
Object.defineProperty(user, 'name', { writable: false });
descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));
user.name = "Tom";
console.log(user.name);



let user2 = {};
Object.defineProperty(user2, 'name',
    {
        value: "Tom",
    }
);
descriptor = Object.getOwnPropertyDescriptor(user2, 'name');
console.log(JSON.stringify(descriptor, null, 2));



let user3 = {
    name: "Maks",
    toString() {
        return this.name;
    }
};
for (let key in user3) {
    console.log(key);
}
Object.defineProperty(user3, 'toString', { enumerable: false });
for (let key in user3) {
    console.log(key);
}



descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(JSON.stringify(descriptor, null, 2));

let user4 = {};
Object.defineProperty(user4, 'name',
    {
        value: "Nikita",
        writable: false,
        configurable: false
    }
)
descriptor = Object.getOwnPropertyDescriptor(user4, 'name');
console.log(JSON.stringify(descriptor));
//Object.defineProperty(user4, "name", { writable: true });


let user5 = {};
Object.defineProperties(user5,
    {
        name: { value: "Tomas", writable: false },
        surname: { value: "Edison", writable: false }
    }
);


