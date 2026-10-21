

var sortArray = function (nums) {
    
    if(!nums.length) return [];
    
    function devide(start, end){
        if(start === end){
            return [nums[start]];
        }
        
        const middle = start + Math.floor((end - start) / 2);
        
        const left = devide(start, middle);
        const right = devide(middle + 1, end);
        
        return merge(left, right);
    }
        
    function merge(left, right){
        
        const buffer = [];
        let i = 0;
        let j = 0;
        
        while(i < left.length && j < right.length){
            if(left[i] <= right[j]) buffer.push(left[i++]);
            else buffer.push(right[j++]);        
        }
        
        while(i < left.length) buffer.push(left[i++]);
        while(j < right.length) buffer.push(right[j++]);
        
        return buffer;
    }

     return devide(0, nums.length - 1);
}
    
    const arr = [3, -5, 9, 14, 8, 1, 9, 9];
    console.log(sortArray(arr));
    
    // function mergeSort(arr){
    
    //     if(arr.length <= 1){
    //         return arr;
    //     }
        
    //     let middle = Math.floor(arr.length / 2);    
        
    //     // console.log(arr);
        
    //     const left = mergeSort(arr.slice(0, middle));
    //     const right = mergeSort(arr.slice(middle));
    
    //     return merge(left, right);
    // }
    
    // const merge = (left, right) => {
        
    //     const array = [];
    //     let i = 0;
    //     let j = 0;
    
    //     while(i < left.length && j < right.length){
    
    //         if(left[i] <= right[j]){
    //             array.push(left[i]);
    //             ++i;
    //         }
    
    //         else{
    //             array.push(right[j]);
    //             ++j;
    //         }
    //     }
    
    //     while(i < left.length){
    //         array.push(left[i]);
    //         ++i;
    //     }
    
    //      while(j < right.length){
    //         array.push(right[j]);
    //         ++j;
    //     }
        
    //     return array;
    // }
