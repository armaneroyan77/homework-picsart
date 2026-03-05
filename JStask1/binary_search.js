function selectionSort(lst) {

    let size = lst.length;

    for (let i = 0; i < size; ++i) {

        let index = i;

        for (let j = i + 1; j < size; ++j) {
            if (lst[j] < lst[index]) {
                index = j;
            }
        }

        let temp = lst[i];
        lst[i] = lst[index];
        lst[index] = temp;
    }

    return lst;
}


function binary_search(lst, target, left, right){
    
    if(left == right){
        return -1;
    }
    
    middle = Math.trunc((left + right) / 2);

    if(lst[middle] > target){
        return binary_search(lst, target, left, middle - 1);
    }

    else if(lst[middle] < target){
        return binary_search(lst, target, middle + 1, right);
    }

    else{
        return middle;
    }


}


let numbers = [12, 34, 56, 67, 223, 5, 67, 34, 78];
selectionSort(numbers);
console.log(numbers);

let target = 78;
let left = 0;
let right = numbers.length;

let index = binary_search(numbers, target, left, right);

if(index !== -1){
    console.log("the target contain in index " + index + "\n");   
}
else{
    console.log("there is not target value in list\n");
}