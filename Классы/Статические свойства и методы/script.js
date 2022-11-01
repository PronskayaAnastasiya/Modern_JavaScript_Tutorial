class User {
    static staticMethod() {
        console.log(this === User);
    }
}
User.staticMethod();

User.staticMethodFunc = function () {
    console.log(User !== this);
}
User.staticMethodFunc();



class Article {
    static publisher = "Илья Кантор";//==Article.publisher="Илья Кантор"
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static createTodays() {
        return new this("Сегодняшний дайджест", new Date());
    }

    static comparere(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.comparere);
console.log(articles);

let todayArticle = Article.createTodays();
console.log(todayArticle.title);


class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} бежитсоскоростью ${this.speed}`);
    }

    static comparere(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} прячется!`)
    }
}

let rabbits = [
    new Rabbit("Белый кролик", 10),
    new Rabbit("Черный кролик", 5),
    new Rabbit("Серый кролик", 15),
    new Rabbit("Рыжий кролик", 6),
]

rabbits.sort(Rabbit.comparere);
console.log(rabbits);

