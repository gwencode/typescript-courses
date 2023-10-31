interface TwoNumberCalculation {
  (x: number, y: number): number
}
// Equivalent to
type TwoNumberCalc = (x: number, y: number) => number

const add: TwoNumberCalculation = (a, b) => a + b;

const subtract: TwoNumberCalc = (a, b) => a - b;

// Void vs Undefined

function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000)
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000)
}

const values: number[] = []
// invokeInFourSeconds(() => values.push(4))
// => Type 'number' is not assignable to type 'undefined'.
invokeInFiveSeconds(() => values.push(4))

// Construct signatures

interface DateConstructor {
  new (value: number): Date
}

let MyDateConstructor: DateConstructor = Date
const d = new MyDateConstructor()

type FormSubmitHandler = (data: FormData) => void
type MessageHandler = (evt: MessageEvent) => void

// Function overloads

function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
)
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
)
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

const myFrame = document.getElementsByTagName("iframe")[0]
//     ^?
const myForm = document.getElementsByTagName("form")[0]
//     ^?
handleMainEvent(myFrame, (val) => {
  //        ^?
})
handleMainEvent(myForm, (val) => {
  //        ^?
})

// this Types

function myClickHandler(
  this: HTMLButtonElement,
  event: Event
) {
  this.disabled = true
  //   ^?
}
myClickHandler
// ^?
const myButton = document.getElementsByTagName("button")[0]
const boundHandler = myClickHandler.bind(myButton)
  //    ^?
boundHandler(new Event("click")) // bound version: ok
myClickHandler.call(myButton, new Event("click")) // also ok
