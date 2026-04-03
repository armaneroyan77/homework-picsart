const fn = (currVal, index, arr) => {
    if(currVal === undefined) return;
    return currVal ** 2
};

const map = (fn, arr) => {

    if(typeof fn !== "function"){
        return "fn is not function";

    }

    if(!Array.isArray(arr)){

        return "arr is not Array";
    }

    const mapedArr = [];

    for(let i = 0; i < arr.length; i++){
        if(i in arr){
            mapedArr[i] = fn(arr[i], i, arr);
        }
    }

    return mapedArr;
};

const arr = [12, 45, , , undefined, 6, 3];
console.log(map(fn, arr));
