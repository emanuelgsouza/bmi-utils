import { ideialWeight } from '../src'

describe('testing ideialWeight function', () => {
  it('ideialWeight(0, "") should be { min: 0, max: 0 }', () => {
    expect(ideialWeight(0, '')).toEqual({ min: 0, max: 0 })
  })

  it('ideialWeight(1.70, "S") should be { min: 0, max: 0 }', () => {
    expect(ideialWeight(1.70, "S")).toEqual({ min: 0, max: 0 })
  })

  it("ideialWeight(1.70, 'M') should be { min: '59.82', max: '76.27' }", () => {
    expect(ideialWeight(1.70, 'M')).toEqual({ min: '59.82', max: '76.27' })
  })

  it("ideialWeight(1.70, 'F') should be { min: '55.20', max: '74.53' }", () => {
    expect(ideialWeight(1.70, 'F')).toEqual({ min: '55.20', max: '74.53' })
  })

  it("ideialWeight(1.95, 'M') should be { min: '78.71', max: '100.35' }", () => {
    expect(ideialWeight(1.95, 'M')).toEqual({ min: '78.71', max: '100.35' })
  })

  it("ideialWeight(1.95, 'F') should be { min: '72.63', max: '98.07' }", () => {
    expect(ideialWeight(1.95, 'F')).toEqual({ min: '72.63', max: '98.07' })
  })
})
