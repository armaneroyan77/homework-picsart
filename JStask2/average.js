function sumArray(arr, index){

    if(index < 0){
        return 0;
    }

    return sumArray(arr, index - 1) + arr[index];
}

let arr = [3, 3, 5, 7, 12, 2];
let index = arr.length - 1;
console.log("Average = " + (sumArray(arr, index) / arr.length));
