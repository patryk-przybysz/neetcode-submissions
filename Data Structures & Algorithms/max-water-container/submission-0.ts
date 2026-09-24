class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const N = heights.length

        let left = 0
        let right = N - 1

        let maxArea = -1

        while (left < right) {
            const height = Math.min(heights[left], heights[right])
            const width = right - left;
            const area = height * width;

            maxArea = Math.max(area, maxArea)

            if (heights[left] > heights[right]) right--
            else left++
        }

        return maxArea
    }
}
