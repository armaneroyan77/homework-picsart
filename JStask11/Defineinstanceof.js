const OddValidator = {};

OddValidator[Symbol.hasInstance] = function(val){
    if(typeof val !== "number") return false;
    if(val % 2 === 1) return true;
    return false;
}

console.log(5 instanceof OddValidator);
console.log("7" instanceof OddValidator);
console.log(10 instanceof OddValidator);

