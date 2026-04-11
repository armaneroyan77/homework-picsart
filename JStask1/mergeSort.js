function MergeSort(left, right){
    
    let a = [];
    let l = 0, r = 0;

    while(l < left.length && r < right.length){

        if(left[l] < right[r]){
            a.push(left[l]);
            l++;
        }

        else{
            a.push(right[r]);
            r++;
        }
    }

    while(l < left.length){
        a.push(left[l]);
        l++;
    }

    while(r < right.length){
        a.push(right[r]);
        r++;
    }

    return a;
}


function merge(arr){
    
    if(arr.length === 1) return arr;

    let middle = Math.floor(arr.length / 2);

    let left = merge(arr.slice(0, middle));
    let right = merge(arr.slice(middle));

    return MergeSort(left, right);
}
