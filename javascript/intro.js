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

// function isOdd(number) {
//     // const myVar = 10
//     const remainder = number % 2
//     console.log(myVar)
//     if (remainder === 1) {
//         return true
//     } else {
//         return false
//     }
// }

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
// const dog = {
//     numOfLegs: 4,
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
// const myArr = [[1, 2, 3], [4, 5, 6, 7]]
// // const b = [100, 500, 600, 700]
// for (let i = 0; i < myArr.length; i++) {
//     for (let j = 0; j < myArr[i].length; j++ ) {
//         console.log(myArr[i][j])
//     }
// }


// Same situation as #1, but your function will now print the numbers in reverse and only 10 to 1. (10, 9, 8, 7, 6…) . 
// You will test every function by passing in num1 = 1, num2 = 100
// function reverse(num1, num2) {
//     for (let i = num2; i > num1-1; i--) {
//         if (i <= 10 && i > 0) {
//             console.log(i)
//             console.log("=============================")
//         }
//     }
// }
// reverse(1, 100)

// Write a function that takes in an array of numbers and uses the forEach() or map() to multiply every number by 100 only if the number is even - 
// if the number is odd then it will return the original number .
// The function should return a new array with the result. The original array should not be mutated.

// const number = [11, 22, 33, 44,]
// const mapped = number.map(function(el) {
//     return el * 100
// })
// number.forEach(function(el) {
//     console.log(el * 100)
// })
// console.log(number.length)
// console.log(number)
// const number = [11, 22, 33, 44,]
// function mapThrough (arr) {
//     const tracker = []
//     for (let i = 0; i < arr.length; i++) {
//         const isEven = arr[i]%2 === 0
//         if (isEven) {
//             // your number is even
//             tracker.push(arr[i] * 100)
//         } else {
//             // your number is odd
//             tracker.push(arr[i])
//         }
//     }
//     return tracker

    // return arr.map(function(el) {
    //     const isEven = el%2 === 0
    //     if (isEven) {
    //         // your number is even
    //         return el * 100
    //     } else {
    //         // your number is odd
    //         return el
    //     }
    // })
    // const e = []
    // arr.forEach(function(el) {
    //          const isEven = el%2 === 0
    //     if (isEven) {
    //         // your number is even
    //          e.push(el * 100)
    //     } else {
    //         // your number is odd
    //         e.push(el)
    //     }
    // })
    // return e
// }
// console.log(mapThrough(number))

// Write a function to see if a number given is divisible by 55

// function divisibleBy55 (number) {
//     let result = number % 55
//     if (result === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(divisibleBy55(110))

// function divisibleBy55(number) {
//     return (number % 55 === 0) ? true : false
// }
// console.log(divisibleBy55(50))

// const checkLength = "Waterfall"
// console.log(checkLength.length)

// function checkLength (string) {
//     return string.length
// }

// function concat (str1, str2) {
//     return str1 + " " + str2
// }

// console.log(concat("hello", "world"))

// Given an array, write a function that loops through the array and
// print each element in the second layer.
// const arr = [ [ 1, 2, 3, [ 4, 5, 6 ] ] , [ [ 7, 8, 9 ] , [ 10, 11, 12 ] ] , [ 'a', 'b', 'c' ]  ]
// Ex. output should be: 1, 2, 3, [4, 5, 6], [ 7, 8, 9 ] , [ 10, 11, 12 ], a, b, c

// function loopThrough (arr) {
    
// }
// loopThrough(arr)

// const user = {
//     name: "Jack",
//     email: "jack@gmail.com",
//     age: 25
// }

// function loopThroughObject (object) {
//     for (const key in object) {
//         console.log(`key is: ${key}`)
//         console.log(`the value is: ${object[key]}`)
//     }
// }
// loopThroughObject(user)

// while loop
// const arr = [ [ 1, 2, 3, [ 4, 5, 6 ] ] , [ [ 7, 8, 9 ] , [ 10, 11, 12 ] ] , [ 'a', 'b', 'c' ]  ]

// function myWhileLoop (arr) {
//     // for (let i = 0; i < arr.length; i++)
//     let i = 0;
//     while (i < arr.length) {
//         console.log(arr[i])
//         i++
//     }
// }

// myWhileLoop(arr)

// function myWhileLoop2 (num1, num2) {
//     let i = num1
//     while (i <= num2) {
//         console.log(i)
//         if (i === 10) {
//             break
//         }
//         i++
//     }
// }

// myWhileLoop2(5, 20)

// switch statement
// function customSwitch (dayOfWeek) {
//     switch (dayOfWeek) {
//         case "Monday":
//             console.log("The week just started.")
//             break
//         case "Wednesday":
//             // return "It's mid week"
//             console.log("It's mid week")
//             break
//         case "Sunday":
//             console.log("The weekend is over")
//             break
//         default:
//             console.log("That's not a proper day of week")
//     }
// }
// customSwitch("Sunday")

// const arr = n.map(function() {})
// console.log(arr)

// Write a function to determine the maximum amount of profit I can make within a 10 days period when I buy and sell a stock.
// The function takes in an array of stock prices. For ex: [ 315, 50, 314, 684, 100, 648, 132, 50, 98, 45 ]
// The array contains 10 numbers (stock prices). $315 is the price of the stock on the 1st day, $100 is the price of the stock on the 5th day and $45 is the price of the stock on the 10th day.
// Your function needs to return the maximum profit I can make from any 10 trading day period given a similar array of numbers like above. In the above example, the maximum profit 
// I can make is buy on the 2nd day at a price of $50 and sell on the 4th day at $684 for a profit of $684-$50 = $634.
// Hint: You might want to iterate/loop over the array and keep track of some variables outside of the loop, then return that variable at the under of your function.
const arr = [ 315, 50, 314, 684, 100, 648, 132, 50, 98, 45 ] // time complexity O(n^2)
function findMaxProfit(arr) {
    let maxProfit = 0
    let minPrice = arr[0] // 315 => 50
    
    arr.forEach((el, idx) => {
        if (el < minPrice) {
            minPrice = el
        }
        if (arr[idx+1] - minPrice > maxProfit) {
            maxProfit = arr[idx+1] - minPrice
        }
    })

    return maxProfit
}
console.log(findMaxProfit(arr))

// function findMaxProfit(arr) {
//     let maxProfit = 0
//     let minPrice = arr[0] // 315 => 50
//     let maxPrice = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (minPrice > arr[i]) {
//                 minPrice = arr[i]
//             }
//             if (maxPrice < arr[j]) {
//                 maxPrice = arr[j]
//             }
//             maxProfit = maxPrice - minPrice
//         }
//     }
//     return maxProfit
// }
