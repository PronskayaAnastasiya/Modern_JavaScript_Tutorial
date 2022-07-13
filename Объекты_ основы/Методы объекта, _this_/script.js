//Методы объекта, "this"

 /*   let user={
        name:'John',
        age:30
    };
    user.sayHi=function(){
        console.log('Hi! '+this.name);
    }
    user.sayHi();
*/
let user2={
    sayHello:function(){
        console.log('Hello!');
    },
    sayHi(){
        console.log('Hi!');
    }
}
//user2.sayHello();
//user2.sayHi();

//«this» не является фиксированным
let user = { name: "Джон" };
let admin = { name: "Админ" };
function sayHi(){
    console.log(this.name);
}
user.sayHi=sayHi;
admin.sayHi=sayHi;
//user.sayHi();
//admin.sayHi();

let user3={
    name:'Ivan',
    go:function(){
        console.log(this.name);
    }
};
//(user3.go)();

function makeUsser(){
    return{
        name:'Katya',
        ref:this
    };
};
let user5=makeUsser();
//console.log(user.ref.name);

let calculator={
    read(){
        this.a=+prompt('a?',0);
        this.b=+prompt('b?',0);
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
}
//calculator.read();
//console.log(calculator.sum());

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };
  
  