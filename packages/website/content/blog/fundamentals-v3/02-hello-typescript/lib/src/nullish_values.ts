// Null
// null means: there is a value, and that value is nothing.

const userInfo = {
  name: "Mike",
  email: "mike@example.com",
  secondaryEmail: null, // user has no secondary email
}

// Undefined
// undefined means the value isn’t available (yet?)

type Form = {
  createdAt: Date
  data: number[]
  completedAt?: Date
}

const formInProgress: Form = {
  createdAt: new Date(),
  data: [1, 2, 3],
  completedAt: undefined, //
}
function submitForm() {
  formInProgress.completedAt = new Date()
}

submitForm()
console.log(formInProgress);

// Void
// void should exclusively be used to describe that a function’s return value should be ignored

function logMessage(message: string): void {
  console.log(message)
}

console.log(`console.log returns nothing.`)

// Non-null assertion operator

// @errors: 2532 18048
type GroceryCart = {
  fruits?: { name: string; qty: number }[]
  vegetables?: { name: string; qty: number }[]
}

const cart: GroceryCart = {}

// cart.fruits.push({ name: "kumkuat", qty: 1 })
//   ^?
// cart.fruits!.push({ name: "kumkuat", qty: 1 })
