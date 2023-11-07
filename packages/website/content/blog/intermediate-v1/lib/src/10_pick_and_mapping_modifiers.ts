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
