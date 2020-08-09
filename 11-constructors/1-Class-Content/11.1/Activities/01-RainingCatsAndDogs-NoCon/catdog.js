

function Animal(raining, noise) {
    this.raining = raining,
    this.noise = noise,
    this.makeNoise = function() {
        if (this.raining) { console.log(this.noise) }
    }
}

var cat = new Animal(false, "meow")
var dog = new Animal(true, "bork")

dog.makeNoise()
cat.raining = true
cat.makeNoise()