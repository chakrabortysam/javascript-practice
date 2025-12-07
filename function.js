function addTwoNumbers(a, b) {
    return a+b;
}

// console.log(addTwoNumbers(1,2))

// arrow function
const multiplyTwoNumbers = (a, b) => {
    return a*b;
}
let result = multiplyTwoNumbers(2, 3)
// console.log(result);

// splice method
let arr = [1,2,3,4,5];
// let splicedArray = arr.splice(0,2)
// console.log(splicedArray)

let replacedArray = arr.splice(1,0, "joydip")
// console.log(arr)

// string concatenate
let firstName = "Sam";
let lastName = "Chak";
// let fullName = firstName + ' ' + lastName;
// console.log(fullName)

// ****template literals
let greet = `${firstName} ${lastName}`
// console.log(greet)

// array concatenate
let arr1 = [1,2,3];
let arr2 = [4,5,6]
// exmaple output [1,2,3,4,5,6]

let newArray = [...arr1, ...arr2]
// console.log(...arr1)



// hoisting
// console.log(x)
// var x = 10;