import * as GENRES from './genres'
import { gte, lte, inRange } from './helpers'

export default {
  [ GENRES.MALE ]: {
    0: imc => lte(Number(imc), 0),
    1: imc => inRange(Number(imc), 0.1, 20.7),
    2: imc => inRange(Number(imc), 20.7, 26.4),
    3: imc => inRange(Number(imc), 26.4, 27.8),
    4: imc => inRange(Number(imc), 27.8, 31.1),
    5: imc => gte(Number(imc), 31.10)
  },
  [ GENRES.FEMALE ]: {
    0: imc => lte(Number(imc), 0),
    1: imc => inRange(Number(imc), 0.1, 19.1),
    2: imc => inRange(Number(imc), 19.1, 25.8),
    3: imc => inRange(Number(imc), 25.8, 27.3),
    4: imc => inRange(Number(imc), 27.3, 32.3),
    5: imc => gte(Number(imc), 32.3)
  }
}
