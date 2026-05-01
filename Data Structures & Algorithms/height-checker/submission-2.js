class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const expected = [...heights].sort((a, b) => a - b)

        return heights.reduce((acc, _, i) => acc + (heights[i] != expected[i]), 0)
    }
}
