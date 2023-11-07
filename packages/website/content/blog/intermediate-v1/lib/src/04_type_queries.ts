// Keyof

type DatePropertyNames = keyof Date

type DateStringPropertyNames = DatePropertyNames & string
//    ^? type DateStringPropertyNames = "toString" | "toDateString" | "toTimeString" | "toLocaleString"
//    | "toLocaleDateString" | "toLocaleTimeString" | "valueOf" | "getTime"
//    | "getFullYear" | "getUTCFullYear" | ... 33 more ... | "getVarDate"

type DateSymbolPropertyNames = DatePropertyNames & symbol
//    ^? type DateSymbolPropertyNames = typeof Symbol.toPrimitive


// Typeof

async function main() {
  const apiResponse = await Promise.all([
    fetch("https://example.com"),
    Promise.resolve("Titanium White"),
  ])

  type ApiResponseType = typeof apiResponse
  //    ^? type ApiResponseType = [Response, string]
}

class Fruit {
  constructor(
    public readonly name: string,
    public readonly mass: number,
    public readonly color: string
  ) {}

  static createBanana() {
    return new Fruit("banana", 108, "yellow")
  }
}

const MyFruit = Fruit
//     ^? const MyFruit: typeof Fruit
const banana = Fruit.createBanana()
//     ^? const banana: Fruit

// => MyFruit, the class (constructor) is of type typeof Fruit, where instances are of type Fruit
