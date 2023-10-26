export type UserContactInfo = {
  name: string
  email: string
}

type UserInfoOutcomeError = ["error", Error]
type UserInfoOutcomeSuccess = [
  "success",
  { name: string; email: string }
]
export type UserInfoOutcome =
  | UserInfoOutcomeError
  | UserInfoOutcomeSuccess

// Alias Inheritance
// You can create type aliases that combine
// existing types with new behavior by using Intersection (&) types.
export type SpecialDate = Date & { getReason(): string }
