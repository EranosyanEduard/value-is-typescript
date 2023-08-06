import { Predicate } from '../../../models'
import { emptyChecker, typeChecker } from '../../checkers'
import { Keys } from './model'

class Is implements Record<Keys, Predicate> {
  readonly empty = {
    arr: (v: unknown[] | unknown[][]): boolean => {
      return this.#check(emptyChecker, 'ARR', v)
    },
    map: (v: Map<unknown, unknown> | Array<Map<unknown, unknown>>): boolean => {
      return this.#check(emptyChecker, 'MAP', v)
    },
    obj: (v: object | object[]): boolean => {
      return this.#check(emptyChecker, 'object', v)
    },
    set: (v: Set<unknown> | Array<Set<unknown>>): boolean => {
      return this.#check(emptyChecker, 'SET', v)
    },
    str: (v: string | string[]): boolean => {
      return this.#check(emptyChecker, 'string', v)
    }
  }

  #all = false
  #any = false
  #not = false

  get all(): this {
    this.#all = true
    return this
  }

  get any(): this {
    this.#any = true
    return this
  }

  get not(): this {
    this.#not = true
    return this
  }

  arr(v: unknown): boolean {
    return this.#check(typeChecker, 'ARR', v)
  }

  bigint(v: unknown): boolean {
    return this.#check(typeChecker, 'bigint', v)
  }

  bool(v: unknown): boolean {
    return this.#check(typeChecker, 'boolean', v)
  }

  char(v: unknown): boolean {
    return this.#check(typeChecker, 'CHAR', v)
  }

  date(v: unknown): boolean {
    return this.#check(typeChecker, 'DATE', v)
  }

  err(v: unknown): boolean {
    return this.#check(typeChecker, 'ERR', v)
  }

  falsy(v: unknown): boolean {
    return this.#check(typeChecker, 'FALSY', v)
  }

  float(v: unknown): boolean {
    return this.#check(typeChecker, 'FLOAT', v)
  }

  fun(v: unknown): boolean {
    return this.#check(typeChecker, 'function', v)
  }

  int(v: unknown): boolean {
    return this.#check(typeChecker, 'INT', v)
  }

  map(v: unknown): boolean {
    return this.#check(typeChecker, 'MAP', v)
  }

  nan(v: unknown): boolean {
    return this.#check(typeChecker, 'NAN', v)
  }

  null(v: unknown): boolean {
    return this.#check(typeChecker, 'NULL', v)
  }

  nullable(v: unknown): boolean {
    return this.#check(typeChecker, 'NULLABLE', v)
  }

  num(v: unknown): boolean {
    return this.#check(typeChecker, 'number', v)
  }

  obj(v: unknown): boolean {
    return this.#check(typeChecker, 'object', v)
  }

  regexp(v: unknown): boolean {
    return this.#check(typeChecker, 'REGEXP', v)
  }

  set(v: unknown): boolean {
    return this.#check(typeChecker, 'SET', v)
  }

  str(v: unknown): boolean {
    return this.#check(typeChecker, 'string', v)
  }

  sym(v: unknown): boolean {
    return this.#check(typeChecker, 'symbol', v)
  }

  truthy(v: unknown): boolean {
    return this.#check(typeChecker, 'TRUTHY', v)
  }

  undef(v: unknown): boolean {
    return this.#check(typeChecker, 'undefined', v)
  }

  #check<T extends typeof emptyChecker | typeof typeChecker>(
    checker: T,
    key: Parameters<T['check']>[0],
    val: Parameters<T['check']>[1]
  ): boolean {
    // @ts-expect-error
    const check = (v: typeof val): boolean => checker.check(key, v)

    let result: ReturnType<typeof check>

    if (Array.isArray(val)) {
      let action: 'every' | 'some' | ''

      if (this.#all) {
        action = 'every'
        this.#all = false
      } else if (this.#any) {
        action = 'some'
        this.#any = false
      } else {
        action = ''
      }

      switch (action) {
        case 'every':
        case 'some': {
          const isEmpty = val.length === 0

          if (isEmpty) {
            result = false
            this.#not = false
          } else {
            result = val[action](check)
          }
          break
        }
        default:
          result = check(val)
      }
    } else {
      result = check(val)
    }

    result = this.#not ? !result : result
    this.#not = false

    return result
  }
}

export default Is
