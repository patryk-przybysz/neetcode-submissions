class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.quickSort(nums, 0, nums.length - 1)
        return nums
    }

    quickSort(nums, lo, hi) {
        if (lo >= hi) return nums

        const pivot = this.partition(nums, lo, hi)
        this.quickSort(nums, lo, pivot - 1)
        this.quickSort(nums, pivot + 1, hi)
    }

    partition(nums, lo, hi) {
        const pivot = nums[lo]
        let i = lo + 1

        for (let j = lo + 1; j <= hi; j++) {
            if (nums[j] < pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++
            }
        }

        [nums[lo], nums[i - 1]] = [nums[i - 1], nums[lo]]
        return i - 1
    }
}
