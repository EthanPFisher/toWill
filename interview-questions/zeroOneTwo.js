
const zeroOneTwo = (arr) => {

    arr = arr.sort()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (arr[i] !== 1) {
                if (arr[i] !== 2) {
                    return null;
                }
            }
        }
    }
    return arr
}

console.log(zeroOneTwo([1, 2, 1, 2, 0, 1, 0, 0, 3]))
console.log(zeroOneTwo([1, 0, 0, 1, 2, 1, 2, 0, 1, 0, 2, 2, 2, 1, 0, 1]))
console.log(zeroOneTwo([5, 0, 1]))
console.log(zeroOneTwo([2,2,1,2,0,0]))