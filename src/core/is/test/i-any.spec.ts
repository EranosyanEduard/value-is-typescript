import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса any при использовании основных интерфейсов', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [number, array, object], результат: true', () => {
      assert.isTrue(is.any.arr([1, [], {}]))
    })
    it('Аргумент: [number, object, string], результат: false', () => {
      assert.isFalse(is.any.arr([1, {}, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.arr([]))
    })
  })

  describe('Тест интерфейса bigint', () => {
    it('Аргумент: [number, bigint, string], результат: true', () => {
      assert.isTrue(is.any.bigint([1, BigInt(''), '']))
    })
    it('Аргумент: [number, array, string], результат: false', () => {
      assert.isFalse(is.any.bigint([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.bigint([]))
    })
  })

  describe('Тест интерфейса bool', () => {
    it('Аргумент: [number, boolean, string], результат: true', () => {
      assert.isTrue(is.any.bool([1, true, '']))
    })
    it('Аргумент: [number, array, string], результат: false', () => {
      assert.isFalse(is.any.bool([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.bool([]))
    })
  })

  describe('Тест интерфейса char', () => {
    it('Аргумент: [number, char, string], результат: true', () => {
      assert.isTrue(is.any.char([1, 'a', '']))
    })
    it('Аргумент: [number, array, string], результат: false', () => {
      assert.isFalse(is.any.char([1, [], 'Hello, world!']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.char([]))
    })
  })

  describe('Тест интерфейса falsy', () => {
    it('Аргумент: [1, -1, "a", [], {}, null], результат: true', () => {
      assert.isTrue(is.any.falsy([1, -1, 'a', [], {}, null]))
    })
    it('Аргумент: [1, -1, "a", [], {}], результат: false', () => {
      assert.isFalse(is.any.falsy([1, -1, 'a', [], {}]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.falsy([]))
    })
  })

  describe('Тест интерфейса float', () => {
    it('Аргумент: [number, float, nan], результат: true', () => {
      assert.isTrue(is.any.float([1, 2.5, NaN]))
    })
    it('Аргумент: [number, array, nan], результат: false', () => {
      assert.isFalse(is.any.float([1, [], NaN]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.float([]))
    })
  })

  describe('Тест интерфейса fun', () => {
    it('Аргумент: [number, function, string], результат: true', () => {
      assert.isTrue(is.any.fun([1, is.any.fun, '']))
    })
    it('Аргумент: [number, array, string], результат: false', () => {
      assert.isFalse(is.any.fun([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.fun([]))
    })
  })

  describe('Тест интерфейса int', () => {
    it('Аргумент: [float, int, nan], результат: true', () => {
      assert.isTrue(is.any.int([1.5, 2, NaN]))
    })
    it('Аргумент: [float, array, nan], результат: false', () => {
      assert.isFalse(is.any.int([1.5, [], NaN]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.int([]))
    })
  })

  describe('Тест интерфейса nan', () => {
    it('Аргумент: [int, nan, float], результат: true', () => {
      assert.isTrue(is.any.nan([1, NaN, 2.5]))
    })
    it('Аргумент: [int, array, float], результат: false', () => {
      assert.isFalse(is.any.nan([1, [], 2.5]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.nan([]))
    })
  })

  describe('Тест интерфейса null', () => {
    it('Аргумент: [undefined, null, object], результат: true', () => {
      assert.isTrue(is.any.null([undefined, null, {}]))
    })
    it('Аргумент: [undefined, array, object], результат: false', () => {
      assert.isFalse(is.any.null([undefined, [], {}]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.null([]))
    })
  })

  describe('Тест интерфейса nullable', () => {
    it('Аргумент: [number, null, string], результат: true', () => {
      assert.isTrue(is.any.nullable([1, null, '']))
    })
    it('Аргумент: [number, undefined, string], результат: true', () => {
      assert.isTrue(is.any.nullable([1, undefined, '']))
    })
    it('Аргумент: [number, array, string], результат: false', () => {
      assert.isFalse(is.any.nullable([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.nullable([]))
    })
  })

  describe('Тест интерфейса num', () => {
    it('Аргумент: [string, number, undefined], результат: true', () => {
      assert.isTrue(is.any.num(['', 1, undefined]))
    })
    it('Аргумент: [string, array, undefined], результат: false', () => {
      assert.isFalse(is.any.num(['', [], undefined]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.num([]))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: [null, array, string], результат: true', () => {
      assert.isTrue(is.any.obj([null, [], '']))
    })
    it('Аргумент: [null, object, string], результат: true', () => {
      assert.isTrue(is.any.obj([null, {}, '']))
    })
    it('Аргумент: [null, number, string], результат: false', () => {
      assert.isFalse(is.any.obj([null, 1, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.obj([]))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: [number, string, undefined], результат: true', () => {
      assert.isTrue(is.any.str([1, '', undefined]))
    })
    it('Аргумент: [number, array, undefined], результат: false', () => {
      assert.isFalse(is.any.str([1, [], undefined]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.str([]))
    })
  })

  describe('Тест интерфейса sym', () => {
    it('Аргумент: [number, symbol, string], результат: true', () => {
      assert.isTrue(is.any.sym([1, Symbol(''), '']))
    })
    it('Аргумент: [number, array, string], результат: false', () => {
      assert.isFalse(is.any.sym([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.sym([]))
    })
  })

  describe('Тест интерфейса truthy', () => {
    it('Аргумент: [0, NaN, "", null, undefined, {}], результат: true', () => {
      assert.isTrue(is.any.truthy([0, '', null, undefined, {}]))
    })
    it('Аргумент: [0, NaN, "", null, undefined], результат: false', () => {
      assert.isFalse(is.any.truthy([0, NaN, '', null, undefined]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.truthy([]))
    })
  })

  describe('Тест интерфейса undef', () => {
    it('Аргумент: [number, undefined, string], результат: true', () => {
      assert.isTrue(is.any.undef([1, undefined, '']))
    })
    it('Аргумент: [number, array, string], результат: false', () => {
      assert.isFalse(is.any.undef([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.any.undef([]))
    })
  })
})
