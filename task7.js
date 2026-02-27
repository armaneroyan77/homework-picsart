function sum_Elememts(arr){

    if(arr.length < 1){
        return 0;
    }

    let sum = 0;

    for(let i = 0; i < arr.length; ++i){
        sum += arr[i];
    }

    return sum;
}

let numList = [3, 6, 9, 12];
console.log(sum_Elememts(numList)); 

