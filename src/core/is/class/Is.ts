import { emptyChecker, typeChecker } from '../../checkers'

class Is {
  readonly empty = {
    arr: (v: unknown[] | unknown[][]): boolean => {
      return this.#check(emptyChecker, 'ARR', v)
    },
    obj: (v: object | object[]): boolean => {
      return this.#check(emptyChecker, 'object', v)
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

  float(v: unknown): boolean {
    return this.#check(typeChecker, 'FLOAT', v)
  }

  fun(v: unknown): boolean {
    return this.#check(typeChecker, 'function', v)
  }

  int(v: unknown): boolean {
    return this.#check(typeChecker, 'INT', v)
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

  str(v: unknown): boolean {
    return this.#check(typeChecker, 'string', v)
  }

  sym(v: unknown): boolean {
    return this.#check(typeChecker, 'symbol', v)
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
      if (this.#all) {
        result = val.length > 0 ? val.every(check) : false
        this.#all = false
      } else if (this.#any) {
        result = val.length > 0 ? val.some(check) : false
        this.#any = false
      } else {
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
