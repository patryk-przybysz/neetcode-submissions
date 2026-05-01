class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isUgly(n) {
        if (n <= 0) return false

        for (let factor of [2, 3, 5]) {
            while (n > 1 && n % factor == 0) {
                n /= factor
            }
        }

        return n == 1
    }
}
