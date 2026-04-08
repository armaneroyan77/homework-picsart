function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
    return this.name;
};

const user = new User("Alex");

function getPrototypeMethods(obj){

    const proto = obj.__proto__;
    if(proto == null) return [];

    const methodNames = [];
    const keys = Object.getOwnPropertyNames(proto);

    for(let mName of keys){

        if(typeof proto[mName] === "function" && Object.prototype !== proto){
            methodNames.push(mName);
        }

    }
    
    return methodNames;

} 

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([]).includes("push")); // true

const base = {
x: 10,
print() {
    return "hello";
}
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethods(Object.create(null))); // []

    