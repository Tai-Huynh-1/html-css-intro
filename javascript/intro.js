// variable declaration
// var myVar = "Tai" // declared a variable, but have not assigned a value
// console.log("myVar", myVar) // var is not defined - undefined (valid data type/ value)
// hoisted

// ourName = "Tai" // "Tai" string -> assigned a value of "Tai"
// console.log("ourName", ourName)

// other data types - 5 main primitive data type
// undefined, null, boolean, string, number
// myVar = null
// console.log("type", typeof myVar)
// JS goes through 2 phases: 1) memory allocation phase 2) execution phase

// console.log(myVar = 10) -> = is the assignment operator
// == or === is the comparison operator

// let myVar
// console.log(23%5)

// write function to determine odd or even

// let myVar = 3

function isOdd(number) {
    // const myVar = 10
    const remainder = number % 2
    console.log(myVar)
    if (remainder === 1) {
        return true
    } else {
        return false
    }
}

// console.log(isOdd(55))

// console.log('my program is done')


// javascript objects => collection of key, value pairs that are related for a particular object {}
const dog = {
    numOfLegs: 4,
    numOfLegs: 6,
    numOfEyes: 2,
    name: "Sparky",
    isAlive: true,
    // 
    bark: function () {
        console.log("ruff ruff")
    }
}

// console.log(dog.isAlive)
// console.log(dog.bark())

// const myStr = "asd"
// console.log("asdsafdsdgdsgsfd".length)

// javascript arrays [] 
// difference between arrays and objects
// 1. arrays are not key value pairs
// 2. inside of an array, the order of items matter - inside objects, the order of key/value pairs do not matter
// 3. elements (items) inside of arrays do not have to be unique - inside objects, keys have to be unique
const myEmptyArr = []
const myArr = ["item1", "item1", 1, true, null, undefined, dog, myEmptyArr, {}, []]

console.log(dog)
console.log(myArr)

// CRUD on objects and arrays & array methods
