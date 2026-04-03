// From users array: filter age ≥ 18, return only names.

const Person = [{name: "Joe", age:17}, {name: "Katerina", age:27}, {name: "Kristina", age:22}];
const adultPersons = Person.filter(person => person.age >= 18).map(person => person.name);
console.log(adultPersons);
