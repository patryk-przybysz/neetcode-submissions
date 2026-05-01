class Solution {
    handlers = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    };
    
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const token = tokens.pop();
        return this.evalExpression(token, tokens);
    }

    evalExpression(token, tokens) {
        const maybeOperand = parseInt(token);
        if (!Number.isNaN(maybeOperand)) {
            return maybeOperand;
        }


        // Token is an operator
        const fn = this.handlers[token];
        if (fn == undefined) throw new Error(`Unrecognized token: "${token}"`);

        const tokenB = tokens.pop();
        const operandB = this.evalExpression(tokenB, tokens);
        const tokenA = tokens.pop();
        const operandA = this.evalExpression(tokenA, tokens);
                
        return fn(operandA, operandB);
    }
}
