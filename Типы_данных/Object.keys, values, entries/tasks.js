/*
!Сумма свойств объекта
Есть объект salaries с произвольным количеством свойств, содержащих 
заработные платы. Напишите функцию sumSalaries(salaries), которая 
возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.

Например:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
alert( sumSalaries(salaries) ); // 650
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(salaries) {
    let totalSalary = 0;
    for (let salary of Object.values(salaries)) {
        totalSalary += salary;
    }
    return totalSalary;
}
for (let empoloyee of Object.entries(salaries)) {
    console.log(`Name: ${empoloyee[0]} Salary: ${empoloyee[1]}`);
}
console.log(`Total Salary: ${sumSalaries(salaries)}`);

/*
!Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.
P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/
let id = Symbol('id');
let user = {
    name: 'John',
    age: 30,
    [id]: 12
};

function count(obj) {
    return Object.keys(obj).length;
};

console.log(count(user));