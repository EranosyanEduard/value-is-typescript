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
