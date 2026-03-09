const cb = (curVal, index, arr) => {

    return (typeof curVal === "string");
}

function some(array, cb){
    for(let i = 0; i < array.length; ++i){
       if(cb(array[i], i, array)){
            return true;
       }
    }
    return false;
}

let arr = [12, NaN, 2, 34, "sdsd", 7];
let res = some(arr, cb);
console.log(res);

