import tableCategories from './bmi-table'

const loadIndex = genre => weight => {
  return Object
    .values(tableCategories[ genre ])
    .reduce((acc, fn, index) => {
      if (fn(weight)) {
        acc = index
      }
      return acc
    }, 0)
}

export default loadIndex
