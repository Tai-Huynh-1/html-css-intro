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
// const dog = {
//     numOfLegs: 4,
//     numOfLegs: 6,
//     numOfEyes: 2,
//     name: "Sparky",
//     isAlive: true,
//     // 
//     bark: function () {
//         console.log("ruff ruff")
//     }
// }

// console.log(dog.isAlive)
// console.log(dog.bark())

// const myStr = "asd"
// console.log("asdsafdsdgdsgsfd".length)

// javascript arrays [] 
// difference between arrays and objects
// 1. arrays are not key value pairs
// 2. inside of an array, the order of items matter - inside objects, the order of key/value pairs do not matter
// 3. elements (items) inside of arrays do not have to be unique - inside objects, keys have to be unique
// const myEmptyArr = []
// const myArr = ["item1", "item1", 1, true, null, undefined, dog, myEmptyArr, {}, []]

// console.log(dog)
// console.log(myArr)


// CRUD on objects and arrays & array methods => Create / Read / Update / Delete
// reading objects & reading arrays
// const dog = {
//     numOfLegs: 4,
//     numOfLegs: 6,
//     numOfEyes: 2,
//     name: "Sparky",
//     isAlive: true,
//     // 
//     bark: function () {
//         console.log("ruff ruff")
//     },
//     address: {
//         streetNumber: '123',
//         streetName: 'Main St'
//     },
//     toys: ["bone", "toy2", 100, true], // array
//     "greeting": "ruff"
// }

// console.log(dog.toys) // dot notation
// console.log(dog['greeting']) // bracket notation => used for objects 

// console.log(dog.toys[3])

// const var1 = "myString"
// const var2 = ["item1"]

// console.log(typeof var1)
// console.log(typeof var2)

// UPDATING objects and arrays
const dog = {
    numOfLegs: 4,
    numOfEyes: 2,
    name: "Sparky",
    isAlive: true,
    // 
    bark: function () {
        console.log("ruff ruff")
    },
    address: {
        streetNumber: '123',
        streetName: 'Main St'
    },
    toys: ["bone", "toy2", 100, true], // array
    "greeting": "ruff"
}
// dog.birthDate = '06/06/2000' // add new key
// console.log(dog)
// dog.name = "RoadRunner"
// console.log(dog)

// for an array
// console.log(dog.toys.length)
// dog.toys[dog.toys.length + 1] = "happy"
// console.log(dog.toys.length)
// console.log(dog.toys)
// console.log(dog.toys[6])

// array.push() & array.pop() (the end of array)
// console.log(dog.toys)
// dog.toys.push("newItem", "newItem2")
// console.log(dog.toys.pop())
// // console.log('popped', popped)
// console.log(dog.toys)

// array.shift() & array.unshift() (beginning of array)
// console.log(dog.toys)
// dog.toys.unshift("newItem", "newItem2")
// console.log(dog.toys)

// const a = dog.toys.map((el) => el)
// a.unshift("new item")

// console.log('a', a)
// console.log("dog.toys", dog.toys)


// const n = [1, 2, 3]

// const mapped = n.map(function(el) {
//     return el * 100
// })

// [1*100, 2*100, 3*100]
// console.log(mapped)

// n.forEach(function(el) {
//     console.log(el * 100)
// })

// Delete is pop and shift for array
// Delete for objects
// console.log(dog)
// delete dog.name // use delete keyword
// console.log(dog)


// function hoisting
// myFunc()

// function myFunc() {
//     console.log("hi")
// }

// comparison operator
// console.log(8 === '8') // false, false, false, false
// console.log(8 === 'eight') // false, false, false, false

// console.log(8 == '8') // true, true, true , true
// console.log(8 == 'eight') // false, false, false, false

// function modify(arr) {
//     arr.push(100, 200, 300, 400)
//     arr.shift()
//     return arr
// }

// console.log(modify([9000]))

// const user = {
// 	id: 1,
// 	name: "David",
// 	email: "dave@gmail.com",
// 	address: {
// 		mailing: "123 Main St",
// 		shipping: "789 Main St"
// 	},
// 	cart: ["banana", "milk", "napkins"]
// }
// user.address.mailing = user.address.shipping
// user.address.mailing = "789 Main St"

// console.log(user)


// pass by reference to objects vs value
// const a = 3
// a = 5

// let b = 3
// b = 5

// let myArr = [9, 8, 7]
// const myArr = [9, 8, 7]
// myArr.push(10, 11, 12)
// myArr = [9, 8, 7, 10, 11, 12]
// console.log(myArr)


// Looping with for loops over objects and arrays
// arr
const myArr = [[1, 2, 3], [4, 5, 6, 7]]
// const b = [100, 500, 600, 700]
for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr[i].length; j++ ) {
        console.log(myArr[i][j])
    }
}