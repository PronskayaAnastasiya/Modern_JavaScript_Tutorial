//Сборка мусора

let user={
    name:'John',
    age:18
}

user=null;
//name age становятся недостижимы и удаляются 

function marry(man,woman){
    woman.husband = man;
    man.wife=woman;
    return{
        father:man,
        mother:woman
    }
}

let family=marry({name:'John'},{name:'Ann'});
delete family.father;
delete family.mother.husband;
//объекта John не достижим

//Недостижимый остров
family==null;
//Объекты John Ann недостижимы, они удалятся




