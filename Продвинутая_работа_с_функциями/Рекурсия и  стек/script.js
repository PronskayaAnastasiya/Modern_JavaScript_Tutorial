//!Два способа мышления

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function pow2(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow2(x, n - 1);
    }
};

console.log(pow(2, 3));
console.log(pow2(2, 3));

//!Рекурсивные обходы

let compsny = {
    sales: [{
        name: "John",
        salary: 1000
    }, {
        name: "Alice",
        salary: 600
    }],
    development: {
        sites: [{
            name: "Petr",
            salary: 2000
        }, {
            name: "Alex",
            salary: 1000
        }],
        internals: [{
            name: "Jack",
            salary: 1300
        }]
    }
};

function sumSalaries(departament) {
    if (Array.isArray(departament)) {
        return departament.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(departament)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
};

console.log(sumSalaries(compsny));

//!Связанный список

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

console.log(list);