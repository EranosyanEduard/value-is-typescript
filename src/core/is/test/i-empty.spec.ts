import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса empty', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.empty.arr([]))
    })
    it('Аргумент: [0], результат: false', () => {
      assert.isFalse(is.empty.arr([0]))
    })
  })

  describe('Тест интерфейса map', () => {
    it('Аргумент: new Map(), результат: true', () => {
      assert.isTrue(is.empty.map(new Map()))
    })
    it('Аргумент: new Map([[0, "a"]]), результат: false', () => {
      assert.isFalse(is.empty.map(new Map([[0, 'a']])))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: {}, результат: true', () => {
      assert.isTrue(is.empty.obj({}))
    })
    it('Аргумент: { id: 0 }, результат: false', () => {
      assert.isFalse(is.empty.obj({ id: 0 }))
    })
  })

  describe('Тест интерфейса set', () => {
    it('Аргумент: new Set(), результат: true', () => {
      assert.isTrue(is.empty.set(new Set()))
    })
    it('Аргумент: new Set([0]), результат: false', () => {
      assert.isFalse(is.empty.set(new Set([0])))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: "", результат: true', () => {
      assert.isTrue(is.empty.str(''))
    })
    it('Аргумент: "Hello, world!", результат: false', () => {
      assert.isFalse(is.empty.str('Hello, world!'))
    })
  })
})
