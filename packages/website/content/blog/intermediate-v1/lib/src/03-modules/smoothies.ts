import createBanana = require("./fruits")
const banana = createBanana()

console.log(banana)

// Particularly if you use a bundler like webpack, parcel or snowpack,
// you may end up importing things that aren’t .js or .ts files
import img from "./file.png"
// => Need to do a module declaration in global.d.ts file
