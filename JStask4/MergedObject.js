let person1 = {name: "name", age: 100, employment: "work", hobbie: "do something"};
let person2 = {name: "name", age: 100, weight: 90, employment: "work"};

let mergeObject = {};
Object.assign(mergeObject, person1, person2);
console.log(mergeObject);
