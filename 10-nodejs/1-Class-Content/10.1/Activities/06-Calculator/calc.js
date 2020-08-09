
var op = process.argv[2]
var x = parseFloat(process.argv[3])
var y = parseFloat(process.argv[4])

switch (op) {
    case 'add':
    console.log(x+y)
    break
    case 'sub':
    console.log(x-y)
    break
    case 'mult':
    console.log(x*y)
    break
    case 'div':
    console.log(x/y)
    break
    case 'remainder':
    console.log(x%y)
    break
    case 'exp':
    console.log(x^y)
    break
    case 'algebra':
    var exp = process.argv[3].split('=')
    var front = exp[0].split('+')
    var res = parseFloat(exp[1]) - parseFloat(front[1])
    res = res / parseFloat(front[0][0])
    console.log('x = ' + res)
    break
}

