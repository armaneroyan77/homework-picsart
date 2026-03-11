let propertys = ["one", "four", "NaN", "seven", "sa", "undefined", "plusInfinity", "-0", "efdsc"];
const val = [1, 4, NaN, 7, "sa", undefined, +Infinity, -0, "efdsc"];

let object = {};

let i = 0;

for(let key of propertys){

    object[key]= val[i++];
}

console.log(object);
