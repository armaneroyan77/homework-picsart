function power(base, exp){

    if(exp <= 0){
        return 1;
    }

    return power(base, exp - 1) * base;

}

let base = 2;
let exp = 4;
console.log(power(base, exp));
