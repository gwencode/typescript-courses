// An interface is a way of defining an object type.
// An “object type” can be thought of as, “an instance
// of a class could conceivably look like this”.

interface UserInfo {
  name: string
  email: string
}

function printUserInfo(info: UserInfo) {
  console.log(info.name)
  console.log(info.email)
}

const user = {
  name: "Mike North",
  email: "mike@gmail.com",
}
// printUserInfo(user)

// Interface Inheritance

interface Animal {
  isAlive(): boolean
}
interface Mammal extends Animal {
  getFurOrHairColor(): string
}
interface Dog extends Mammal {
  getBreed(): string
}
function careForDog(dog: Dog) {
  dog.getBreed
}

// Implements

// interface AnimalLike {
//   eat(food: string): void
// }

// class Dog implements AnimalLike {
//   bark() {
//     return "woof"
//   }
//   eat(food: string): string {
//     return "eating " + food
//   }
// }

// const aDog = new Dog()
// console.log(aDog.bark())
// console.log(aDog.eat("bacon"))


class LivingOrganism {
  isAlive() {
    return true
  }
}
interface AnimalLike {
  eat(food: string): void
}
interface CanBark {
  bark(): string
}

// Multiple Implements // Extends and Implements at the same time

class Dog
  extends LivingOrganism
  implements AnimalLike, CanBark
{
  bark() {
    return "woof"
  }
  eat(food: string): string {
    return "eating " + food
  }
}

const aDog = new Dog()
console.log(aDog.bark())
console.log(aDog.eat("bacon"))
console.log(aDog.isAlive())
