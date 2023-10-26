// An interface is a way of defining an object type.
// An “object type” can be thought of as, “an instance
// of a class could conceivably look like this”.

interface UserInfo {
  name: string
  email: string
}

function printUserInfo(info: UserInfo) {
  console.log(info.name)
  console.log(info.email)
}

const user = {
  name: "Mike North",
  email: "mike@gmail.com",
}

printUserInfo(user)
