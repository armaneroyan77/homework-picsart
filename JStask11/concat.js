const digits = [1, 2, 3];

const extraNumbers = {
    "0": 4,
    "1": 5,
    "2": 6,
    "length": 3
}

let concArr = digits.concat(extraNumbers);
console.log(concArr);

extraNumbers[Symbol.isConcatSpreadable] = true;
concArr = digits.concat(extraNumbers);
console.log(concArr);


const arr = [2, 5];
arr[Symbol.isConcatSpreadable] = false;
concArr = concArr.concat(arr);
console.log(concArr);
