
var test1 = "Otto bought a racecar he cannot afford.";
var test2 = "Was it a car or a cat I saw?";


function isPalindrome(sentence) {
    var reversed = "";
    var baseSent = "";
    for (i=0; i < sentence.length; i++) {
        if (sentence[i].match(/[A-Z]/gi)) {
            baseSent += sentence[i];
        }
    }
    baseSent = baseSent.toLowerCase();
    console.log(baseSent);
    for (i=sentence.length - 1; i >= 0; i--) {
        if (sentence[i].match(/[A-Z]/gi)) {
            reversed += sentence[i];
        }
    }
    reversed = reversed.toLowerCase();
    console.log(reversed);

}

isPalindrome(test1);