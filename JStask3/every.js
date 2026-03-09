const cb = (curVal, index, arr) => {
    return (typeof curVal === "string");
}

function some(array, cb){
    for(let i = 0; i < array.length; ++i){
        if(!cb(array[i], i, array)){
            return false;
        }
    }
    return true;
}

let arr = ["s", "sdsd", "d", "sdf"];
let res = some(arr, cb);
console.log(res);

