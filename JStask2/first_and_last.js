function  firstAndLast(arr){

    if(!arr.length){
        return [];
    }

    let temp_arr = [];
    temp_arr.push(arr[0]);
    temp_arr.push(arr[arr.length - 1]);
    return temp_arr;

}

let arr = [1, 4, 6, 2, 5, 7];
let new_arr = firstAndLast(arr);
console.log(new_arr);
