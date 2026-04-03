function sum(a, b, c, d) {
  return a + b + c + d;

}

function curry(fn){

    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }

        return (...new_arr) => curried(...args, ...new_arr);
    }
}
const curried = curry(sum);

console.log(curried(1, 2, 3, 5)); 