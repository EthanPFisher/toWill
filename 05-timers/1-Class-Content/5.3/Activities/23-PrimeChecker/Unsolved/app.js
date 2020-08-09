
function checkIsPrime(num) {

    for (i=num-1; i > 1; i--) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (num=500; num > 0; num--) {
    console.log(num + " is prime: " + checkIsPrime(num));
}