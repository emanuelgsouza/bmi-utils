import { inRange, gt, lt, toNumber } from 'lodash-es'
import * as GENRES from './genres'

export default {
  [ GENRES.MALE ]: {
    0: imc => lt(toNumber(imc), 0),
    1: imc => inRange(toNumber(imc), 0, 20.7),
    2: imc => inRange(toNumber(imc), 20.7, 26.4),
    3: imc => inRange(toNumber(imc), 26.4, 27.8),
    4: imc => inRange(toNumber(imc), 27.8, 31.1),
    5: imc => gt(toNumber(imc), 31.1)
  },
  [ GENRES.FEMALE ]: {
    0: imc => lt(toNumber(imc), 0),
    1: imc => inRange(toNumber(imc), 0, 19.1),
    2: imc => inRange(toNumber(imc), 19.1, 25.8),
    3: imc => inRange(toNumber(imc), 25.8, 27.3),
    4: imc => inRange(toNumber(imc), 27.3, 32.3),
    5: imc => gt(toNumber(imc), 32.3)
  }
}
