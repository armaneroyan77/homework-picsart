function User(name) {
 this.name = name;
}


function Car(model) {

    this.model = model;
    return { custom: "returned object" };

}

function myNew(Constructor, ...args){

    const newObject = {};
    newObject.__proto__ = Constructor.prototype;
    const result =  Constructor.call(newObject, ...args);

    if(typeof result  === "object") return result 
    return newObject;    
}

const user = myNew(User, "Alex");
console.log(user.name); // Alex
console.log(Object.getPrototypeOf(user) === User.prototype); // true
console.log(user.constructor === User); // true

const car = myNew(Car, "BMW");
console.log(car.custom); // returned object

function Empty() {}

const obj = myNew(Empty);
console.log(Object.getPrototypeOf(obj) === Empty.prototype); // true

function Test() {
 return 123;
}

const test = myNew(Test);
console.log(Object.getPrototypeOf(test) === Test.prototype); // true

