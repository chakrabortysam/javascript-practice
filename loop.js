// if else loop 
let age = 18;
// if (age >17) {
//     console.log('You are eligible for voting')
// } else {
//     console.log('you are minor')
// }

let array = [1,2,3,4,5,56,57]
// for (let index = 0; index < array.length; index++) {
//     // const element = array[index];
//     console.log(array[index]);
// }

// console.log(array[5])

// for of loop
// for (const i of array) {
//     console.log(i)
// }
// for in loop

// for (const index in array) {
    
//     // const element = array[index];
//     console.log(array[index])
    
// }


// for each loop
// array.forEach((num, index)=> {
//     console.log(num + '->' + index)
// })


// map 
let u = array.map((item) => {
    return item*2
})
// console.log(u)



// filter method
let array1 = [1,2,3,4,5,6,7]

let evenNumbers = array1.filter((num)=>{
    return num>2
})
// console.log(evenNumbers, "filter process")

// find method 
let evenNumber = array1.find((num)=>{
    return num>2
})
// console.log(evenNumber, "find process")

// reduce method
const sum = array1.reduce((total, num)=>{
    return total+num
},0)
// console.log(sum)