// Filter users with age ≥ 18.


const Person = [{name: "Joe", age:17}, {name: "Katerina", age:27}, {name: "Kristina", age:22}];
const adultPerson = Person.filter(person => person.age >= 18);
console.log(adultPerson);
