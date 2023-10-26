/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n))
}

/**
 * Add three numbers
 * @param a first number
 * @param b second
 */
export async function addNumbers(a: number, b: number) {
  await timeout(500)
  return a + b
}

//== Run the program ==//
;(async () => {
  console.log(await addNumbers(3, 4))
})()

// Variables and Values

let age = 6; // => let age: number
const majority = 18; // => const majority: 18

// between 500 and 1000
const RANDOM_WAIT_TIME =
  Math.round(Math.random() * 500) + 500

let startTime = new Date()
// let endTime // => let endTime: any
let endTime: Date // => let endTime: Date

setTimeout(() => {
  endTime = new Date()
}, RANDOM_WAIT_TIME)

// function add(a: number, b: number) {
//   return a + b
// }

// const result = add(3, 4) // => const result: any
// const p = new Promise(result)
// => Argument of type 'number' is not assignable to parameter of type
// '(resolve: (value: unknown) => void, reject: (reason?: any) => void) => void | PromiseLike<void>'.

// Function Return Types

function add(a: number, b: number): number {
  return a + b
}

// Objects, Arrays and Tuples
let car : {
  make: string
  model: string
  year: number
}

let honda = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}

console.log(honda.make)
