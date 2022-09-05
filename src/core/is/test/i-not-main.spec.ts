import { assert } from 'chai'
import is from '..'

describe('Тест интерфейса not при использовании овновных интерфейсов', () => {
  describe('Тест интерфейса arr', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.not.arr([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.arr(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.arr(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.arr(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.arr(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.arr(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.arr({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.arr(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.arr(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.arr(undefined))
    })
  })

  describe('Тест интерфейса bigint', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.bigint([]))
    })
    it('Аргумент: bigint, результат: false', () => {
      assert.isFalse(is.not.bigint(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.bigint(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.bigint(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.bigint(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.bigint(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.bigint({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.bigint(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.arr(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.bigint(undefined))
    })
  })

  describe('Тест интерфейса bool', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.bool([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.bool(BigInt('')))
    })
    it('Аргумент: boolean, результат: false', () => {
      assert.isFalse(is.not.bool(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.bool(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.bool(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.bool(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.bool({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.bool(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.bool(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.bool(undefined))
    })
  })

  describe('Тест интерфейса char', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.char([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.char(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.char(true))
    })
    it('Аргумент: char, результат: false', () => {
      assert.isFalse(is.not.char('a'))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.char(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.char(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.char(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.char({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.char(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.char(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.char(undefined))
    })
  })

  describe('Тест интерфейса falsy', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.falsy([]))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.not.falsy(null))
    })
    it('Аргумент: true, результат: true', () => {
      assert.isTrue(is.not.falsy(true))
    })
    it('Аргумент: false, результат: false', () => {
      assert.isFalse(is.not.falsy(false))
    })
    it('Аргумент: negative number, результат: true', () => {
      assert.isTrue(is.not.falsy(-1))
    })
    it('Аргумент: positive number, результат: true', () => {
      assert.isTrue(is.not.falsy(1))
    })
    it('Аргумент: 0, результат: false', () => {
      assert.isFalse(is.not.falsy(0))
    })
    it('Аргумент: not empty string, результат: true', () => {
      assert.isTrue(is.not.falsy('Hello, world!'))
    })
    it('Аргумент: empty string, результат: false', () => {
      assert.isFalse(is.not.falsy(''))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.not.falsy(undefined))
    })
  })

  describe('Тест интерфейса float', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.float([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.float(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.float(true))
    })
    it('Аргумент: float, результат: false', () => {
      assert.isFalse(is.not.float(1.5))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.float(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.float(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.float(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.float({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.float(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.float(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.float(undefined))
    })
  })

  describe('Тест интерфейса fun', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.fun([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.fun(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.fun(true))
    })
    it('Аргумент: function, результат: false', () => {
      assert.isFalse(is.not.fun(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.fun(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.fun(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.fun({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.fun(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.fun(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.fun(undefined))
    })
  })

  describe('Тест интерфейса int', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.int([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.int(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.int(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.int(() => {}))
    })
    it('Аргумент: int, результат: false', () => {
      assert.isFalse(is.not.int(0))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.int(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.int(1.5))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.int({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.int(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.int(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.int(undefined))
    })
  })

  describe('Тест интерфейса nan', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.nan([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.nan(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.nan(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.nan(() => {}))
    })
    it('Аргумент: nan, результат: false', () => {
      assert.isFalse(is.not.nan(NaN))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.nan(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.nan(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.nan({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.nan(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.nan(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.nan(undefined))
    })
  })

  describe('Тест интерфейса null', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.null([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.null(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.null(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.null(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.not.null(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.null(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.null({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.null(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.null(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.null(undefined))
    })
  })

  describe('Тест интерфейса nullable', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.nullable([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.nullable(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.nullable(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.nullable(() => {}))
    })
    it('Аргумент: null, результат: false', () => {
      assert.isFalse(is.not.nullable(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.nullable(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.nullable({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.nullable(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.nullable(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.not.nullable(undefined))
    })
  })

  describe('Тест интерфейса num', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.num([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.num(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.num(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.num(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.num(null))
    })
    it('Аргумент: number, результат: false', () => {
      assert.isFalse(is.not.num(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.num({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.num(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.num(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.num(undefined))
    })
  })

  describe('Тест интерфейса obj', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.not.obj([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.obj(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.obj(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.obj(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.obj(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.obj(0))
    })
    it('Аргумент: object, результат: false', () => {
      assert.isFalse(is.not.obj({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.obj(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.obj(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.obj(undefined))
    })
  })

  describe('Тест интерфейса str', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.str([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.str(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.str(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.str(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.str(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.str(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.str({}))
    })
    it('Аргумент: string, результат: false', () => {
      assert.isFalse(is.not.str(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.str(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.str(undefined))
    })
  })

  describe('Тест интерфейса sym', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.sym([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.sym(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.sym(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.sym(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.sym(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.sym(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.sym({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.sym(''))
    })
    it('Аргумент: symbol, результат: false', () => {
      assert.isFalse(is.not.sym(Symbol('')))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.sym(undefined))
    })
  })

  describe('Тест интерфейса truthy', () => {
    it('Аргумент: array, результат: false', () => {
      assert.isFalse(is.not.truthy([]))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.truthy(null))
    })
    it('Аргумент: false, результат: false', () => {
      assert.isFalse(is.not.truthy(true))
    })
    it('Аргумент: true, результат: true', () => {
      assert.isTrue(is.not.truthy(false))
    })
    it('Аргумент: negative number, результат: false', () => {
      assert.isFalse(is.not.truthy(-1))
    })
    it('Аргумент: positive number, результат: false', () => {
      assert.isFalse(is.not.truthy(1))
    })
    it('Аргумент: 0, результат: true', () => {
      assert.isTrue(is.not.truthy(0))
    })
    it('Аргумент: not empty string, результат: false', () => {
      assert.isFalse(is.not.truthy('Hello, world!'))
    })
    it('Аргумент: empty string, результат: true', () => {
      assert.isTrue(is.not.truthy(''))
    })
    it('Аргумент: undefined, результат: true', () => {
      assert.isTrue(is.not.truthy(undefined))
    })
  })

  describe('Тест интерфейса undef', () => {
    it('Аргумент: array, результат: true', () => {
      assert.isTrue(is.not.undef([]))
    })
    it('Аргумент: bigint, результат: true', () => {
      assert.isTrue(is.not.undef(BigInt('')))
    })
    it('Аргумент: boolean, результат: true', () => {
      assert.isTrue(is.not.undef(true))
    })
    it('Аргумент: function, результат: true', () => {
      assert.isTrue(is.not.undef(() => {}))
    })
    it('Аргумент: null, результат: true', () => {
      assert.isTrue(is.not.undef(null))
    })
    it('Аргумент: number, результат: true', () => {
      assert.isTrue(is.not.undef(0))
    })
    it('Аргумент: object, результат: true', () => {
      assert.isTrue(is.not.undef({}))
    })
    it('Аргумент: string, результат: true', () => {
      assert.isTrue(is.not.undef(''))
    })
    it('Аргумент: symbol, результат: true', () => {
      assert.isTrue(is.not.undef(Symbol('')))
    })
    it('Аргумент: undefined, результат: false', () => {
      assert.isFalse(is.not.undef(undefined))
    })
  })
})
