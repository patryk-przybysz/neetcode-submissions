class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const suffixMax = new Array(arr.length)
        suffixMax[arr.length - 1] = -1

        for (let i = arr.length - 2; i >= 0; i--) {
            suffixMax[i] = Math.max(arr[i + 1], suffixMax[i + 1])
        }

        return suffixMax
    }
}
