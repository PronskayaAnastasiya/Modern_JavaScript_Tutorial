/*
!Вычислить сумму чисел до данного

Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

-С использованием цикла.
-Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
-С использованием формулы арифметической прогрессии.
*/

function sumTo1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

function sumTo2(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo2(n - 1);
    }
};

function sumTo3(n) {
    return (1 + n) / 2 * n;
};

console.log(sumTo1(100));
console.log(sumTo2(100));
console.log(sumTo3(100));


/*
!Вычислить факториал

Факториал натурального числа – это число, умноженное на "себя минус один",
затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:
n! = n * (n - 1) * (n - 2) * ...*1

Примеры значений для разных n:
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

Задача – написать функцию factorial(n), которая возвращает n!, 
используя рекурсию.

P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
*/

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));

/*
!Числа Фибоначчи

Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. 
То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 
1, 1, 2, 3, 5, 8, 13, 21....

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
*/
function fib1(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib1(n - 1) + fib1(n - 2);
    }
};

function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib1(5));
console.log(fib2(5));

/*
!Вывод односвязного списка

Допустим, у нас есть односвязный список:
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
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
*/

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

function printList1(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

function printList2(list) {
    console.log(list.value);
    if (list.next) {
        printList2(list.next);
    }
}




/*
!Вывод односвязного списка в обратном порядке

Выведите односвязный список из предыдущего задания Вывод односвязного 
списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.
*/

function printReverseList1(list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}

function printReverseList2(list) {
    if (list.next) {
        printReverseList2(list.next);
    }
    console.log(list.value);
}


printReverseList1(list);
printReverseList2(list);

