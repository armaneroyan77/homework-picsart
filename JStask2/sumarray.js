function sumArray(arr, len){

    if(len < 0){
        return 0;
    }

    return sumArray(arr, len - 1) + arr[len];
}

let arr = [1, 2, 3, 4, 5];
let len = arr.length - 1;
console.log(sumArray(arr, len));
