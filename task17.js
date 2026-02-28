function addOnlyNums(val1, val2){

    if(typeof val1 !== "number" || typeof val2 !== "number"){
        return "invalid input";
    }

    return val1 + val2;
}

console.log(addOnlyNums("2", 4));
