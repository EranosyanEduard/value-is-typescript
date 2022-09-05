import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса all.empty', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [[], [], []], результат: true', () => {
      assert.isTrue(is.all.empty.arr([[], [], []]))
    })
    it('Аргумент: [[], [0], []], результат: false', () => {
      assert.isFalse(is.all.empty.arr([[], [0], []]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.empty.arr([]))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: [{}, [], {}], результат: true', () => {
      assert.isTrue(is.all.empty.obj([{}, [], {}]))
    })
    it('Аргумент: [{}, [0], {}], результат: false', () => {
      assert.isFalse(is.all.empty.obj([{}, [0], {}]))
    })
    it('Аргумент: [{}, { id: 0 }, {}], результат: false', () => {
      assert.isFalse(is.all.empty.obj([{}, { id: 0 }, {}]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.empty.obj([]))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: ["", "", ""], результат: true', () => {
      assert.isTrue(is.all.empty.str(['', '', '']))
    })
    it('Аргумент: ["", "Hello, world!", ""], результат: false', () => {
      assert.isFalse(is.all.empty.str(['', 'Hello, world!', '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.empty.str([]))
    })
  })
})
