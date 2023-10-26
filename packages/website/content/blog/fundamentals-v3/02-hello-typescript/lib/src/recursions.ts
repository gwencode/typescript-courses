type NestedNumbers = number | NestedNumbers[]

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221]

if (typeof val !== "number") {
  val.push(41)
  // val.push("this will not work") // 🚨 Argument of type 'string' is not assignable to parameter of type 'NestedNumbers
}
