import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса not при использовании интерфейса empty', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.empty.arr([]))
    })
    it('Аргумент: [0], результат: true', () => {
      assert.isTrue(is.not.empty.arr([0]))
    })
  })

  describe('Тест интерфейса map', () => {
    it('Аргумент: new Map(), результат: false', () => {
      assert.isFalse(is.not.empty.map(new Map()))
    })
    it('Аргумент: new Map([[0, "a"]]), результат: true', () => {
      assert.isTrue(is.not.empty.map(new Map([[0, 'a']])))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: {}, результат: false', () => {
      assert.isFalse(is.not.empty.obj({}))
    })
    it('Аргумент: { id: 0 }, результат: true', () => {
      assert.isTrue(is.not.empty.obj({ id: 0 }))
    })
  })

  describe('Тест интерфейса set', () => {
    it('Аргумент: new Set(), результат: false', () => {
      assert.isFalse(is.not.empty.set(new Set()))
    })
    it('Аргумент: new Set([0]), результат: true', () => {
      assert.isTrue(is.not.empty.set(new Set([0])))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: "", результат: false', () => {
      assert.isFalse(is.not.empty.str(''))
    })
    it('Аргумент: "Hello, world!", результат: true', () => {
      assert.isTrue(is.not.empty.str('Hello, world!'))
    })
  })
})
