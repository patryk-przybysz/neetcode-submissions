class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0

        for (let j = 0; j < s.length; j++) {
            if (s[j] == t[i]) i++
        }

        return t.length - i
    }
}
