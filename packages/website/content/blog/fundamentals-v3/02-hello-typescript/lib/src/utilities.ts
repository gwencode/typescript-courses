import { UserContactInfo, UserInfoOutcome, SpecialDate } from "./types"

function printContactInfo(info: UserContactInfo) {
  console.log(info)
  console.log(info.email)
}

const painter = {
  name: "Robert Ross",
  email: "bross@pbs.org",
  favoriteColor: "Titanium White",
}

printContactInfo(painter) // totally fine

function maybeGetUserInfo(): UserInfoOutcome {
  // implementation is the same in both examples
  if (Math.random() > 0.5) {
    return [
      "success",
      { name: "Mike North", email: "mike@example.com" },
    ]
  } else {
    return [
      "error",
      new Error("The coin landed on TAILS :("),
    ]
  }
}

// console.log(maybeGetUserInfo())

// Alias Inheritance

const newYearsEve: SpecialDate = {
  ...new Date(),
  getReason: () => "Last day of the year",
}
console.log(newYearsEve.getReason())
