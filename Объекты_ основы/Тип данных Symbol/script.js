//Тип данных Symbol


let id2=Symbol('id');


let user={
    name:'Vasyua',
    age:30,
    [id]:123
};
/*let id=Symbol('id');
user[id]=1;
console.log(user[id]);*/
for(let key in user){
    console.log(key);
}

