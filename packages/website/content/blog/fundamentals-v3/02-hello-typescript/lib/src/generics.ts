interface PhoneInfo {
  customerId: string
  areaCode: string
  num: string
}

const phoneList = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
]
/// ---cut---
function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  const dict: { [k: string]: T } = {}

  list.forEach((element) => {
    const dictKey = idGen(element)
    dict[dictKey] = element
  })

  return dict
}

const dict1 = listToDict(
  //             ^?
  [{ name: "Mike" }, { name: "Mark" }],
  (item) => item.name
)
console.log(dict1)
dict1.Mike
const dict2 = listToDict(phoneList, (p) => p.customerId)
//                  ^?
dict2.fax
console.log(dict2)

// Introduction : A motivating use case

// interface PhoneInfo {
//   customerId: string
//   areaCode: string
//   num: string
// }

// const phoneList = [
//   { customerId: "0001", areaCode: "321", num: "123-4566" },
//   { customerId: "0002", areaCode: "174", num: "142-3626" },
//   { customerId: "0003", areaCode: "192", num: "012-7190" },
//   { customerId: "0005", areaCode: "402", num: "652-5782" },
//   { customerId: "0004", areaCode: "301", num: "184-8501" },
// ]

// /// ---cut---
// function listToDict(
//   list: PhoneInfo[], // take the list as an argument
//   idGen: (arg: PhoneInfo) => string // a callback to get Ids
// ): { [k: string]: PhoneInfo } {
//   // create an empty dictionary
//   const dict: { [k: string]: PhoneInfo } = {}

//   // Loop through the array
//   list.forEach((element) => {
//     const dictKey = idGen(element)
//     dict[dictKey] = element // store element under key
//   })

//   // return the dictionary
//   return dict
// }

// console.log(
//   listToDict(phoneList, (item) => item.customerId)
// )
