
const test1 = [1, 2, 3, 4, 5]
const test2 = [1, 2, 4, 5]
const test3 = [10]
const test4 = [2, 3, 4, 5, 6, 7, 8, 10]

const findMissing = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i+1] - 1) {
            return arr[i] + 1;
        }
    }
    return null;
}

// console.log('input:\n' + test1 + '\n' + test2 + '\n' + test3 + '\n' + test4)
console.log('OUTPUT:')
console.log(findMissing(test1))
console.log(findMissing(test2))
console.log(findMissing(test3))
console.log(findMissing(test4))
console.log(findMissing([5,6,7,8,9,10,12]))