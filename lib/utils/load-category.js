import loadIndex from './load-index'

const messages = {
  'pt': [
    null,
    'Abaixo do peso',
    'Peso normal',
    'Um pouco acima do peso',
    'Acima do peso',
    'Obeso'
  ],
  'en': [
    null,
    'Underweight',
    'Normal weight',
    'A little overweight',
    'Overweight',
    'Obese'
  ]
}

const loadCategory = (genre, imc, translation = '') => {
  const loadByGenre = loadIndex(genre)
  const index = loadByGenre(imc)
  return messages[translation][index]
}

export default loadCategory
