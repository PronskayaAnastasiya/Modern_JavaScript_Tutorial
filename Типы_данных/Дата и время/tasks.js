/*
!Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. 
Временная зона – местная.
*/
let Feb20_2012 = new Date(2012, 01, 20, 03, 12);
console.log(Feb20_2012);

/*
!Покажите день недели
Напишите функцию getWeekDay(date), показывающую день недели в коротком 
формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:
let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

function getWeekDay(date) {
    switch (date.getDay()) {
        case 0: return "ВС";
        case 1: return "ПН";
        case 2: return "ВТ";
        case 3: return "СР";
        case 4: return "ЧТ";
        case 5: return "ПТ";
        case 6: return "СБ";
    }
}
function getWeekDay2(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
console.log(getWeekDay(new Date()));
console.log(getWeekDay2(new Date()));

/*
!День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), 
затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
Напишите функцию getLocalDay(date), которая возвращает «европейский» день 
недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/

function getLocalDay(date) {
    switch (date.getDay()) {
        case 0: return 7;
        case 1: return 1;
        case 2: return 2;
        case 3: return 3;
        case 4: return 4;
        case 5: return 5;
        case 6: return 6;
    }
}
function getLocalDay2(date) {
    let days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
}

function getLocalDay3(date) {
    let day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day;
}

console.log(getLocalDay(new Date));
console.log(getLocalDay2(new Date));


/*
!Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было 
days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) 
вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)


/*
!Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее 
число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1));

/*
!Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала 
сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день, т.е. в ней не должно быть конкретного 
значения сегодняшней даты.
*/
