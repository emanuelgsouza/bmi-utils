/**
 * @method lte
 * @param  {Number} number
 * @param  {Number} other
 * @return {Boolean}
 */
export const lte = (number, other) => number <= other

/**
 * @method gte
 * @param  {Number} number
 * @param  {Number} other
 * @return {Boolean}
 */
export const gte = (number, other) => number >= other

/**
 * @method isNumber
 * @param  {Any} value
 * @return {Boolean}
 */
export const isNumber = value => typeof value === 'number'

/**
 * @method inRange
 * @param  {Number} value
 * @param  {Number} start
 * @param  {Number} end
 * @return {Boolean}
 */
export const inRange = (value, start, end) => value >= start && value < end

/**
 * @method isEmpty
 * @param  {Any} value
 * @return {Boolean}
 */
export const isEmpty = value => {
  if (value === null) return true

  if (value === undefined) return true

  if (Object.prototype.hasOwnProperty.call(value, 'length')) {
    return value.length === 0
  }

  return false
}
