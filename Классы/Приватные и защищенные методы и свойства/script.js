class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательное кол-во воды")
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
        console.log(`Создана кофеварка, мощность: ${power}`);
    }

    get power() {
        return this._power;
    }
}

let coffeeMachine = new CoffeeMachine(100);
//coffeeMachine.waterAmount = 200;
//coffeeMachine.waterAmount = -10;
console.log(`Мощность: ${coffeeMachine.power}`);
coffeeMachine.power = 25;



class User {
    _name = 'anonim';

    setName(value) {
        if (value.length < 4) throw Error("Слишком короткое имя");
        this._name = value;
    }

    getName() {
        return this._name;
    }
}

let tom = new User();
tom.setName("Tomas");
console.log(tom.getName());


class Auto {
    #enginePower = 100;
    get enginePower() {
        return this.#enginePower;
    }
}

class Reno extends Auto {
    method() {
        console.log(this.enginePower);
    }
}

let bmw = new Auto();
console.log(bmw.enginePower);

let reno = new Reno();
reno.method();




