// class Animal {
//   eat(food: string): string {
//     return "eating " + food
//   }
// }
// class Dog extends Animal {
//   bark(): string {
//     return "woof"
//   }
// }

// const d = new Dog()
// console.log(d.eat("bacon"))
// console.log(d.bark())

class Voiture {
  make: string
  model: string
  year: number
  constructor(make: string, model: string, year: number) {
    this.make = make
    this.model = model
    this.year = year
  }
}

let sedan = new Voiture("Honda", "Accord", 2017)

// sedan.activateTurnSignal("left") // not safe!
// => Property 'activateTurnSignal' does not exist on type 'Voiture'.

// new Voiture(2017, "Honda", "Accord") // not safe!
// => Argument of type 'number' is not assignable to parameter of type 'string'.

// Param Properties

// class Drive {
//   make: string
//   model: string
//   year: number
//   constructor(make: string, model: string, year: number) {
//     this.make = make
//     this.model = model
//     this.year = year
//   }
// }

// +> TypeScript provides a more concise syntax for code like this,
// through the use of param properties:
class Drive {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}
}

const myCar = new Drive("Honda", "Accord", 2017)
myCar.make
myCar.year
