function compose(func1, func2){
    return function(a, b){
        return double(add(a, b));
    }
}

const add = (a, b) => a + b;
const double = x => x * 2;

const fn = compose(double, add);
console.log(fn(2, 3)); // 10