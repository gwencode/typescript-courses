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


// PICK & MAPPING MODIFIERS -> BUILD-IN TRYPESCRIPT UTILITIES

// // From T, pick a set of properties whose keys are in the union K
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

// //  Make all properties in T optional
// type Partial<T> = {
//   [P in keyof T]?: T[P]
// }

// // Make all properties in T required
// type Required<T> = {
//   [P in keyof T]-?: T[P]
// }

// // Make all properties in T readonly
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P]
// }


// TEMPLATE LITERAL TYPES & KEY MAPPING

type ArtFeatures = "cabin" | "tree" | "sunset"
type Colors =
  | "darkSienna"
  | "sapGreen"
  | "titaniumWhite"
  | "prussianBlue"

type ArtMethodNames = `paint${Capitalize<Colors>}${Capitalize<ArtFeatures>}`
// ^? type ArtMethodNames = "paintDarkSiennaCabin" | "paintDarkSiennaTree" |
// "paintDarkSiennaSunset" | "paintSapGreenCabin" | "paintSapGreenTree" |
// "paintSapGreenSunset" | "paintTitaniumWhiteCabin" | ... 4 more ... | "paintPrussianBlueSunset"

interface DataState {
  digits: number[]
  names: string[]
  flags: Record<"darkMode" | "mobile", boolean>
}

type DataSDK = {
  // The mapped type
  [K in keyof DataState as `set${Capitalize<K>}`]:
    (arg: DataState[K]) => void
}

function load(dataSDK: DataSDK) {
  dataSDK.setDigits([14])
  dataSDK.setFlags({ darkMode: true, mobile: false })
  // dataSDK.setFlags({ darkMode: true, mobil: false }) => SPELL ERROR
  // => Object literal may only specify known properties,
  // // but 'mobil' does not exist in type
  // 'Record<"darkMode" | "mobile", boolean>'.
  // Did you mean to write 'mobile'?
}
