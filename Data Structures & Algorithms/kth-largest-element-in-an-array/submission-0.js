class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const target = k - 1;

        let lo = 0, hi = nums.length;

        while (lo < hi) {
            let pivotIdx = Math.floor(Math.random() * (hi - lo)) + lo;
            pivotIdx = this.partition(nums, pivotIdx, lo, hi);

            if (pivotIdx == target) return nums[pivotIdx];
            if (pivotIdx < target) lo = pivotIdx + 1;
            else hi = pivotIdx;
        }
    }

    partition(nums, pivotIdx, lo, hi) {
        [nums[pivotIdx], nums[lo]] = [nums[lo], nums[pivotIdx]];
        const pivot = nums[lo];
        let i = lo;

        for (let j = lo + 1; j < hi; j++) {
            if (nums[j] > pivot) {
                i++;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }

        [nums[lo], nums[i]] = [nums[i], nums[lo]];
        return i;
    }
}
