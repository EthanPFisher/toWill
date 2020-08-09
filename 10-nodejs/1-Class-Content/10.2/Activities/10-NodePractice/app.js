var a = parseFloat(process.argv[2])
var b = parseFloat(process.argv[3])

console.log("equal: " + (a === b))

console.log("both multiples of 7: " + (a % 7 === 0 && b % 7 === 0))