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
