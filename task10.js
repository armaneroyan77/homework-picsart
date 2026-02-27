function types(val){
    if(val === null){
        return "null";
    }

    if(Array.isArray(val)){
        return "array";
    }

    return typeof val;
}

console.log(types(12));
console.log(types("d"));
console.log(types(null));
console.log(types(NaN));
console.log(types([2, 45, 2, "w"]));
console.log(types(Array));
console.log(types(types));
console.log(types(types()));
console.log(types(undefined));