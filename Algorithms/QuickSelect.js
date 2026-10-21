function QuickSelect(nums, left = 0, right = nums.length - 1, k){
    if(left >= right) return nums[left];
    const pivIndex = loumunto(nums, left, right);

    if(pivIndex === nums.length - k) return nums[pivIndex];

    if(pivIndex > nums.length - k){
        return QuickSelect(nums, left, pivIndex - 1, k);
    }

    return QuickSelect(nums, pivIndex + 1, right, k);
    


    function loumunto(nums, low = 0, high = nums.length - 1){
        let swapStep = low;
        const pivot = nums[high];

        for(let i = low; i < high; i++){
            if(nums[i] <= pivot){
                swap(nums, i, swapStep);
                swapStep++;
            }
        }

        swap(nums, high, swapStep);
        return swapStep;
    }

    function swap(nums, i, j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

}

const nums = [12, 3, 543, 2, 456, 2,3, 44];
console.log(QuickSelect(nums, 0, nums.length - 1, 3));
