function isPlain(val){

    return typeof val === "object" && val !== null && !Array.isArray(val);

}

console.log(isPlain({a: 1}));
