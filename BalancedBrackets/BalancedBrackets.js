function isBalanced(str) {
    const stack = []
    const open = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    const closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0 i < str.length i++) {
        let chr = str[i]
        if (open[chr]) {
            stack.push(chr)
        } else if (closed[chr]) {
            if (open[stack.pop()] !== chr) return false
        }
    }
    return stack.length === 0
}
