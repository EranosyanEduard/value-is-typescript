import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса not.all при использовании основных интерфейсов', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [array, array, array], результат: false', () => {
      assert.isFalse(is.not.all.arr([[], [], []]))
    })
    it('Аргумент: [array, array, string], результат: true', () => {
      assert.isTrue(is.not.all.arr([[], [], '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.arr([]))
    })
  })

  describe('Тест интерфейса bigint', () => {
    it('Аргумент: [bigint, bigint, bigint], результат: false', () => {
      assert.isFalse(is.not.all.bigint([BigInt(''), BigInt(''), BigInt('')]))
    })
    it('Аргумент: [bigint, bigint, string], результат: true', () => {
      assert.isTrue(is.not.all.bigint([BigInt(''), BigInt(''), '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.bigint([]))
    })
  })

  describe('Тест интерфейса bool', () => {
    it('Аргумент: [boolean, boolean, boolean], результат: false', () => {
      assert.isFalse(is.not.all.bool([true, false, true]))
    })
    it('Аргумент: [boolean, boolean, string], результат: true', () => {
      assert.isTrue(is.not.all.bool([true, false, '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.bool([]))
    })
  })

  describe('Тест интерфейса char', () => {
    it('Аргумент: [char, char, char], результат: false', () => {
      assert.isFalse(is.not.all.char(['a', 'b', 'c']))
    })
    it('Аргумент: [char, char, string], результат: true', () => {
      assert.isTrue(is.not.all.char(['a', 'b', '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.char([]))
    })
  })

  describe('Тест интерфейса falsy', () => {
    it('Аргумент: [0, nan, "a", null, undefined], результат: true', () => {
      assert.isTrue(is.not.all.falsy([0, NaN, 'a', null, undefined]))
    })
    it('Аргумент: [0, nan, "", null, undefined], результат: false', () => {
      assert.isFalse(is.not.all.falsy([0, NaN, '', null, undefined]))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.falsy([]))
    })
  })

  describe('Тест интерфейса float', () => {
    it('Аргумент: [float, float, float], результат: false', () => {
      assert.isFalse(is.not.all.float([1.5, 2.5, 3.5]))
    })
    it('Аргумент: [float, float, int], результат: true', () => {
      assert.isTrue(is.not.all.float([1.5, 2.5, 3]))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.float([]))
    })
  })

  describe('Тест интерфейса fun', () => {
    it('Аргумент: [function, function, function], результат: false', () => {
      assert.isFalse(is.not.all.fun([console.log, is.fun, () => {}]))
    })
    it('Аргумент: [function, function, string], результат: true', () => {
      assert.isTrue(is.not.all.fun([console.log, is.fun, '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.fun([]))
    })
  })

  describe('Тест интерфейса int', () => {
    it('Аргумент: [integer, integer, integer], результат: false', () => {
      assert.isFalse(is.not.all.int([1, Number.MAX_SAFE_INTEGER, 10e5]))
    })
    it('Аргумент: [integer, integer, float], результат: true', () => {
      assert.isTrue(is.not.all.int([1, Number.MAX_SAFE_INTEGER, 1.5]))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.int([]))
    })
  })

  describe('Тест интерфейса nan', () => {
    it('Аргумент: [nan, nan, nan], результат: false', () => {
      assert.isFalse(is.not.all.nan([NaN, NaN, NaN]))
    })
    it('Аргумент: [nan, nan, ""], результат: true', () => {
      assert.isTrue(is.not.all.nan([NaN, NaN, '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.nan([]))
    })
  })

  describe('Тест интерфейса null', () => {
    it('Аргумент: [null, null, null], результат: false', () => {
      assert.isFalse(is.not.all.null([null, null, null]))
    })
    it('Аргумент: [null, null, string], результат: true', () => {
      assert.isTrue(is.not.all.null([null, undefined, '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.null([]))
    })
  })

  describe('Тест интерфейса nullable', () => {
    it('Аргумент: [undefined, null, null], результат: false', () => {
      assert.isFalse(is.not.all.nullable([undefined, null, null]))
    })
    it('Аргумент: [undefined, null, string], результат: true', () => {
      assert.isTrue(is.not.all.nullable([undefined, null, '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.nullable([]))
    })
  })

  describe('Тест интерфейса num', () => {
    it('Аргумент: [int, nan, float], результат: false', () => {
      assert.isFalse(is.not.all.num([1, NaN, 2.5]))
    })
    it('Аргумент: [int, nan, string], результат: true', () => {
      assert.isTrue(is.not.all.num([1, NaN, '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.num([]))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: [array, object, object], результат: false', () => {
      assert.isFalse(is.not.all.obj([[], {}, is]))
    })
    it('Аргумент: [array, object, null], результат: true', () => {
      assert.isTrue(is.not.all.obj([[], {}, null]))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.obj([]))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: [string, char, string], результат: false', () => {
      assert.isFalse(is.not.all.str(['', 'a', 'Hello, world!']))
    })
    it('Аргумент: [string, char, number], результат: true', () => {
      assert.isTrue(is.not.all.str(['', 'a', 0]))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.str([]))
    })
  })

  describe('Тест интерфейса sym', () => {
    it('Аргумент: [symbol, symbol, symbol], результат: false', () => {
      assert.isFalse(is.not.all.sym([Symbol(''), Symbol(''), Symbol('')]))
    })
    it('Аргумент: [symbol, symbol, string], результат: true', () => {
      assert.isTrue(is.not.all.sym([Symbol(''), Symbol(''), '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.sym([]))
    })
  })

  describe('Тест интерфейса truthy', () => {
    it('Аргумент: [1, -1, "", [], {}, () => {}], результат: true', () => {
      assert.isTrue(is.not.all.truthy([1, -1, '', [], {}, () => {}]))
    })
    it('Аргумент: [1, -1, "a", [], {}, () => {}], результат: false', () => {
      assert.isFalse(is.not.all.truthy([1, -1, 'a', [], {}, () => {}]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isTrue(is.not.all.truthy([]))
    })
  })

  describe('Тест интерфейса undef', () => {
    it('Аргумент: [undefined, undefined, undefined], результат: false', () => {
      assert.isFalse(is.not.all.undef([undefined, undefined, undefined]))
    })
    it('Аргумент: [undefined, undefined, string], результат: true', () => {
      assert.isTrue(is.not.all.undef([undefined, undefined, '']))
    })
    it('Аргумент: [], результат: true', () => {
      assert.isTrue(is.not.all.undef([]))
    })
  })
})
