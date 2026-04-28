
// Input
const dataObj = { value: 10 };
const cash = new WeakMap();

function heavyCalc(dataObj){

    if(cash.has(dataObj)){
        return cash.get(dataObj);
    }

    for(let i = 0; i < 1000000000; ++i){};
    cash.set(dataObj, dataObj.value ** 2);
    return 100;

}

// Expected Output
console.log(heavyCalc(dataObj)); 
// (Script pauses for 1-2 seconds...) -> 100

console.log(heavyCalc(dataObj)); 
// (Returns instantly) -> 100

