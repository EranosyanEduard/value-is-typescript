import { assert } from 'chai'
import is from '..'

describe('Тест основных интерфейсов, исключая all, any, empty и not', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.arr([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.arr(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.arr(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.arr(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.arr(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.arr(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.arr({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.arr(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.arr(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.arr(undefined))
    })
  })

  describe('Тест интерфейса bigint', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.bigint([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.bigint(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.bigint(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.bigint(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.bigint(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.bigint(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.bigint({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.bigint(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.arr(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.bigint(undefined))
    })
  })

  describe('Тест интерфейса bool', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.bool([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.bool(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.bool(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.bool(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.bool(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.bool(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.bool({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.bool(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.bool(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.bool(undefined))
    })
  })

  describe('Тест интерфейса char', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.char([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.char(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.char(true))
    })
    it('Аргумент: char, результат: true', () => {
      assert.isTrue(is.char('a'))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.char(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.char(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.char(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.char({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.char(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.char(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.char(undefined))
    })
  })

  describe('Тест интерфейса falsy', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.falsy([]))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.falsy(null))
    })
    it('Аргумент: true, результат: false', () => {
      assert.isFalse(is.falsy(true))
    })
    it('Аргумент: false, результат: true', () => {
      assert.isTrue(is.falsy(false))
    })
    it('Аргумент: negative number, результат: false', () => {
      assert.isFalse(is.falsy(-1))
    })
    it('Аргумент: positive number, результат: false', () => {
      assert.isFalse(is.falsy(1))
    })
    it('Аргумент: 0, результат: true', () => {
      assert.isTrue(is.falsy(0))
    })
    it('Аргумент: not empty string, результат: false', () => {
      assert.isFalse(is.falsy('Hello, world!'))
    })
    it('Аргумент: empty string, результат: true', () => {
      assert.isTrue(is.falsy(''))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.falsy(undefined))
    })
  })

  describe('Тест интерфейса float', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.float([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.float(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.float(true))
    })
    it('Аргумент: float, результат: true', () => {
      assert.isTrue(is.float(1.5))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.float(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.float(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.float(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.float({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.float(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.float(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.float(undefined))
    })
  })

  describe('Тест интерфейса fun', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.fun([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.fun(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.fun(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.fun(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.fun(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.fun(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.fun({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.fun(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.fun(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.fun(undefined))
    })
  })

  describe('Тест интерфейса int', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.int([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.int(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.int(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.int(() => {}))
    })
    it('Аргумент: int, результат: true', () => {
      assert.isTrue(is.int(0))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.int(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.int(1.5))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.int({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.int(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.int(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.int(undefined))
    })
  })

  describe('Тест интерфейса nan', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.nan([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.nan(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.nan(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.nan(() => {}))
    })
    it('Аргумент: nan, результат: true', () => {
      assert.isTrue(is.nan(NaN))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.nan(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.nan(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.nan({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.nan(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.nan(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.nan(undefined))
    })
  })

  describe('Тест интерфейса null', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.null([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.null(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.null(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.null(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.null(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.null(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.null({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.null(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.null(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.null(undefined))
    })
  })

  describe('Тест интерфейса nullable', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.nullable([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.nullable(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.nullable(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.nullable(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.nullable(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.nullable(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.nullable({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.nullable(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.nullable(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.nullable(undefined))
    })
  })

  describe('Тест интерфейса num', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.num([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.num(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.num(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.num(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.num(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.num(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.num({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.num(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.num(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.num(undefined))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.obj([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.obj(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.obj(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.obj(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.obj(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.obj(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.obj({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.obj(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.obj(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.obj(undefined))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.str([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.str(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.str(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.str(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.str(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.str(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.str({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.str(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.str(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.str(undefined))
    })
  })

  describe('Тест интерфейса sym', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.sym([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.sym(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.sym(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.sym(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.sym(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.sym(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.sym({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.sym(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.sym(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.sym(undefined))
    })
  })

  describe('Тест интерфейса truthy', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.truthy([]))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.truthy(null))
    })
    it('Аргумент: false, результат: true', () => {
      assert.isTrue(is.truthy(true))
    })
    it('Аргумент: true, результат: false', () => {
      assert.isFalse(is.truthy(false))
    })
    it('Аргумент: negative number, результат: true', () => {
      assert.isTrue(is.truthy(-1))
    })
    it('Аргумент: positive number, результат: true', () => {
      assert.isTrue(is.truthy(1))
    })
    it('Аргумент: 0, результат: false', () => {
      assert.isFalse(is.truthy(0))
    })
    it('Аргумент: not empty string, результат: true', () => {
      assert.isTrue(is.truthy('Hello, world!'))
    })
    it('Аргумент: empty string, результат: false', () => {
      assert.isFalse(is.truthy(''))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.truthy(undefined))
    })
  })

  describe('Тест интерфейса undef', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.undef([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.undef(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.undef(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.undef(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.undef(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.undef(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.undef({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.undef(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.undef(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.undef(undefined))
    })
  })
})
