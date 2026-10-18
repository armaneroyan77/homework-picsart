function CountSort(array){
    if(array.length <= 1 || !array) return [...array];

    let max = Math.max(...array);
    let min = Math.min(...array);
    k = max - min + 1;
    const bias = -min;

    const count = new Array(k).fill(0);    
    const output = new Array(array.length);
    
    
    for(let i = 0; i < array.length; ++i){
        count[array[i] + bias]++;
    }
    
    for(let i = 1; i < count.length; ++i){
        count[i] = count[i] + count[i - 1];
    }

    for(let i = array.length - 1; i >= 0; --i){

        const currentVal = array[i];
        const countIndex = currentVal + bias;
        const targetIndex = count[countIndex] - 1;

        output[targetIndex] = currentVal;
        count[countIndex]--;
    }
    
    return output;
    
}

const A = null;
console.log(CountSort(A));

