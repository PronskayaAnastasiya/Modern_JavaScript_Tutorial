//!Глобальный объект

console.log("Hello");
window.console.log("Hi");
globalThis.console.log("Bye");

var gVar = 5;
console.log(window.gVar);
let gLet = 5;
console.log(window.gLet);

window.currentUser = {
    name: "John"
};
console.log(currentUser.name);
window.age = 18;
console.log(age);
console.log(window.age);
{
    let currentUser = {
        name: "Tom"
    }
    console.log(currentUser.name);
    console.log(window.currentUser.name);
}

//!Использование для полифилов
if (!window.Promise) {
    console.log("Ваш браузер очень старый!");
} else {
    console.log("Ваш браузер не старый!");
}
