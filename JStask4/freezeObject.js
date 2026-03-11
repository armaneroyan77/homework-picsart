const student = {name: "name", styudentID: 100, rate: 10};

Object.freeze(student);

student.rate = 2;

console.log(student);
