// EXTRACT

type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | { red: number; green: number; blue: number }

type StringColors = Extract<FavoriteColors, string>
//    ^? type StringColors = "dark sienna" | "van dyke brown" | "yellow ochre"
//    | "sap green" | "titanium white" | "phthalo green" | "prussian blue" | "cadium yellow"

type ObjectColors = Extract<FavoriteColors, { red: number }>
//    ^? type ObjectColors = { red: number; green: number; blue: number; }

// prettier-ignore
type TupleColors = Extract<FavoriteColors, [number, number, number]>
//     ^? type TupleColors = [number, number, number]
type ArrayColors = Extract<FavoriteColors, number[]>
//     ^? type ArrayColors = [number, number, number]


// EXCLUDE

type NonStringColors = Exclude<FavoriteColors, string>
//    ^? type NonStringColors = [number, number, number] | { red: number; green: number; blue: number; }
