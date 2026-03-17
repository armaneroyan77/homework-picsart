function factorial(a) {
 let res = 1;
 for (let i = 2; i <= a; ++i) {
   res *= i;
 }
 return res;
}

function memoize(cb) {
    let cash = [];
    return function cashing(n){
        if(cash[n] === undefined){
            cash[n] = cb(n);
            return cash[n];
        }
    
        return cash[n]
    }
}

const foo = memoize(factorial);
console.log(foo(5)); // 120
console.log(foo(5)); // 120
