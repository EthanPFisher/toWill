var Benchmark = require("benchmark");

var stuff =
    [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514, 795, 812, 912, 1095, 1123, 1275];

var random_value = stuff[Math.floor(Math.random() * stuff.length)];

var suite = new Benchmark.Suite();

suite.add("Binary Search", function binarySearch(start, end) {
    var mid = Math.floor((start + end) / 2);
    console.log(mid)
    if (stuff[mid] === random_value) {
        console.log("FOUND")
        return mid;
    } else if (stuff[mid] < random_value) {
        console.log("GREATER")
        return binarySearch(mid + 1, end);
    } else {
        console.log("LESS")
        return binarySearch(start, mid - 1);
    }
}).on("start", function start() {
    console.log("Beginning benchmark...");
}).on("complete", function report() {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, "successful")[0];

    console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");
}).run();

// BINARY SEARCH
function binarySearch(start, end) {
    var mid = Math.floor((start + end) / 2);
    console.log(mid)
    if (stuff[mid] === random_value) {
        console.log("FOUND")
        return mid;
    } else if (stuff[mid] < random_value) {
        console.log("GREATER")
        return binarySearch(mid + 1, end);
    } else {
        console.log("LESS")
        return binarySearch(start, mid - 1);
    }
}

// console.log("index: " + binarySearch(0, stuff.length - 1) + "\nvalue: " + random_value);


//LINEAR SEARCH
// function isInStuff() {
//     for (var i = 0; i < stuff.length; i++) {
//         if (stuff[i] === random_value) {
//             console.log("index: " + i + "\nvalue: " + random_value);
//         }
//     }
// }

// isInStuff();

// BUILDING BINARY SEARCH TREE
// var BSTNode = function (val) {
//     this.val = val
//     this.left;
//     this.right;
// }

// function arrBST(arr, start, end) {
//     if (start > end) {
//         return undefined;
//     }
//     var mid = (start + end) / 2;
//     var root = new BSTNode(arr[mid]);

//     root.left = arrBST(arr, start, mid - 1);
//     root.right = arrBST(arr, mid + 1, end);

//     return root;
// }
