function isfalsy(val){
    return !val;
}

console.log(isfalsy(0));
console.log(isfalsy(-0));
console.log(isfalsy(+0));
console.log(isfalsy(NaN));
console.log(isfalsy(null));
console.log(isfalsy(undefined));
console.log(isfalsy(""));
console.log(isfalsy("f"));
console.log(isfalsy(false));