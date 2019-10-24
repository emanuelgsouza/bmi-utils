import * as GENRE from '../categories/genres'

const ideialIMC = {
  [ GENRE.MALE ]: [ 20.7, 26.39 ],
  [ GENRE.FEMALE ]: [ 19.1, 25.79 ]
}

const calc = (height, ideialIMC) => {
  const result = ideialIMC * (Math.pow(height, 2))
  return result.toFixed(2)
}

const ideialWeight = (height, genre) => {
  const minWeightIdeal = calc(height, ideialIMC[genre][0])
  const maxWeightIdeal = calc(height, ideialIMC[genre][1])

  return { minWeightIdeal, maxWeightIdeal }
}

export default ideialWeight
