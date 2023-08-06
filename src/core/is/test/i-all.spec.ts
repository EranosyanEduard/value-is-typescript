import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса all при использовании основных интерфейсов', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: [array, array, array], результат: true', () => {
      assert.isTrue(is.all.arr([[], [], []]))
    })
    it('Аргумент: [array, array, string], результат: false', () => {
      assert.isFalse(is.all.arr([[], [], '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.arr([]))
    })
  })

  describe('Тест интерфейса bigint', () => {
    it('Аргумент: [bigint, bigint, bigint], результат: true', () => {
      assert.isTrue(is.all.bigint([BigInt(''), BigInt(''), BigInt('')]))
    })
    it('Аргумент: [bigint, bigint, string], результат: false', () => {
      assert.isFalse(is.all.bigint([BigInt(''), BigInt(''), '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.bigint([]))
    })
  })

  describe('Тест интерфейса bool', () => {
    it('Аргумент: [boolean, boolean, boolean], результат: true', () => {
      assert.isTrue(is.all.bool([true, false, true]))
    })
    it('Аргумент: [boolean, boolean, string], результат: false', () => {
      assert.isFalse(is.all.bool([true, false, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.bool([]))
    })
  })

  describe('Тест интерфейса char', () => {
    it('Аргумент: [char, char, char], результат: true', () => {
      assert.isTrue(is.all.char(['a', 'b', 'c']))
    })
    it('Аргумент: [char, char, string], результат: false', () => {
      assert.isFalse(is.all.char(['a', 'b', '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.char([]))
    })
  })

  describe('Тест интерфейса date', () => {
    it('Аргумент: [date, date, date], результат: true', () => {
      assert.isTrue(is.all.date([new Date(), new Date(), new Date()]))
    })
    it('Аргумент: [date, date, string], результат: false', () => {
      assert.isFalse(is.all.date([new Date(), new Date(), '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.date([]))
    })
  })

  describe('Тест интерфейса err', () => {
    it('Аргумент: [error, error, error], результат: true', () => {
      assert.isTrue(is.all.err([new Error(), new Error(), new Error()]))
    })
    it('Аргумент: [error, error, null], результат: false', () => {
      assert.isFalse(is.all.err([new Error(), new Error(), null]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.err([]))
    })
  })

  describe('Тест интерфейса falsy', () => {
    it('Аргумент: [0, nan, "", null, undefined], результат: true', () => {
      assert.isTrue(is.all.falsy([0, NaN, '', null, undefined]))
    })
    it('Аргумент: [0, nan, "a", null, undefined], результат: false', () => {
      assert.isFalse(is.all.falsy([0, NaN, 'a', null, undefined]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.falsy([]))
    })
  })

  describe('Тест интерфейса float', () => {
    it('Аргумент: [float, float, float], результат: true', () => {
      assert.isTrue(is.all.float([1.5, 2.5, 3.5]))
    })
    it('Аргумент: [float, float, int], результат: false', () => {
      assert.isFalse(is.all.float([1.5, 2.5, 3]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.float([]))
    })
  })

  describe('Тест интерфейса fun', () => {
    it('Аргумент: [function, function, function], результат: false', () => {
      assert.isTrue(is.all.fun([console.log, is.fun, () => {}]))
    })
    it('Аргумент: [function, function, string], результат: false', () => {
      assert.isFalse(is.all.fun([console.log, is.fun, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.fun([]))
    })
  })

  describe('Тест интерфейса int', () => {
    it('Аргумент: [integer, integer, integer], результат: true', () => {
      assert.isTrue(is.all.int([1, Number.MAX_SAFE_INTEGER, 10e5]))
    })
    it('Аргумент: [integer, integer, float], результат: false', () => {
      assert.isFalse(is.all.int([1, Number.MAX_SAFE_INTEGER, 1.5]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.int([]))
    })
  })

  describe('Тест интерфейса map', () => {
    it('Аргумент: [map, map, map], результат: true', () => {
      assert.isTrue(is.all.map([new Map(), new Map(), new Map()]))
    })
    it('Аргумент: [map, map, null], результат: false', () => {
      assert.isFalse(is.all.map([new Map(), new Map(), null]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.map([]))
    })
  })

  describe('Тест интерфейса nan', () => {
    it('Аргумент: [nan, nan, nan], результат: true', () => {
      assert.isTrue(is.all.nan([NaN, NaN, NaN]))
    })
    it('Аргумент: [nan, nan, ""], результат: false', () => {
      assert.isFalse(is.all.nan([NaN, NaN, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.nan([]))
    })
  })

  describe('Тест интерфейса null', () => {
    it('Аргумент: [null, null, null], результат: true', () => {
      assert.isTrue(is.all.null([null, null, null]))
    })
    it('Аргумент: [null, null, string], результат: false', () => {
      assert.isFalse(is.all.null([null, undefined, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.null([]))
    })
  })

  describe('Тест интерфейса nullable', () => {
    it('Аргумент: [undefined, null, null], результат: true', () => {
      assert.isTrue(is.all.nullable([undefined, null, null]))
    })
    it('Аргумент: [undefined, null, string], результат: false', () => {
      assert.isFalse(is.all.nullable([undefined, null, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.nullable([]))
    })
  })

  describe('Тест интерфейса num', () => {
    it('Аргумент: [int, nan, float], результат: true', () => {
      assert.isTrue(is.all.num([1, NaN, 2.5]))
    })
    it('Аргумент: [int, nan, string], результат: false', () => {
      assert.isFalse(is.all.num([1, NaN, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.num([]))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: [array, object, object], результат: true', () => {
      assert.isTrue(is.all.obj([[], {}, is]))
    })
    it('Аргумент: [array, object, null], результат: false', () => {
      assert.isFalse(is.all.obj([[], {}, null]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.obj([]))
    })
  })

  describe('Тест интерфейса regexp', () => {
    it('Аргумент: [regexp, regexp, regexp], результат: true', () => {
      assert.isTrue(is.all.regexp([/a/, /b/, /c/]))
    })
    it('Аргумент: [regexp, regexp, string], результат: false', () => {
      assert.isFalse(is.all.regexp([/a/, /b/, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.regexp([]))
    })
  })

  describe('Тест интерфейса set', () => {
    it('Аргумент: [set, set, set], результат: true', () => {
      assert.isTrue(is.all.set([new Set(), new Set(), new Set()]))
    })
    it('Аргумент: [set, set, null], результат: false', () => {
      assert.isFalse(is.all.set([new Set(), new Set(), null]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.set([]))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: [string, char, string], результат: true', () => {
      assert.isTrue(is.all.str(['', 'a', 'Hello, world!']))
    })
    it('Аргумент: [string, char, number], результат: false', () => {
      assert.isFalse(is.all.str(['', 'a', 0]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.str([]))
    })
  })

  describe('Тест интерфейса sym', () => {
    it('Аргумент: [symbol, symbol, symbol], результат: true', () => {
      assert.isTrue(is.all.sym([Symbol(''), Symbol(''), Symbol('')]))
    })
    it('Аргумент: [symbol, symbol, string], результат: false', () => {
      assert.isFalse(is.all.sym([Symbol(''), Symbol(''), '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.sym([]))
    })
  })

  describe('Тест интерфейса truthy', () => {
    it('Аргумент: [1, -1, "a", [], {}, () => {}], результат: true', () => {
      assert.isTrue(is.all.truthy([1, -1, 'a', [], {}, () => {}]))
    })
    it('Аргумент: [1, -1, "", [], {}, () => {}], результат: false', () => {
      assert.isFalse(is.all.truthy([1, -1, '', [], {}, () => {}]))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.truthy([]))
    })
  })

  describe('Тест интерфейса undef', () => {
    it('Аргумент: [undefined, undefined, undefined], результат: true', () => {
      assert.isTrue(is.all.undef([undefined, undefined, undefined]))
    })
    it('Аргумент: [undefined, undefined, string], результат: false', () => {
      assert.isFalse(is.all.undef([undefined, undefined, '']))
    })
    it('Аргумент: [], результат: false', () => {
      assert.isFalse(is.all.undef([]))
    })
  })
})
