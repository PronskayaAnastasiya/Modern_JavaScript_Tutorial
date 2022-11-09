let sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin,

    sayHi() {
        super.say(`Привет, ${this.name}`);
    },
    sayBi() {
        super.say(`Пока, ${this.name}`);
    }
};



class Person { }

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);
new User("Вася").sayBi();



let eventMixin = {
    on(eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },


    off(eventName, handler) {
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },


    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return;
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }

}

class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on("select", value => console.log(`Выбранное значение: ${value}`));
menu.choose("123");


