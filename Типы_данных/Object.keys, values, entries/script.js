//!Object.keys, values, entries

let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 12
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for (let value of Object.values(user)) {
    console.log(value);
};

//!Трансформации объекта
let prices = {
    banana: 1,
    orange: 2,
    meat: 4
};
let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);
console.log(doublePrices);