// let curry = (cb) => {
  
//     return function cruise(...args){
//         if(args.length >= cb.length){
//             return cb(...args);
        
//         }   

//         return (...more_args) => cruise(...args, ...more_args);   

//     }
// }


// const sum = (a, b, c) => a + b + c;
// const mul = (a, b, c, d) => a * b * c * d;

// let sumFunc = curry(sum);
// let mulFunc = curry(mul);

// console.log(sumFunc(1)(2, 3)); //6
// console.log(sumFunc(1, 2)(3)); //6
// console.log(sumFunc(1, 2, 3));   //6
// console.log(mulFunc(1, 2, 3, 4));   //24
// console.log(mulFunc(1)(2, 3, 4));   //24
// console.log(mulFunc(1, 2)(3, 4));   //24
// console.log(mulFunc(1, 2, 3)(4));   //24


const pow = (num, exp) => num ** exp;

function foo(pow){
    return function flo(...args){
        if(args.length >= 2){
            return pow(...args);
        }
        return (...more_args) => flo(...args, ...more_args);
    }
}

let pw = foo(pow);

console.log(pw(4)(2)(5));
