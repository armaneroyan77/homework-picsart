const indexOf = (array, searchElement) => {

    for(let i = 0; i < array.length; ++i){
        if(array[i] === searchElement){
            return i;
        }
    }
    return -1;
}

const arr = [23, 4, 2, 5, "23", "weds", 23];
const index = indexOf(arr, 4);
(index !== -1)? console.log(index): console.log("the value is not in array");
