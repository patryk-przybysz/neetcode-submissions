/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let lo = 1, hi = n;

        for (;;) {
            const m = lo + Math.floor((hi - lo) / 2);
            const result = guess(m);
            

            if (result == 0) return m;
            if (result == 1) lo = m + 1;
            else hi = m;

        }
    }
}
