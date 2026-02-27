function sum_Elememts(arr){
    
    let sum = 0;

    for(let i = 0; i < arr.length; ++i){
        sum += arr[i];
    }

    return sum;
}

let numList = [];
console.log(sum_Elememts(numList)); 

