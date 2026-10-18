
// function QuickSort(nums, left = 0, right = nums.length - 1){

//     if(left >= right){
//         return;
//     }

//     const pivotIndex = loumuto(nums, left, right);

//     QuickSort(nums, left, pivotIndex - 1);
//     QuickSort(nums, pivotIndex + 1, right);

//     function loumuto(nums, low = 0, high = nums.length - 1){
//         let j = 0;
//         const pivot = nums[high];
        
//         for(let i = 0; i < high; ++i){
//             if(nums[i] <= pivot){
//                 [nums[i], nums[j]] = [nums[j], nums[i]];
//                 ++j;
//             }
//         }

//         [nums[j], nums[high]] = [nums[high], nums[j]];

//         return j;
//     }
    
//     return nums;
// }
// const nums = [3, 1, 54, 5, 12, 8,];
// console.log(QuickSort(nums));



function QuickSort(nums, left = 0, right = nums.length - 1){

    if(left >= right){
        return;
    }

    const pivotIndex = Hoare(nums, left, right);

    // QuickSort(nums, left, pivotIndex);
    QuickSort(nums, pivotIndex + 1, right);

    function Hoare(nums, low = 0, high = nums.length - 1){
        let l = low - 1;
        let h = high + 1;

        const pivot = nums[low + Math.floor((high - low) / 2)];
        while(true){

            do{ 
                l++;
            }while(nums[l] < pivot);

            do{
                h--;
            }while(nums[h] > pivot);

            if(l >= h){
                return h;
            }

            [nums[l], nums[h]] = [nums[h], nums[l]];
        }
    }
    
    return nums;
}

const nums = [5,2,4,1,3,6,0];
console.log(QuickSort(nums));
