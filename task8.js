function sum_Elememts(arr){

    let sum = 0;

    for(let i = 0; i < arr.length; ++i){
        
        if(typeof arr[i] !== "number"){
            continue;
        }

        sum += arr[i];
    }

    return sum;
}

let numList = [12, 34, "3", "23wef", 45];
console.log(sum_Elememts(numList)); 

