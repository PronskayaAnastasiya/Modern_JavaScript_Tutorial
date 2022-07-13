//Kопирование объектов и ссылки
let user={
    name:'John',
    age:18
}
let user2=user;
user2.name='Tom';
//console.log(user.name);

let a ={};
let b = a;
//console.log(a==b);
//console.log(a===b);

let c={};
//console.log(a==c);

let clone={};
for(let key in user){
    clone[key]=user[key];
}
//console.log(clone.name);
//console.log(clone==user);

let user3={};
Object.assign(user3,user);
//console.log(user3);
//console.log(user3==user);

let user4={
    name:'Ivan',
    sizes:{
        height:182,
        width:50
    }
}
console.log(user4.sizes.height);
