// EXAMPLE

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

// ADVANCED MAPPED TYPES

// EXAMPLE

type ExPartOfWindow = {
  [Key in
  | "document"
  | "navigator"
  | "setTimeout"]: Window[Key]
}
// ^? => type ExPartOfWindow = {
//   document: Document;
//   navigator: Navigator;
//   setTimeout: (handler: TimerHandler, timeout?: number, ...arguments: any[]) => number;
// }

// GENERALIZE TYPE PARAMS:

type PickWindowProperties<Keys extends keyof Window> = {
  [Key in Keys]: Window[Key]
}

type PartOfWindow = PickWindowProperties<"document" | "navigator" | "setTimeout">
//   ^? type PartOfWindow = {
//     document: Document;
//     navigator: Navigator;
//     setTimeout: (handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]) => number;
// }

// GENERALIZE TYPE :

type PickProperties<ValueType, Keys extends keyof ValueType> = {
  [Key in Keys]: ValueType[Key]
}

type PartOfWindow2 = PickProperties<Window, "document" | "navigator" | "setTimeout">
// ^? type PartOfWindow2 = {
//     readonly document: Document;
//     readonly navigator: Navigator;
//     setTimeout: (handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]) => number;
// }
