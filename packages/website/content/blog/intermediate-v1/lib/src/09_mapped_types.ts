type MyFruit = {
  name: string
  color: string
  mass: number
}

// mapped type
type ExampleRecord = { [FruitKey in "apple" | "cherry"]: MyFruit }

function printFruitCatalog(fruitCatalog: ExampleRecord) {
  fruitCatalog.cherry
  fruitCatalog.apple
  //            ^? (property) apple: MyFruit
  // fruitCatalog.pineapple // => La propriété 'pineapple' n'existe pas sur le type 'ExampleRecord'.ts(2339)
}


// GENERALIZE:

// - type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit }
// + type MyRecord<KeyType, ValueType> = { [Key in KeyType]: ValueType }

type MyRecord<KeyType extends string, ValueType> = {
  [Key in KeyType]: ValueType
}
