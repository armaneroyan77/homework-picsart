/* 
    Given an array of objects, return an array of only ages.
    [{name: "A", age: 10}, {name: "B", age: 15}] → [10, 15]

 */


const Persons = [{name: "A", age: 10}, {name: "B", age: 15}]
const onlyAges  = Persons.map(e => e.age);
console.log(onlyAges);

