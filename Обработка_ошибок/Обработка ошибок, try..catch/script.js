//!Обработка ошибок, "try..catch"

//!try..catch работает синхронно
/*
try {
    setTimeout(function () {
        noSuchVariable;
    }, 1000)
} catch (err) {
    console.log('Обработчик ошибок')
}
*/


setTimeout(function () {
    try {
        noSuchVariable;
    } catch (err) {
        console.log("Error");
    }
}, 0);


//!Объект ошибки

try {
    lalal;
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
    console.log(err);
}

//!Использование «try…catch»

let json = '{"name":"Jhon", "age":30}';
let user = JSON.parse(json);
console.log(user.name);
console.log(user.age);

let json2 = '{некорректный JSON}';
try {
    let user2 = JSON.parse(json2);
    console.log(user2.name);
} catch (err) {
    console.log('Извините в данных ошибка, мы попробуем получить их ещё раз.');
    console.log(err.name);
    console.log(err.message);
}

//!Генерация собственных ошибок

//Оператор «throw»
//throw <объект ошибки>

let error = new Error("Ого, ошибка! о_O");
console.log(error.name);
console.log(error.message);

/*let json3 = '{"age":30}';
try {
    let user3 = JSON.parse(json3);
    console.log(user3.name);
} catch (err) {
    console.log('не выполнится');
}*/

let json3 = '{"age":30}';
try {
    let user3 = JSON.parse(json3);
    if (!user3.name) {
        throw new SyntaxError("Данные неполны: нет имени")
    }
    console.log(user3.name);
} catch (err) {
    console.log(err);
}


//!Проброс исключения

let json4 = '{"age":30}';

/*
try {

    let user4 = JSON.parse(json4);
    if (!user4.name) {
        throw new SyntaxError("Данные неполны: нет имени")
    }
    blablabla;
    console.log(user3.name);

} catch (err) {
    if (e.name == 'SyntaxError') {
        console.log(err);
    } else {
        throw e;
    }
}
*/

function readData() {
    let json = '{ "age": 30 }';
    try {
        blablabla()//ошибка!
    } catch (e) {
        if (e.name != 'SyntaxError') {
            throw e;
        }
    }
}

try {
    readData();
} catch (err) {
    console.log("Внешний catch поймал: " + err);
}


//!try…catch…finally
try {
    console.log('try');
    //if (confirm('Сгенерировать ошибку?')) DAD_CODE();
} catch (err) {
    console.log('catch');
} finally {
    console.log('finally');
}


let num = +prompt("Введите положительное число", 35);
let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Должнобыть целое неотрицательное число");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();
try {
    result = fib(num);
} catch (e) {
    result = 0;
} finally {
    diff = Date.now() - start;
}
console.log(result || "Возникла ошибка");
console.log(`Выполнение заняло ${diff}ms`);

//!Глобальный catch
/*
<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n В ${line}:${col} на ${url}`);
  };

  function readData() {
    badFunc(); // Ой, что-то пошло не так!
  }

  readData();
</script>
*/

