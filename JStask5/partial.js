const sum = (a, b, c) => a + b + c;

function partial(sum, ...args){

    return function(val){
        return sum(val, ...args);
    }
}

const add5 = partial(sum, 2, 3);
console.log(add5(4)); //9
