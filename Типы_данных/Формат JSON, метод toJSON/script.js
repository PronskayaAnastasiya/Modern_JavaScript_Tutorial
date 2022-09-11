//!Формат JSON, метод toJSON

let user = {
    name: "John",
    age: 30,
    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};


//!JSON.stringify

let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
let json_john = JSON.stringify(student);
console.log(json_john);
console.log(typeof json_john);
console.log(student);


console.log(JSON.stringify(1));
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3, 4]));
console.log(JSON.stringify(null));

let user2 = {
    sayHi() {
        //будет пропущенно
        console.log("Hello!");
    },
    [Symbol("id")]: 123,//также будет пропущено
    something: undefined//будет пропущено
};
console.log(JSON.stringify(user2));

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

console.log(JSON.stringify(meetup));

let room = {
    number: 24
};

let meetup2 = {
    title: "Conference2",
    participants: ["max", "alex"]
};

meetup2.place = room;
room.occupieBy = meetup2;
//JSON.stringify(meetup2); ошибка


//!Исключаем и преобразуем: replacer

let room3 = {
    number: 23
};

let meetup3 = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup ссылается на room
};

room3.occupieBy = meetup3;
console.log(JSON.stringify(meetup3, ['title', 'participants', 'place', 'name', 'number']));

console.log(JSON.stringify(meetup3, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupieBy') ? undefined : value;
}));


//!Форматирование: space
let user3 = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};

console.log(JSON.stringify(user3, null, 2));


//!Пользовательский toJSON

let room4 = {
    number: 25,
    toJSON() {
        return this.number;
    }
};

let meetup4 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room4
};

console.log(JSON.stringify(meetup4));

console.log(JSON.stringify(room4));

//!JSON.parce

let numbers = "[1, 2, 3, 4, 5]";
numbers = JSON.parse(numbers);
console.log(numbers);


let user5 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user5 = JSON.parse(user5);
console.log(user5);
console.log(user5.name);


//!Использование reviver

// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup5 = JSON.parse(str, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
console.log(meetup5.date.getDate());

