const Person = [

    {name: "Anna", age: 17},
    {name: "John", age: 20}

]

const adultPerson = Person.filter(person => person.age >= 18);
adultPerson.forEach(p => console.log(`${p.name} is ${p.age} years old`));

