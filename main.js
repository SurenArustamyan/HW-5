// 1) Write a recursive function to determine whether all digits of the number are odd or not.

// function oddFunc(num){
//     let lastDigit = num % 10
//     if(num === 0){
//         return true
//     }else if(lastDigit % 2 === 0){
//         return false
//     }
//     num = (num - lastDigit) / 10
//     return oddFunc(num)
// }
// console.log(oddFunc(7791));



// 2) Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

// function minPositive(arr,min = arr[0]){
//     let first = arr.shift()
//     if(arr.every((elem) => elem < 0) && !arr.filter((elem) => elem)){
//         return -1
//    }else if(arr.length === 0){
//         return min
//     }else if(first < 0){
//         arr.filter((elem) => elem)
//     }else if( first >= 0 && first < min){
//         min = first
//     }
//     return minPositive(arr,min);
// }

// console.log(minPositive([-5, -9, -111, -1000, -7]))
// WORKING WITH A PROBLEM



//  5) Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

// function myFlat(arr){
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             newArr = newArr.concat(myFlat(arr[i]))
//         }else{
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(myFlat([14, [1, [[[3, []]], 1], 0]]));



// 7) Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

// function giveSum(n){
//     lastDigit = n % 10
//     n = (n - lastDigit) / 10
//     sum = n + lastDigit
//     if(sum < 10){
//         return sum
//     }else{
//         return giveSum(n)
//     }
// }

// console.log(giveSum(999999999999));
