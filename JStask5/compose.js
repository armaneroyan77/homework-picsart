function compose(square, double){
    return function(x){
        return square(double(x));
    }
}

const double = x => x * 2;
const square = x => x * x;

const fn = compose(square, double);
console.log(fn(3)); // (3 * 2)^2 = 36