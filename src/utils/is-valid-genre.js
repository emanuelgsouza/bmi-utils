import * as GENRES from './genres'

/**
 * @method isValidGenre
 * @param  {String} genre
 * @return {Boolean}
 */
const isValidGenre = genre => Object.values(GENRES).includes(genre)

export default isValidGenre
