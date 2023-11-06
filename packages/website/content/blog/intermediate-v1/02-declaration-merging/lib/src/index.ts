// How to tell what’s on an identifier

const is_a_value = 4
type is_a_type = {}
namespace is_a_namespace {
  const foo = 17
}

// how to test for a value
const x = is_a_value // the value position (RHS of =).

// how to test for a type
const y: is_a_type = {} // the type position (LHS of = ).

// how to test for a namespace (hover over is_a_namespace symbol)
is_a_namespace

// A look back on class

class Fruit {
  name?: string
  mass?: number
  color?: string
  static createBanana(): Fruit {
    return { name: "banana", color: "yellow", mass: 183 }
  }
}

// how to test for a value
const valueTest = Fruit // Fruit is a value!
valueTest.createBanana

// how to test for a type
let typeTest: Fruit = {} as any // Fruit is a type!
typeTest.color
