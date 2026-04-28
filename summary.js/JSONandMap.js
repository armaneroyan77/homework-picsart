
// Input
const myMap = new Map([['a', 1], ['b', 2]]);

function mapToJson(myMap){
    return JSON.stringify([...myMap]);
}

function jsonToMap(jsonStr){
    return new Map(JSON.parse(jsonStr));
}
// Expected Output

const jsonStr = mapToJson(myMap);
console.log(jsonStr); 
// '{"a":1,"b":2}' OR '[["a",1],["b",2]]' (depends on implementation)

const restoredMap = jsonToMap(jsonStr);
console.log(restoredMap); 
// Map(2) { 'a' => 1, 'b' => 2 }

