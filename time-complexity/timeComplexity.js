const chalk = require('chalk');

function addUpToLong(n) {
    let total = 0;
    for (let i = 1; i<=n; i++ ) {
        total += i
    }
    return total
}

function addUpToShort(n) {
    return n * (n + 1) / 2
}

console.log("\n")

//time complexity = 5n + 2 or O(n)
console.time(chalk.cyan("Long Time"));
console.log(`Long Result: ${addUpToLong(1000000000)}`)
console.timeEnd(chalk.cyan("Long Time"))
console.log(chalk.red("Time Complexity: 5n + 2 or 0(n)"))

console.log("\n")

//time complexity = n or O(1)
console.time(chalk.cyan("Short Time:"));
console.log(`Short Result: ${addUpToShort(1000000000)}`)
console.timeEnd(chalk.cyan("Short Time:"))
console.log(chalk.red("Time Complexity: n or O(1)"))

console.log("\n")

function printAllPairs(n) {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}

console.time(chalk.cyan("Print Time:"));
console.log(`Short Result: `)
printAllPairs(3)
console.timeEnd(chalk.cyan("Print Time:"))
console.log(chalk.red("Time Complexity: n^2 or O(n^2)"))



