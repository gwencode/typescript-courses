// Top Types

let flexible_any: any = 4
flexible_any = "Download some more ram"
// flexible_any = window.document
flexible_any = setTimeout

// flexible_any.it.is.possible.to.access.any.deep.property
// => No type error

let flexible_unknown: unknown = 4
flexible_unknown = "Download some more ram"
// flexible_unknown = window.document
flexible_unknown = setTimeout

// flexible_unknown.it.is.possible.to.access.any.deep.property
// => Type error

// Values with an unknown type cannot be used without first applying a type guard

let myUnknown: unknown = 14
// This code runs for { myUnknown| anything }
if (typeof myUnknown === "string") {
  // This code runs for { myUnknown| all strings }
  console.log(myUnknown, "is a string")
} else if (typeof myUnknown === "number") {
  // This code runs for { myUnknown| all numbers }
  console.log(myUnknown, "is a number")
} else {
  // this would run for "the leftovers" { myUnknown| anything except string or numbers }
  console.log(myUnknown, "the leftovers")

}

// Bottom Types: never

class Car {
  drive() {
    console.log("vroom")
  }
}
class Truck {
  tow() {
    console.log("dragging something")
  }
}

class Boat {
  isFloating() {
    return true
  }
}
type Vehicle = Truck | Car | Boat

function randomVehicle(): Vehicle {
  const randomNumber = Math.random()

  if (randomNumber < 0.33) {
    return new Truck()
  } else if (randomNumber < 0.67) {
    return new Car()
  } else {
    return new Boat()
  }
}

let myVehicle: Vehicle = randomVehicle()

class UnreachableError extends Error {
  constructor(_nvr: never, message: string) {
    super(message)
  }
}

// The exhaustive conditional
if (myVehicle instanceof Truck) {
  myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
  myVehicle.drive() // Car
} else {
  // NEITHER!
  // const neverValue: never = myVehicle // => Type Boat is not assignable to type never
  throw new UnreachableError(
    // @ts-expect-error // Uncomment to see the error
    myVehicle,
    `Unexpected vehicle type: ${myVehicle.constructor.name}` // UnreachableError: Unexpected vehicle type: Boat
  )
}
