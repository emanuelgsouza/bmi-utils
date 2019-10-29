# bmi-utils

A Javascript lib to calculate [body mass index](https://en.wikipedia.org/wiki/Body_mass_index).

## Install [![npm version](https://badge.fury.io/js/bmi-utils.svg)](https://badge.fury.io/js/bmi-utils)

```sh
yarn add bmi-utils
```

## Usage

```js
import { calculate } from 'bmi-utils'

// ... your code here
```

## Library functions

This lib exports the following functions:

### calculate(weight, heigth)

This function receives `weight` (Number) and `heigth` (Number) and return a BMI calculated. Examples:

```js
calculate(65, 1.7) // returns '22.49'
```

### ideialWeight(height, genre)

This function receives `height` (Number) and `genre` (String) and return a object with `min` and `max` **ideal** weight.

```js
ideialWeight(1.70, 'M') // returns { min: '59.82', max: '76.27' }
```

### loadCategory(genre, imc, translation)

This function receives `genre` (String), `imc` (Number), and `translation` (String - optional) properties and return a string with categorization of BMI.

```js
loadCategory('M', 26.39) // returns Normal weight
```

## Author

Emanuel Gonçalves
* Twitter [@emanuelgsouza](https://twitter.com/emanuelgsouza)
* Github [@emanuelgsouza](https://github.com/emanuelgsouza)
