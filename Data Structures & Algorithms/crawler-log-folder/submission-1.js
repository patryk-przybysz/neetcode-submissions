class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */

    minOperations(logs) {
        const PARENT_FOLDER_PATTERN = "../";
        const SAME_FOLDER_PATTERN = "./";

        const history = [];

        for (const log of logs) {
            if (log == PARENT_FOLDER_PATTERN) {
                history.pop();
            } else if (log != SAME_FOLDER_PATTERN) {
                history.push(log);
            }
        }

        return history.length;
    }
}
