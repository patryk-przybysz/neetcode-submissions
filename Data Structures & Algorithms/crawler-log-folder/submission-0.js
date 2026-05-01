class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */

    minOperations(logs) {
        const PARENT_FOLDER_PATTERN = "../"
        const SAME_FOLDER_PATTERN = "./"

        const history = []

        for (const log of logs) {
            if (log == SAME_FOLDER_PATTERN) {
                continue;
            }
            
            if (log == PARENT_FOLDER_PATTERN) {
                history.pop();
                continue;
            }
            
            // else: Move to child folder
            const folder = log.slice(0, -1) // Strip trailing slash
            history.push(folder)
        }

        return history.length
    }
}
