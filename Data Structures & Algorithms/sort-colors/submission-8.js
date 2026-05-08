class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const RED = 0, BLUE = 2;
        let reds = 0, blues = 0;
        const n = nums.length;
        let i = 0;

        while (i <= n - blues - 1) {
            if (nums[i] === RED) {
                [nums[reds], nums[i]] = [nums[i], nums[reds]];
                reds++;
                i++;
            } else if (nums[i] === BLUE) {
                [nums[n - blues - 1], nums[i]] = [nums[i], nums[n - blues - 1]];
                blues++;
            } else {
                i++;
            }
        }

        return nums;
    }
}
