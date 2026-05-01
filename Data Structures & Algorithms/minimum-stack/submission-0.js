class MinStack {
    #stack;
    #minPrefix;

    constructor() {
        this.#stack = [];
        this.#minPrefix = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const min = this.getMin() ?? Number.MAX_SAFE_INTEGER;
        const newMin = Math.min(min, val);
        this.#minPrefix.push(newMin);
        this.#stack.push(val);
        return;
    }

    /**
     * @return {void}
     */
    pop() {
        this.#minPrefix.pop();
        return this.#stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.#stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.#minPrefix.at(-1);
    }
}
