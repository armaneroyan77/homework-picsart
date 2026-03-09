const cb = (curVal, index, arr) => {

    arr[index] = (typeof arr[index] === "string")? Number.parseFloat(arr[index]) : arr[index];
   
    if(Number.isNaN(arr[index]) || (typeof arr[index] !== "number") || arr[index] > 22){
        arr[index] = undefined;
    }
}

function filter(array, cb){
    let res = [];
    for(let i = 0; i < array.length; ++i){
        cb(arr[i], i, arr);
        if(arr[i] === undefined){
            continue;
        }
        res.push(arr[i]);
    }
    return res;
}

let arr = [12, NaN, 2, "1e", 34, 34, 7];
let res = filter(arr, cb);
console.log(res);

