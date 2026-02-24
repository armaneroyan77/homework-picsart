function merge(left, right){

    let arr = [];
    let l = 0, r = 0;

    while(l < left.length && r < right.length){

        if(left[l] < right[r]){
            arr.push(left[l]);
            l++;
        }

        else{
            arr.push(right[r]);
            r++;
        }
    }

    while(l < left.length){
        arr.push(left[l]);
        l++;
    }

    while(r < right.length){
        arr.push(right[r]);
        r++;
    }

    return arr;
}

function mergeSort(arr){

    if(arr.length <= 1){
        return arr;
    }

    let middle = Math.trunc(arr.length / 2);

    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));

    return merge(left, right);

}


let nums = [12, 45, 2, 4, 23, 64, 23];
let result = mergeSort(nums);
console.log(result);
