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
  chargeVoltage?: number // optional property
}

let honda = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}

let tesla = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  chargeVoltage: 120
}
// console.log(honda.make)

/**
 * Print information about a car to the console
 * @param car - the car to print
 */
function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number // optional property
}) {
  let str = `${car.make} ${car.model} (${car.year})`

  if (typeof car.chargeVoltage !== "undefined") {
    str += `// ${car.chargeVoltage}v`
  }

  console.log(str)
}

printCar(honda)
printCar(tesla)
printCar({
  make: 'Ford',
  model: 'F-150',
  year: 2020,
  // color: 'blue' // Excess Property Check => Object literal may only specify known properties, and 'color' does not exist in type
})

// Index Signatures

// const phones = {
//   home: { country: "+1", area: "211", number: "652-4515" },
//   work: { country: "+1", area: "670", number: "752-5856" },
//   fax: { country: "+1", area: "322", number: "525-4357" },
// }

const phones: {
  [k: string]: {
    country: string
    area: string
    number: string
  }
} = {}

phones.fax

// Arrays

const carsArray: {
  make: string
  model: string
  year: number
}[] = []

const cars = [
  {
    make: 'Ford',
    model: 'F-150',
    year: 2020
  }
]

// Tuples

const carTuple: [number, string, string] = [
  2020,
  'Ford',
  'F-150',
]

// Limitations
// Limitations of tuples don't prevent pop and push

const numPair: [number, number] = [4, 5]
numPair.push(6) // [4, 5, 6]
console.log(numPair)

numPair.pop() // [4, 5]
console.log(numPair)

numPair.pop() // [4]
console.log(numPair)

numPair.pop() // []
console.log(numPair)
