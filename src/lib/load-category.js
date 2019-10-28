import { isNumber, isEmpty } from 'lodash-es'

import loadIndex from '../utils/load-index'
import messages from '../utils/messages'
import isValidGenre from '../utils/is-valid-genre'

/**
 * @method loadCategory
 * @param  {String} genre
 * @param  {Number} imc 
 * @param  {String} translation can be 'pt-BR' or 'en-US'
 * @return {String}
 */
const loadCategory = (genre, imc, translation = 'en-US') => {
  if (!isValidGenre(genre) || !isNumber(imc) || isEmpty(translation)) {
    return ''
  }

  const loadByGenre = loadIndex(genre)
  const index = loadByGenre(imc)
  return messages[translation][index] || ''
}

export default loadCategory
