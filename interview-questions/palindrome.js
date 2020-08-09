var check = process.argv[2];

function palindrome(num) {
    num = num.toString();
    var reverse = num.split('').reverse().join('');

    var i = 0;
    var flag = true;

    while (flag && i < num.length) {
        if (num[i] !== reverse[i]) {
            flag = false;
        }
        i++
    }
    console.log(flag);
}

palindrome(check);


// v2

var isPalindrome = function(x) {
    x = x.toString()
    for (i=0; i<x.length; i++) {
        if (x[i] != x[x.length - 1 - i]) {
            return false
        }
    }
    return true
};