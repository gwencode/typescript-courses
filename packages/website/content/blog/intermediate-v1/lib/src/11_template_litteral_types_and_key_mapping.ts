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
