
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var n = process.argv[2]

function findIndex(N, arr) {
    // console.log(arr.indexOf(parseInt(N)));
    for (i=0;i<arr.length;i++) {
        if(arr.includes(i)) {
            return i;
        }
    }
    return -1;
}

findIndex(n, arr)