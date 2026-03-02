function contains(arr, index, val){

    if(index < 0){
        return 0;
    }

    return (Boolean((val === arr[index]) + contains(arr, index - 1, val))) 
}

let arr = [12, 34, 54, 6, 2, 6];
let val = 6;
console.log(contains(arr, arr.length - 1, val));
