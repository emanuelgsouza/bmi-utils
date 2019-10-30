import tableCategories from './bmi-table'

/**
 * @method loadIndex
 * @param  {String} genre
 * @return {Function}
 */
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
