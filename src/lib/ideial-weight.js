import * as GENRES from '../utils/genres'
import isValidGenre from '../utils/is-valid-genre'
import { isNumber, isEmpty } from '../utils/helpers'

/**
 * @type{Object<Array>}
 */
const ideialIMC = {
  [ GENRES.MALE ]: [ 20.7, 26.39 ],
  [ GENRES.FEMALE ]: [ 19.1, 25.79 ]
}

/**
 * @method getBestWeight
 * @param  {Number} height
 * @param  {Number} ideialIMC
 * @return {String}
 */
const getBestWeight = (height, ideialIMC) => {
  const result = ideialIMC * (height * height)
  return result.toFixed(2)
}

/**
 * @method ideialWeight
 * @param  {Number} height
 * @param  {String} genre  can be 'F' (female) or 'M' (male)
 * @return {Object}        { min, max } // min and max weights
 */
const ideialWeight = (height, genre) => {
  const result = {
    min: 0,
    max: 0
  }

  if (!isNumber(height) || isEmpty(genre)) {
    return result
  }

  if (!isValidGenre(genre)) {
    return result
  }

  return {
    min: getBestWeight(height, ideialIMC[genre][0]),
    max: getBestWeight(height, ideialIMC[genre][1])
  }
}

export default ideialWeight
