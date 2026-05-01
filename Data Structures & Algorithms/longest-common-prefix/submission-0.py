class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        word = strs[0]
        m = len(word)

        for i in range(m):
            for s in strs:
                if i == len(s) or s[i] != word[i]:
                    return word[:i]

        return word