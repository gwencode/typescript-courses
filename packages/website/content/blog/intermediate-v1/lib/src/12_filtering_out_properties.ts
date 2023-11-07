// FILTERING OUT PROPERTIES

// example using Extract and a template literal type to filter
// for only those members of window.document that begin with "query":
type DocKeys = Extract<keyof Document, `query${string}`>
type KeyFilteredDoc = { [K in DocKeys]: Document[K] }
//  ^?
// type KeyFilteredDoc = {
//     queryCommandEnabled: (commandId: string) => boolean;
//     queryCommandIndeterm: (commandId: string) => boolean;
//     queryCommandState: (commandId: string) => boolean;
//     queryCommandSupported: (commandId: string) => boolean;
//     queryCommandValue: (commandId: string) => string;
//     querySelector: {
//         ...;
//     };
//     querySelectorAll: {
//         ...;
//     };
// }

// Get keys of type T whose values are assignable to type U
type FilteredKeys<T, U> = {
  [P in keyof T]: T[P] extends U ? P : never
}[keyof T] &
  keyof T

type RelevantDocumentKeys = FilteredKeys<
  Document,
  (...args: any[]) => Element | Element[]
>

type ValueFilteredDoc = Pick<Document, RelevantDocumentKeys>
//   ^?
// type ValueFilteredDoc = {
//   onfullscreenchange: (this: Document, ev: Event) => any;
//   onfullscreenerror: (this: Document, ev: Event) => any;
//   onpointerlockchange: (this: Document, ev: Event) => any;
//   ... 110 more ...;
//   querySelector: {
//       ...;
//   };
// }

function load(doc: ValueFilteredDoc) {
  doc.querySelector("input")
  //  ^? (method) querySelector<"input">(selectors: "input"): HTMLInputElement (+4 overloads)
}
