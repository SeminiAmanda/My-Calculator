function appendCharacter(char) {
    document.calc.txt.value += char;
}

function calculate() {
    try {
        const result = evaluateExpression(document.calc.txt.value);
        if (result === Infinity || result === -Infinity) {
            document.calc.txt.value = 'Error: Division by Zero';
        } else {
            document.calc.txt.value = result;
        }
    } catch (e) {
        document.calc.txt.value = 'Error';
    }
}

function evaluateExpression(expr) {
    
    const validChars = /^[0-9+\-*/.()]*$/;
    if (!validChars.test(expr)) {
        throw new Error('Invalid characters in expression');
    }

    
    const sanitizedExpr = expr.replace(/[^0-9+\-*/.()]/g, '');
    return Function(`'use strict'; return (${sanitizedExpr})`)();
}