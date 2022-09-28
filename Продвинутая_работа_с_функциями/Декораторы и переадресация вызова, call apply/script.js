//!Декораторы и переадресация вызова, call/apply

//!Прозрачное кеширование

/*

function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) кешируем
console.log("Again: " + slow(1)); // возвращаем из кеша

console.log(slow(2)); // slow(2) кешируем
console.log("Again: " + slow(2)); // возвращаем из кеша
*/

//!Применение «func.call» для передачи контекста.

let worker = {

    someMethod() {
        return 1;
    },

    slow(x) {
        console.log(`Called with ${x}`);
        return x * this.someMethod();
    }
}

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }


        let result = func.call(this, x);

        cache.set(x, result);
        return result;
    };
}

console.log(worker.slow(1));
worker.slow = cachingDecorator(worker.slow);
console.log(worker.slow(2));
