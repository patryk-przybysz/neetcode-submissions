class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const m = [...order].reduce((m, c, i) => {
            m.set(c, i);
            return m;
        }, new Map());

        return [...s].sort((a, b) => (m.get(a) ?? 27) - (m.get(b) ?? 27)).join('')
    }
}
