const fn = (currVal, index, array) => currVal % 2;

const filter = (fn, arr) => {

    if(typeof fn !== "function"){
        return "fn is not function";

    }

    if(!Array.isArray(arr)){

        return "arr is not Array";
    }

    const filteredArray = [];

    for(let index = 0; index < arr.length; ++index){

        if(arr[index] === undefined) continue;

        if(fn(arr[index], index, arr)){

            filteredArray.push(arr[index]);
            
        }
    }
    return filteredArray;

};

const arr = [12, 45, , , undefined, 6, 3, 7, 78];
console.log(filter(fn, arr));
