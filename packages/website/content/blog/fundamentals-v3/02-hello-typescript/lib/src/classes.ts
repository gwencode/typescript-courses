class Animal {
  eat(food: string): string {
    return "eating " + food
  }
}
class Dog extends Animal {
  bark(): string {
    return "woof"
  }
}

const d = new Dog()
console.log(d.eat("bacon"))
console.log(d.bark())
