import tableCategories from './bmi-table'

const loadIndex = genre => weight => {
  return tableCategories[ genre ]
    .reduce((acc, fn, index) => {
      if (fn(weight)) {
        acc = index
      }
      return acc
    }, 0)
}

export default loadIndex
