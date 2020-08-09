
function Character(name, profession, gender, age, strength, hp) {
    this.name = name,
    this.profession = profession,
    this.gender = gender,
    this.age = age,
    this.strength = strength,
    this.hp = hp
    this.printStats = function() {
        for (var key in this) {
            if(typeof this[key] !== 'function'){
                console.log(key.toUpperCase() + ": " + this[key])
            }
        }
        // console.log("Name: " + this.name)
        // console.log("Profession: " + this.profession)
        // console.log("Gender: " + this.gender)
        // console.log("Age: " + this.age)
        // console.log("Strength: " + this.strength)
        // console.log("Health: " + this.hp)
    }
    this.isAlive = function() {
        if (this.hp > 0) {
            return true
        } else {
            return false
        }
    }
    this.attack = function(opponent) {
        opponent.hp -= this.strength
    }
    this.levelUp = function() {
        this.age++
        this.strength += 5
        this.hp += 25
    }
}

var foo = new Character("Foo", "Blacksmith", "Male", 151, 99, 3000)
var bar = new Character("Bar", "Bar Maid", "Female", 30, 55, 1850)
var foobar = new Character("Foobar", "Literal Baby", "Fluid", 0, 1, 10)

console.log("\nFoo and Bar enter along with baby Foobar!\n")
foo.printStats()
console.log("\n")
bar.printStats()
console.log("\n")
foobar.printStats()
console.log("\nBar levels up!\n")
bar.levelUp()
bar.printStats()
console.log("\nBar attacks Foo!\n")
bar.attack(foo)
foo.printStats()
console.log("\nFoo attacks Bar but misses! Lil baby Foobar is hit by mistake!\n")
console.log("Foobar is alive: " + foobar.isAlive() + "\n")
foo.attack(foobar)
console.log("(attack lands)\n")
console.log("Foobar is alive: " + foobar.isAlive() + "\n")
