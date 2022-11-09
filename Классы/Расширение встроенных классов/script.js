//!Расширениевстроенныхклассов

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    static get [Symbol.species]() {
        return Array;
    }
}


let arr = new PowerArray(1, 2, 3, 4, 5);
console.log(arr.isEmpty());


let filteredArr = arr.filter(item => item >= 3);
console.log(filteredArr);
//console.log(filteredArr.isEmpty());


