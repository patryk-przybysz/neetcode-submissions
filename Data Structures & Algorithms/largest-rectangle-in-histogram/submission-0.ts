class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack: number[] = [];
        let maxArea = 0;

        heights.push(0)

        for (let i = 0; i < heights.length; i++) {
            while (stack && heights[stack.at(-1)] > heights[i]) {
                const top = stack.pop()!;
                const height = heights[top];
                const left = stack.length ? stack[stack.length - 1] : -1;
                const width = i - left - 1;
                
                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
