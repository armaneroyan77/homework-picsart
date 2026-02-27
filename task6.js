function getIndex(arr, target){

    for(let i = 0; i < arr.length; ++i){
        if(arr[i] == target){
            return i;
        }
    }

    return -1;
}

let numList = [3, 6, 9, 12];
let target = 9;
console.log(getIndex(numList, target));
