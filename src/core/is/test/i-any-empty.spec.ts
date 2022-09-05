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
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: ["abc", "", "def"], результат: true', () => {
      assert.isTrue(is.any.empty.str(['abc', '', 'def']))
    })
    it('Аргумент: ["abc", "def", "ghi"], результат: false', () => {
      assert.isFalse(is.any.empty.str(['a', 'b', 'c']))
    })
  })
})
