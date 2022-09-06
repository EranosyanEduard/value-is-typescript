import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса not при использовании интерфейса any.empty', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [[1], [], [""]], результат: false', () => {
      assert.isFalse(is.not.any.empty.arr([[1], [], ['']]))
    })
    it('Аргумент: [[1], [{}], [""]], результат: true', () => {
      assert.isTrue(is.not.any.empty.arr([[1], [''], [{}]]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.empty.arr([]))
    })
  })

  describe('Тест интерфейса map', () => {
    it('Аргумент: [new Map([[0, "a"]]), new Map(), new Map([[1, "b"]])], результат: false', () => {
      assert.isFalse(
        is.not.any.empty.map([
          new Map([[0, 'a']]),
          new Map(),
          new Map([[1, 'b']])
        ])
      )
    })
    it('Аргумент: [new Map([[0, "a"]]), new Map([[1, "b"]]), new Map([[2, "c"]])], результат: true', () => {
      assert.isTrue(
        is.not.any.empty.map([
          new Map([[0, 'a']]),
          new Map([[1, 'b']]),
          new Map([[2, 'c']])
        ])
      )
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.empty.map([]))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: [{ id: 0 }, is, {}], результат: false', () => {
      assert.isFalse(is.not.any.empty.obj([{ id: 0 }, is, {}]))
    })
    it('Аргумент: [{ id: 0 }, is, []], результат: false', () => {
      assert.isFalse(is.not.any.empty.obj([{ id: 0 }, is, []]))
    })
    it('Аргумент: [{ id: 0 }, is, [0]], результат: true', () => {
      assert.isTrue(is.not.any.empty.obj([{ id: 0 }, is, [0]]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.empty.obj([]))
    })
  })

  describe('Тест интерфейса set', () => {
    it('Аргумент: [new Set([0]), new Set(), new Set([1])], результат: false', () => {
      assert.isFalse(
        is.not.any.empty.set([new Set([0]), new Set(), new Set([1])])
      )
    })
    it('Аргумент: [new Set([0]), new Set([1]), new Set([2])], результат: true', () => {
      assert.isTrue(
        is.not.any.empty.set([new Set([0]), new Set([1]), new Set([2])])
      )
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.empty.set([]))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: ["abc", "", "def"], результат: false', () => {
      assert.isFalse(is.not.any.empty.str(['abc', '', 'def']))
    })
    it('Аргумент: ["abc", "def", "ghi"], результат: true', () => {
      assert.isTrue(is.not.any.empty.str(['a', 'b', 'c']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isFalse(is.not.any.empty.str([]))
    })
  })
})
