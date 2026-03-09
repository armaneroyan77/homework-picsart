const cb = (curVal, index, arr) => {
    return arr[index] ** 2;
}

function map(array, cb){
    let res = [];
    for(let i = 0; i < array.length; ++i){
        res.push(cb(array[i], i, array));
    }
    return res;
}

let arr = [12, 2, 34, 34, 7];
let res = map(arr, cb);

console.log(res);


