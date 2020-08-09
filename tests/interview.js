process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
    stdin += chunk;
}).on('end', function () {
    var lines = stdin.trim().split('\n');
    for (var i = 0; i < lines.length; i++) {
        var coins = coinCount(parseInt(lines[i]))
        process.stdout.write(coins.toString());
    }
});

function coinCount(total) {
    var coins = 0;
    var beeg = 0;
    var mids = 0;
    var smoll = 0;
    while (total !== 0) {
        if (total % 5 === 0) {
            total = total - 5;
            coins++;
            beeg++;
        } else if (total % 3 === 0) {
            total = total - 3;
            coins++;
            mids++;
        } else {
            total--;
            coins++;
            smoll++;
        }
    }
    return [coins, beeg, mids, smoll];
}

console.log(coinCount(process.argv[2]))