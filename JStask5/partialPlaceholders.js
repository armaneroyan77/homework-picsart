function partial(fn, ...args){
    return function(...restArgs){
        const _args = args.map(arg => {

            if(arg === _ && restArgs.length > 0){
                return restArgs.shift();
            }
            return arg;
        });

        return fn(..._args, ...restArgs);
    }
}

const _ = Symbol();

const fn = (a, b, c, d) => [a, b, c, d] ;

const f = partial(fn, _, 2, _);
console.log(f(1, 3, 4)); // [1, 2, 3]