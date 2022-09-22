//!Синтаксис "new Function"

let sum = new Function('a', 'b', 'return a+b');
console.log(sum(1, 2));

let sayHi = new Function('console.log("Hello")');
sayHi();


//!Замыкание

function getFunc() {
    let value = "test";

    let func = new Function('let value = 3; console.log(value);');

    func();
}

getFunc(); 