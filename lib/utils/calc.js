import { lte } from 'lodash'

/**
 * @method imcCalc
 * @param  {Number} heigth
 * @param  {Number} weight
 * @return {Number}
 */
const imcCalc = (weight, heigth) => {
  if (lte(weight, 0) || lte(heigth, 0)) {
    return 0
  }

  const result = weight / Math.pow(heigth, 2)
  return result.toFixed(2)
}

export default imcCalc
