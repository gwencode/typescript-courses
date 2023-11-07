interface Car {
  make: string
  model: string
  year: number
  color: {
    red: string
    green: string
    blue: string
  }
}

let carColor: Car["color"]
//    ^?
// let carColor: {
//   red: string;
//   green: string;
//   blue: string;
// }

// let carColor2: Car["not-something-on-car"]
                    // ^
// La propriété 'not-something-on-car' n'existe pas sur le type 'Car'

let carColorRedComponent: Car["color"]["red"]
//   ^? let carColorRedComponent: string
