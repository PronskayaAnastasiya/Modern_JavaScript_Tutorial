/*
!Связанная функция как метод

Что выведет функция?
*/

function f() {
    console.log(this); // ?
}

let user = {
    g: f.bind(null)
};

user.g();

/*
!Повторный bind

Можем ли мы изменить this дополнительным связыванием?
Что выведет этот код?
*/

function f2() {
    console.log(this.name);
}
f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
f();


/*
!Свойство функции после bind
В свойство функции записано значение. Изменится ли оно после применения 
bind? Обоснуйте ответ.
*/
function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: 'Вася'
});
console.log(bound.test);


/*
!Исправьте функцию, теряющую "this"

Вызов askPassword() в приведённом ниже коде должен проверить пароль и 
затем вызвать user.loginOk/loginFail в зависимости от ответа.
Однако, его вызов приводит к ошибке. Почему?
Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

*/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == 'rockstar') ok();
    else fail();
}

let user2 = {
    name: "Tom",

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to loge in`);
    },
}

//askPassword(user2.loginOk.bind(user2), user2.loginFail.bind(user2));


/*
!Использование частично применённой функции для логина

Это задание является немного усложнённым вариантом одного из предыдущих – 
Исправьте функцию, теряющую "this".
Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у 
него есть только одна – user.login(true/false).
Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла 
вызывать функцию user.login(true) как ok и функцию user.login(false) как 
fail?
*/

function askPassword3(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user3 = {
    name: "Jonh",
    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(user3.login.bind(user3, true), user3.login.bind(user3, false));



