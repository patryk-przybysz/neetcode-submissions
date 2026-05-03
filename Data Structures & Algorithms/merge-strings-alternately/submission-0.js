class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        const totalLength = word1.length + word2.length;

        const buffer = new Array(totalLength);

        let i = 0;
        let w1 = 0, w2 = 0;
        while (w1 < word1.length || w2 < word2.length) {
            if (w1 < word1.length) buffer[i++] = word1[w1++];
            if (w2 < word2.length) buffer[i++] = word2[w2++];
        }

        return buffer.join("");
    }
}
