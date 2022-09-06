import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса any.empty', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [[1], [], [""]], результат: true', () => {
      assert.isTrue(is.any.empty.arr([[1], [], ['']]))
    })
    it('Аргумент: [[1], [{}], [""]], результат: false', () => {
      assert.isFalse(is.any.empty.arr([[1], [''], [{}]]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.empty.arr([]))
    })
  })

  describe('Тест интерфейса map', () => {
    it('Аргумент: [new Map([[0, "a"]]), new Map(), new Map([[1, "b"]])], результат: true', () => {
      assert.isTrue(
        is.any.empty.map([new Map([[0, 'a']]), new Map(), new Map([[1, 'b']])])
      )
    })
    it('Аргумент: [new Map([[0, "a"]]), new Map([[1, "b"]]), new Map([[2, "c"]])], результат: false', () => {
      assert.isFalse(
        is.any.empty.map([
          new Map([[0, 'a']]),
          new Map([[1, 'b']]),
          new Map([[2, 'c']])
        ])
      )
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.empty.map([]))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: [{ id: 0 }, is, {}], результат: true', () => {
      assert.isTrue(is.any.empty.obj([{ id: 0 }, is, {}]))
    })
    it('Аргумент: [{ id: 0 }, is, []], результат: true', () => {
      assert.isTrue(is.any.empty.obj([{ id: 0 }, is, []]))
    })
    it('Аргумент: [{ id: 0 }, is, [0]], результат: false', () => {
      assert.isFalse(is.any.empty.obj([{ id: 0 }, is, [0]]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.empty.obj([]))
    })
  })

  describe('Тест интерфейса set', () => {
    it('Аргумент: [new Set([0]), new Set(), new Set([1])], результат: true', () => {
      assert.isTrue(is.any.empty.set([new Set([0]), new Set(), new Set([1])]))
    })
    it('Аргумент: [new Set([0]), new Set([1]), new Set([2])], результат: false', () => {
      assert.isFalse(
        is.any.empty.set([new Set([0]), new Set([1]), new Set([2])])
      )
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.empty.set([]))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: ["abc", "", "def"], результат: true', () => {
      assert.isTrue(is.any.empty.str(['abc', '', 'def']))
    })
    it('Аргумент: ["abc", "def", "ghi"], результат: false', () => {
      assert.isFalse(is.any.empty.str(['a', 'b', 'c']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.empty.str([]))
    })
  })
})
