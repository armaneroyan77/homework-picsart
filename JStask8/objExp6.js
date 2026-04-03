function getData(){
    return `Name: ${this.name}\nPoint: ${this.points}`;
}

const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };

console.log(getData.call(p1));
console.log(getData.call(p2));

