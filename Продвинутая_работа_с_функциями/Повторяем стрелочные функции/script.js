//!Повторяем стрелочные функции

let group = {
    title: "Our Group",
    students: ["John", "Tom", "Maks"],
    showList() {
        this.students.forEach(
            student => console.log(this.title + ' : ' + student)
        );
    }
};

group.showList();

function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}
function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды