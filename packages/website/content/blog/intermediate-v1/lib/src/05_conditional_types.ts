// CONDITIONAL TYPES

class Grill {
  startGas() {}
  stopGas() {}
}
class Oven {
  setTemperature(degrees: number) {}
}

type CookingDevice<T> = T extends "grill" ? Grill : Oven
// condition => T extends "grill"

let device1: CookingDevice<"grill">
//   ^? let device1: Grill
let device2: CookingDevice<"oven">
//   ^? let device2: Oven


// CONDITIONAL TYPES QUIZ

type answer_1 = 64 extends number ? true : false
//     ^? true
type answer_2 = number extends 64 ? true : false
//     ^? false
type answer_3 = string[] extends any ? true : false
//     ^? true
type answer_4 = string[] extends any[] ? true : false
//     ^? true
type answer_5 = never extends any ? true : false
//     ^? true
type answer_6 = any extends any ? true : false
//     ^? true
// prettier-ignore
type answer_7 = Date extends { new (...args: any[]): any } ?  true : false
//     ^? false

// prettier-ignore
type answer_8 = typeof Date extends { new (...args: any[]): any } ?  true : false
//     ^? true
