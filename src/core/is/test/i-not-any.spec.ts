import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса not.any при использовании основных интерфейсов', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [number, array, object], результат: false', () => {
      assert.isFalse(is.not.any.arr([1, [], {}]))
    })
    it('Аргумент: [number, object, string], результат: true', () => {
      assert.isTrue(is.not.any.arr([1, {}, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.arr([]))
    })
  })

  describe('Тест интерфейса bigint', () => {
    it('Аргумент: [number, bigint, string], результат: false', () => {
      assert.isFalse(is.not.any.bigint([1, BigInt(''), '']))
    })
    it('Аргумент: [number, array, string], результат: true', () => {
      assert.isTrue(is.not.any.bigint([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.bigint([]))
    })
  })

  describe('Тест интерфейса bool', () => {
    it('Аргумент: [number, boolean, string], результат: false', () => {
      assert.isFalse(is.not.any.bool([1, true, '']))
    })
    it('Аргумент: [number, array, string], результат: true', () => {
      assert.isTrue(is.not.any.bool([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.bool([]))
    })
  })

  describe('Тест интерфейса char', () => {
    it('Аргумент: [number, char, string], результат: false', () => {
      assert.isFalse(is.not.any.char([1, 'a', '']))
    })
    it('Аргумент: [number, array, string], результат: true', () => {
      assert.isTrue(is.not.any.char([1, [], 'Hello, world!']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.char([]))
    })
  })

  describe('Тест интерфейса falsy', () => {
    it('Аргумент: [1, -1, "a", [], [], console.log], результат: true', () => {
      assert.isTrue(is.not.any.falsy([1, -1, 'a', [], {}, console.log]))
    })
    it('Аргумент: [1, -1, "a", [], [], null], результат: false', () => {
      assert.isFalse(is.not.any.falsy([1, -1, 'a', [], {}, null]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.falsy([]))
    })
  })

  describe('Тест интерфейса float', () => {
    it('Аргумент: [number, float, nan], результат: false', () => {
      assert.isFalse(is.not.any.float([1, 2.5, NaN]))
    })
    it('Аргумент: [number, array, nan], результат: true', () => {
      assert.isTrue(is.not.any.float([1, [], NaN]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.float([]))
    })
  })

  describe('Тест интерфейса fun', () => {
    it('Аргумент: [number, function, string], результат: false', () => {
      assert.isFalse(is.not.any.fun([1, is.not.any.fun, '']))
    })
    it('Аргумент: [number, array, string], результат: true', () => {
      assert.isTrue(is.not.any.fun([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.fun([]))
    })
  })

  describe('Тест интерфейса int', () => {
    it('Аргумент: [float, int, nan], результат: false', () => {
      assert.isFalse(is.not.any.int([1.5, 2, NaN]))
    })
    it('Аргумент: [float, array, nan], результат: true', () => {
      assert.isTrue(is.not.any.int([1.5, [], NaN]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.int([]))
    })
  })

  describe('Тест интерфейса nan', () => {
    it('Аргумент: [int, nan, float], результат: false', () => {
      assert.isFalse(is.not.any.nan([1, NaN, 2.5]))
    })
    it('Аргумент: [int, array, float], результат: true', () => {
      assert.isTrue(is.not.any.nan([1, [], 2.5]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.nan([]))
    })
  })

  describe('Тест интерфейса null', () => {
    it('Аргумент: [undefined, null, object], результат: false', () => {
      assert.isFalse(is.not.any.null([undefined, null, {}]))
    })
    it('Аргумент: [undefined, array, object], результат: true', () => {
      assert.isTrue(is.not.any.null([undefined, [], {}]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.null([]))
    })
  })

  describe('Тест интерфейса nullable', () => {
    it('Аргумент: [number, null, string], результат: false', () => {
      assert.isFalse(is.not.any.nullable([1, null, '']))
    })
    it('Аргумент: [number, undefined, string], результат: false', () => {
      assert.isFalse(is.not.any.nullable([1, undefined, '']))
    })
    it('Аргумент: [number, array, string], результат: true', () => {
      assert.isTrue(is.not.any.nullable([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.nullable([]))
    })
  })

  describe('Тест интерфейса num', () => {
    it('Аргумент: [string, number, undefined], результат: false', () => {
      assert.isFalse(is.not.any.num(['', 1, undefined]))
    })
    it('Аргумент: [string, array, undefined], результат: true', () => {
      assert.isTrue(is.not.any.num(['', [], undefined]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.num([]))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: [null, array, string], результат: false', () => {
      assert.isFalse(is.not.any.obj([null, [], '']))
    })
    it('Аргумент: [null, object, string], результат: false', () => {
      assert.isFalse(is.not.any.obj([null, {}, '']))
    })
    it('Аргумент: [null, number, string], результат: true', () => {
      assert.isTrue(is.not.any.obj([null, 1, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.obj([]))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: [number, string, undefined], результат: false', () => {
      assert.isFalse(is.not.any.str([1, '', undefined]))
    })
    it('Аргумент: [number, array, undefined], результат: true', () => {
      assert.isTrue(is.not.any.str([1, [], undefined]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.str([]))
    })
  })

  describe('Тест интерфейса sym', () => {
    it('Аргумент: [number, symbol, string], результат: false', () => {
      assert.isFalse(is.not.any.sym([1, Symbol(''), '']))
    })
    it('Аргумент: [number, array, string], результат: true', () => {
      assert.isTrue(is.not.any.sym([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.sym([]))
    })
  })

  describe('Тест интерфейса truthy', () => {
    it('Аргумент: [0, NaN, "", null, undefined], результат: true', () => {
      assert.isTrue(is.not.any.truthy([0, '', null, undefined]))
    })
    it('Аргумент: [0, NaN, "a", null, undefined], результат: false', () => {
      assert.isFalse(is.not.any.truthy([0, NaN, 'a', null, undefined]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.truthy([]))
    })
  })

  describe('Тест интерфейса undef', () => {
    it('Аргумент: [number, undefined, string], результат: false', () => {
      assert.isFalse(is.not.any.undef([1, undefined, '']))
    })
    it('Аргумент: [number, array, string], результат: true', () => {
      assert.isTrue(is.not.any.undef([1, [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.not.any.undef([]))
    })
  })
})
