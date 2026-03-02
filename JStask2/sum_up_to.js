function sumUpTo(val){
    let sum = 0;
    for(let n = 1; n <= val; ++n){
        sum += n;
    }
    return sum;
}

console.log(sumUpTo(10));
console.log(sumUpTo(5));
console.log(sumUpTo(1));
