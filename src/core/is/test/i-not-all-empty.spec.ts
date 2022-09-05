import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса not при использовании интерфейса all.empty', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [[], [], []], результат: false', () => {
      assert.isFalse(is.not.all.empty.arr([[], [], []]))
    })
    it('Аргумент: [[], [0], []], результат: true', () => {
      assert.isTrue(is.not.all.empty.arr([[], [0], []]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.all.empty.arr([]))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: [{}, [], {}], результат: false', () => {
      assert.isFalse(is.not.all.empty.obj([{}, [], {}]))
    })
    it('Аргумент: [{}, [0], {}], результат: true', () => {
      assert.isTrue(is.not.all.empty.obj([{}, [0], {}]))
    })
    it('Аргумент: [{}, { id: 0 }, {}], результат: true', () => {
      assert.isTrue(is.not.all.empty.obj([{}, { id: 0 }, {}]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.all.empty.obj([]))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: ["", "", ""], результат: false', () => {
      assert.isFalse(is.not.all.empty.str(['', '', '']))
    })
    it('Аргумент: ["", "Hello, world!", ""], результат: true', () => {
      assert.isTrue(is.not.all.empty.str(['', 'Hello, world!', '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.all.empty.str([]))
    })
  })
})
