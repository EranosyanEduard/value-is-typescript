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

  describe('Тест интерфейса obj', () => {
    it('Аргумент: {}, результат: true', () => {
      assert.isTrue(is.empty.obj({}))
    })
    it('Аргумент: { id: 0 }, результат: false', () => {
      assert.isFalse(is.empty.obj({ id: 0 }))
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
