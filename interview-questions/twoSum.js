const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= target) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === target - nums[i]) {
                    return [i, j];
                }
            }
        }
    }
}

console.log(twoSum([2, 11, 17, 5, 7], 9));