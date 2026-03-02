function minInArray(arr, len){

    if(!Array.isArray(arr)){
        return undefined;
    }


    if(!len){
        return arr[0];
    }

    let min = minInArray(arr, len - 1);

    if(min > arr[len]){
        return arr[len];
    }
    
    return min;
    
}

let arr = [12, -4, 343, 2, -21];
let min_el = minInArray(arr, arr.length - 1);
console.log(min_el);
