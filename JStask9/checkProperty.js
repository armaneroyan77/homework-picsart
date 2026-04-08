const animal = { eats: true };
const dog = Object.create(animal);
dog.name = "Rex";


function checkProperty(obj, key){

    let proto = obj;
    
    while(proto){

        const keys = Object.getOwnPropertyNames(proto);
        
        for(let k of keys){

            if(k === key){
                return (proto === obj)? "own": "inherited";
            }

        }
        
        proto = proto.__proto__;
        
    }

    return "not found";
}


console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age")); // not found

const obj = Object.create(null);
obj.value = 10;

console.log(checkProperty(obj, "value")); // own
console.log(checkProperty(obj, "toString")); // not found
console.log(checkProperty({}, "toString")); // inherited

