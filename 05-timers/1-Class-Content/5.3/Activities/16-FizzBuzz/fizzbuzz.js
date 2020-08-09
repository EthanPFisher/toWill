for (var i = 1; i <= 100; i++) {
    // if i is a multiple of 15, print FizzBuzz
    if(i % 15 === 0){
        console.log('FizzBuzz')
    }
    // if i is a multiple of 3, print Fizz
    else if(i % 3 === 0){
        console.log('Fizz')
    }
    // if i is a multiple of 5, print Buzz
    else if(i % 5 === 0){
        console.log('Buzz')
    }
    // else print the number
    else{
        console.log(i)
    }
    
} 