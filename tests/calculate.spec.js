import { calculate } from '../lib'

describe('testing calculate function', () => {
  it('calculate(0, 0) should be 0', () => {
    expect(calculate(0, 0)).toBe(0)
  })

  it('calculate(65, 1.7) should be 22.49', () => {
    expect(calculate(65, 1.7)).toBe("22.49")
  })

  it('calculate(80, 1.7) should be 27.68', () => {
    expect(calculate(80, 1.7)).toBe("27.68")
  })

  it('calculate(40, 1.7) should be 13.84', () => {
    expect(calculate(40, 1.7)).toBe("13.84")
  })

  it('calculate(90, 1.65) should be 33.06', () => {
    expect(calculate(90, 1.65)).toBe("33.06")
  })
})
