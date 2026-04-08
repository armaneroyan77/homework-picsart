function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


const dog = new Dog();

function myInstanceOf(obj, Constructor){

    if(typeof obj !== "object") return false;

    if(obj == null) return false;

    if(typeof Constructor !== "function") return false;

    let proto = obj.__proto__;

    while(proto){

        if(proto === Constructor.prototype) return true;
        proto = proto.__proto__;

    }
    
    return false;
}


console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false

console.log(myInstanceOf(null, Object)); // false
console.log(myInstanceOf(123, Number)); // false
console.log(myInstanceOf("hello", String)); // false



