function checkIfPrime(num){
    // ex. num = 10
    // if the sqrt has a remainder then the number is prime
    // if(Math.sqrt(num).toString().indexOf('.') === -1){
    //     return num + 'is ' + false;
    // }else{
    //     return num + ' is ' + true;
    // }


    // ex. num = 10
    // 10 % 
    for(var i = 2; i < num/2; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(checkIfPrime(7))