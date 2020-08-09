function fizzbuzz(n) {
    var fb = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fb.push("Fizzbuzz");
        } else if (i % 3 === 0) {
            fb.push("Fizz");
        } else if (i % 5 === 0) {
            fb.push("Buzz");
        } else {
            fb.push(i.toString());
        }
    }
    return fb;
}

console.log(fizzbuzz(15));