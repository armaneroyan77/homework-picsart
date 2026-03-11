let cb = (curValue, index, array) =>{
    if(curValue === "n" || curValue === "w"){
        return true;
    }
    return false;
} 


function filter(array, cb){
    let filter_arr = [];

    for(let key of arr){

        if(cb(key[0][0], 0, arr)){
            continue;
        }
        filter_arr.push(key);
        
    }
   
    return filter_arr;
}

let obj = {name: "name", age: 12, weight: 50, height: 1.5};

let arr = Object.entries(obj);

let filt_arr = filter(arr, cb);
f_obj = Object.fromEntries(filt_arr);

//befor create array from object arr
console.log(arr);

//after
console.log(filt_arr);

// created arr to object
console.log(f_obj);


