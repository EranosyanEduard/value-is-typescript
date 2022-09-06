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

  describe('Тест интерфейса map', () => {
    it('Аргумент: [new Map(), new Map(), new Map()], результат: true', () => {
      assert.isTrue(is.all.empty.map([new Map(), new Map(), new Map()]))
    })
    it('Аргумент: [new Map(), new Map([[0, "a"]]), new Map()], результат: false', () => {
      assert.isFalse(
        is.all.empty.map([new Map(), new Map([[0, 'a']]), new Map()])
      )
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.empty.map([]))
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

  describe('Тест интерфейса set', () => {
    it('Аргумент: [new Set(), new Set(), new Set()], результат: true', () => {
      assert.isTrue(is.all.empty.set([new Set(), new Set(), new Set()]))
    })
    it('Аргумент: [new Set(), new Set([0]), new Set()], результат: false', () => {
      assert.isFalse(is.all.empty.set([new Set(), new Set([0]), new Set()]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.empty.set([]))
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
