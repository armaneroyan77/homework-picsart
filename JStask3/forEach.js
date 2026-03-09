const cb = (value, index, array) => {
    if(value % 2 == 0){
        array[index]++;
    }
}


function myForEach(array, cb){
    for(let i = 0; i < array.length; ++i){
        cb(array[i], i, array);
    }
}

let array = [12, 34, 34, 6, 34, 3, 9, 0];
myForEach(array, cb);
console.log(array);
