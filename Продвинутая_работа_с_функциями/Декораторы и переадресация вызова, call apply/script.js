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
    }
}

slow = cachingDecorator(slow);
*/

//!Применение «func.call» для передачи контекста.

let worker2 = {
    someMethod() {
        return 2;
    },
    slow(x) {
        console.log("Called with " + x);
        return x * this.someMethod();
    }
};

function cachingDecorator2(func) {
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

worker2.slow = cachingDecorator2(worker2.slow);

function sayHi() {
    console.log(this.name);
}
let user = { name: "Tom" };
let admin = { name: "John" };




//!Переходим к нескольким аргументам с «func.apply»

let worker3 = {
    slow(min, max) {
        console.log(`Called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator3(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key);
        }
        let result = func.call(this, ...arguments);
        cache.set(key, result);
        return result;
    }
}

function hash(args) {
    return args[0] + ',' + args[1];
}

worker3.slow = cachingDecorator3(worker3.slow, hash);
console.log(worker3.slow(3, 5)); // работает
console.log("Again " + worker3.slow(3, 5)); // аналогично (из кеша)


//!Заимствование метода

function hash4(args) {
    return [].join.call(arguments);
}


