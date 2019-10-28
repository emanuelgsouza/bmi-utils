import { loadCategory } from '../lib'

describe('testing loadCategory function', () => {
  it("loadCategory() should be a empty string ''", () => {
    expect(loadCategory()).toBe('')
  })

  it("loadCategory('S', 30) should be a empty string ''", () => {
    expect(loadCategory('S', 30)).toBe('')
  })
})

describe('testing loadCategory function for male option', () => {
  it("loadCategory('M', '30') should be a empty string ''", () => {
    expect(loadCategory('M', '30')).toBe('')
  })

  it("loadCategory('M', 0) should be a empty string ''", () => {
    expect(loadCategory('M', 0)).toBe('')
  })

  it("loadCategory('M', 0.1) should be a empty string ''", () => {
    expect(loadCategory('M', 0.1)).toBe('Underweight')
  })

  it("loadCategory('M', 20.69) should be 'Underweight'", () => {
    expect(loadCategory('M', 20.69)).toBe('Underweight')
  })

  it("loadCategory('M', 20.7) should be 'Normal weight'", () => {
    expect(loadCategory('M', 20.7)).toBe('Normal weight')
  })

  it("loadCategory('M', 26.39) should be 'Normal weight'", () => {
    expect(loadCategory('M', 26.39)).toBe('Normal weight')
  })

  it("loadCategory('M', 26.40) should be 'A little overweight'", () => {
    expect(loadCategory('M', 26.40)).toBe('A little overweight')
  })

  it("loadCategory('M', 27.79) should be 'A little overweight'", () => {
    expect(loadCategory('M', 27.79)).toBe('A little overweight')
  })

  it("loadCategory('M', 27.80) should be 'Overweight'", () => {
    expect(loadCategory('M', 27.80)).toBe('Overweight')
  })

  it("loadCategory('M', 31.09) should be 'Overweight'", () => {
    expect(loadCategory('M', 31.09)).toBe('Overweight')
  })

  it("loadCategory('M', 31.10) should be 'Obese'", () => {
    expect(loadCategory('M', 31.10)).toBe('Obese')
  })
})

describe('testing loadCategory function for female option', () => {
  it("loadCategory('F', 0.1) should be a empty string ''", () => {
    expect(loadCategory('F', 0.1)).toBe('Underweight')
  })

  it("loadCategory('F', 19.09) should be 'Underweight'", () => {
    expect(loadCategory('F', 19.09)).toBe('Underweight')
  })

  it("loadCategory('F', 19.1) should be 'Normal weight'", () => {
    expect(loadCategory('F', 19.1)).toBe('Normal weight')
  })

  it("loadCategory('F', 25.79) should be 'Normal weight'", () => {
    expect(loadCategory('F', 25.79)).toBe('Normal weight')
  })

  it("loadCategory('F', 25.8) should be 'A little overweight'", () => {
    expect(loadCategory('F', 25.8)).toBe('A little overweight')
  })

  it("loadCategory('F', 27.29) should be 'A little overweight'", () => {
    expect(loadCategory('F', 27.29)).toBe('A little overweight')
  })

  it("loadCategory('F', 27.3) should be 'Overweight'", () => {
    expect(loadCategory('F', 27.3)).toBe('Overweight')
  })

  it("loadCategory('F', 32.29) should be 'Overweight'", () => {
    expect(loadCategory('F', 32.29)).toBe('Overweight')
  })

  it("loadCategory('F', 32.3) should be 'Obese'", () => {
    expect(loadCategory('F', 32.3)).toBe('Obese')
  })
})
