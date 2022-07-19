/*
!Деструктурирующее присваивание

У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin 
(false, если нет такого свойства)
Пример переменных после вашего присваивания:

*/

let user = {
    firstname: "John",
    years: 30
};
let { firstname, years: age, isAmin = false } = user;
console.log(firstname);
console.log(age);
console.log(isAmin);

/*
!Максимальная зарплата
 нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого 
высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, 
чтобы перебрать пары ключ/значение.
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}

console.log(topSalary(salaries));

