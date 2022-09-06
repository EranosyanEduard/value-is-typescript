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

  describe('Тест интерфейса map', () => {
    it('Аргумент: [new Map(), new Map(), new Map()], результат: false', () => {
      assert.isFalse(is.not.all.empty.map([new Map(), new Map(), new Map()]))
    })
    it('Аргумент: [new Map(), new Map([[0, "a"]]), new Map()], результат: true', () => {
      assert.isTrue(
        is.not.all.empty.map([new Map(), new Map([[0, 'a']]), new Map()])
      )
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.all.empty.map([]))
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

  describe('Тест интерфейса set', () => {
    it('Аргумент: [new Set(), new Set(), new Set()], результат: false', () => {
      assert.isFalse(is.not.all.empty.set([new Set(), new Set(), new Set()]))
    })
    it('Аргумент: [new Set(), new Set([0]), new Set()], результат: true', () => {
      assert.isTrue(is.not.all.empty.set([new Set(), new Set([0]), new Set()]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.all.empty.set([]))
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
