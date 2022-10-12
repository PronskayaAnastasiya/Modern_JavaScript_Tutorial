//!Свойства - геттеры и сеттеры

let user = {
    name: "Jhon",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};
Object.defineProperty(user, 'fullName',
    {
        get() {
            return `${this.name} ${this.surname};`
        },
        enumerable: true
    }
)
console.log(user.fullName);
user.fullName = "Aloce Cooper";
console.log(user.fullName);
for (let key in user) console.log(key);


let user2 = {
    get name() {

        return this.__name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log("Имя слишком короткое")
            return;
        }
        this.__name = value;
    }
};
user2.name = "Pete";
console.log(user2.__name);
console.log(user2.name.length);
user2.name = "Ol";


function user3(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, 'age',
        {
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            }
        }
    );
}

let john = new user3("John", new Date(1992, 11, 1));
console.log(john.birthday); // доступен как день рождения
console.log(john.age);      // ...так и возраст