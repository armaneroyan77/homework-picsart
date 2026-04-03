function comb(left, right){
    const combs = [];

    

}


function dev(arr){


    let middle = Math.floor((left + right) / 2);

    let left = dev(arr.slice(0, middle));
    let right = dev(arr.slice(middle));

    return comb(left, right);

}

const arr = [1, 2, 3, 4, 5];