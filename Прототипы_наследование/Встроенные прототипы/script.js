let obj = {};
console.log(obj);

console.log(obj.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__);

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);
console.dir(arr);

String.prototype.show = function () {
    console.log(this);
};

"BOOM!".show(); // BOOM!

if (!String.prototype.repeat) {
    String.prototype.repeat = function (n) {
        return new Array(n + 1).join(this);
    }
}
console.log("LA".repeat(3));

let obj2 = {
    0: "Hello",
    1: "world!",
    length: 2,
};

obj2.join = Array.prototype.join;

console.log(obj2.join(',')); // Hello,world!
