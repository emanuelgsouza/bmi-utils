import { includes } from 'lodash-es'

import * as GENRES from './genres'

/**
 * @method isValidGenre
 * @param  {String} genre
 * @return {Boolean}
 */
const isValidGenre = genre => includes(Object.values(GENRES), genre)

export default isValidGenre