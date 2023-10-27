interface HasId {
  id: string
}
interface Dict<T> {
  [k: string]: T
}

// => Will not work :
// function listToDict(list: HasId[]): Dict<HasId> {
function listToDict<T extends HasId>(list: T[]): Dict<T> {
  const dict: Dict<T> = {}

  list.forEach((item) => {
    dict[item.id] = item
  })

  return dict
}
