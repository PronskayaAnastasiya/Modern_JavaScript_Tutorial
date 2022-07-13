let user={
    name:'John',
    money:1000,
    [Symbol.toPrimitive](hint){
        alert(`hint: ${hint}`);
        return hint=="string" ? `{name: "${this.name}"}` : this.money;
    }    
};

let user2={
    name:'Tom',
    money:1000,
    toString(){
        return `{name: "${this.name}"}`;
    },
    valueOf(){
        return this.money;
    }
}

console.log(user2);
console.log(+user2);
console.log(user2 + 500);