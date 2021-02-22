// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// will describe when divByThree arguement is given
describe("when divByThree is called", () => {
  it("returns 'is divisible by three' if number is divisible by three", () => {
    //arrange -
    const num1 = 15
    //act -
    const actualResult = divByThree(num1)
    //assert -
    expect(actualResult).toEqual('15 is divisible by three')
  })
  it("returns '0 is divisible by three' if number is divisible by three", () => {
    const num2 = 0
    const actualResult = divByThree(num2)
    expect(actualResult).toEqual('0 is divisible by three')
  })
  it("returns 'is not divisible by three' if number is not divisible by three", () => {
    const num3 = -7
    const actualResult= divByThree(num3)
    expect(actualResult).toEqual('-7 is not divisible by three')
  })
})
//will check if divisble by 3 using expect with const variable set up


var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


// b) Create the function that makes the test pass.

//create a funtion that takes a number as an arguement
//check number to see if it is divisible by 3 using modulo
//use if else statement to determine possible outcomes
  //if given number is divisible by three -- return is divisible
  //else return is not divisible
const divByThree = (num) => {
  if(num % 3 === 0){
    return `${num} is divisible by three`
  } else{
    return `${num} is not divisible by three`
  }
}

console.log(divByThree(15));
console.log(divByThree(0));
console.log(divByThree(-7));

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//will describe when arrayCaps is called
//expect upper case letters on only first letters of each string in arrayCaps
describe("when arrayCaps is called", () => {
  let randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  let capResult1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
  let capResult2 = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
  it("returns array with capital letters at beginning of strings", () => {
    expect(arrayCaps(randomNouns1)).toEqual(capResult1)
  })
  it("returns array with capital letters at beginning of strings", () => {
    expect(arrayCaps(randomNouns2)).toEqual(capResult2)
  })
})

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.

//create a function with an array as an arguement
//set a variable that will map the arrays
//the return of the map will have toUpperCase for only the index of 0 and will join back with the vaule with substring.

const arrayCaps = (array) => {
  let newArrayToCaps = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
  return newArrayToCaps
}

console.log(arrayCaps(randomNouns1));
console.log(arrayCaps(randomNouns2));

// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//this test has helped me to find that when I used sort, it sorts just the positive number value -- not the negative values causing me to refactor my function.
//
describe("when numOnly is called", () => {
  var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
  var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
  let numOnlyResult1 = [-8, 0, 8, 46, 59, 107]
  let numOnlyResult2 = [-9, 0, 3, 18, 94]
  it("returns an array of numbers only in ascending order", () => {
    expect(numOnly(mixedDataArray1)).toEqual(numOnlyResult1)
  })
  it("returns an array of numbers only in ascending order", () => {
    expect(numOnly(mixedDataArray2)).toEqual(numOnlyResult2)
  })
})

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]


// b) Create the function that makes the test pass.

//make a function that takes an array as an arguement with multiple data types
//use filter typeof to determine only number data types

//use sort to organize numbers in array from least to greatest --- having a hard time with this sorting properly.  Negative numbers keep appearing with the positive numbers making the test fail.  Have tried to refactor this multiple times to solve this problem and have come up with errors each time.

//return values as a new array

const numOnly = (array) => {
  let numArray = array.filter (value => {
    if (typeof value === 'number')
      return value
      })
    for(let i = 0; i < numArray.length; i++)
      if (numArray < 0){
        return numArray[0]
        }
      if (numArray > 0){
        return numArray.sort(1)
      }
  }

console.log(numOnly(mixedDataArray1));
console.log(numOnly(mixedDataArray2));


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("when vowelFinder is called", () => {
  var vowelTester1 = "learn"
  var vowelTester2 = "academy"
  var vowelTester3 = "challenge"
  it("returns with the first vowels index", () =>{
    expect(vowelFinder(vowelTester1)).toEqual(1)
  })
  it("returns with the first vowels index", () =>{
    expect(vowelFinder(vowelTester2)).toEqual(0)
  })
  it("returns with the first vowels index", () =>{
    expect(vowelFinder(vowelTester3)).toEqual(2)
  })
})

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2





// b) Create the function that makes the test pass.

//create a function that takes a string as an arguement
//split string into array
//use indexOf to find the vowel using a variable that stores vowels.
//return result

//I tried to refactor this many times, went tried to write a for loop (commented below), cannot seem to get this test to pass no matter how I try to refactor it.  I know i am close, but just don't know what i am missing.  Have spent hours on this one and number 3.....

// const vowelFinder = (string) => {
//   let vowelArray = string.split("")
//   let vowels = ['a','e','i','o','u']
//   let firstVowelArray = vowelArray.findIndex(vowels => {
//     return
//   })
//   return firstVowelArray
// }
//
// console.log(vowelFinder(vowelTester1));
// console.log(vowelFinder(vowelTester2));
// console.log(vowelFinder(vowelTester3));

const vowelFinder = (string) => {
  let vowelArray = string.split("")
  for(let i = 0; i < vowelArray.length; i++){
    if(vowelArray[i] === ['a','e','i','o','u']){
      return vowelArray.indexOf(i)
    }}
}

console.log(vowelFinder(vowelTester1));
console.log(vowelFinder(vowelTester2));
console.log(vowelFinder(vowelTester3));
