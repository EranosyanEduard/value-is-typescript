import {
  type Predicate,
  type TypeGuardA,
  type TypeGuardB,
  type TypeGuardC
} from '../../../models'

/**
 * @description
 * Тип, представляющий названия интерфейсов, доступных для проверки значений.
 */
export type Keys =
  | 'arr'
  | 'bigint'
  | 'bool'
  | 'char'
  | 'date'
  | 'err'
  | 'falsy'
  | 'float'
  | 'fun'
  | 'int'
  | 'map'
  | 'nan'
  | 'null'
  | 'nullable'
  | 'num'
  | 'obj'
  | 'regexp'
  | 'set'
  | 'str'
  | 'sym'
  | 'truthy'
  | 'undef'

/**
 * @description
 * Тип, представляющий интерфейсы all и any интерфейса проверки значений.
 */
type AllAndAny = Record<Keys, Predicate<unknown[]>> & {
  empty: {
    arr: Predicate<unknown[][]>
    map: Predicate<Array<Map<unknown, unknown>>>
    obj: Predicate<object[]>
    set: Predicate<Array<Set<unknown>>>
    str: Predicate<string[]>
  }
}

/**
 * @description
 * Тип, представляющий основной интерфейс all интерфейса проверки значений.
 */
interface All {
  arr: TypeGuardB<unknown[]>
  bigint: TypeGuardB<bigint>
  bool: TypeGuardB<boolean>
  char: Predicate<unknown[]>
  date: TypeGuardB<Date[]>
  err: TypeGuardB<Error>
  falsy: Predicate<unknown[]>
  float: Predicate<unknown[]>
  fun: TypeGuardB<Function>
  int: Predicate<unknown[]>
  map: TypeGuardB<Map<unknown, unknown>>
  nan: Predicate<unknown[]>
  null: TypeGuardB<null>
  nullable: TypeGuardB<Array<null | undefined>>
  num: TypeGuardB<number>
  obj: TypeGuardB<object>
  regexp: TypeGuardB<RegExp[]>
  set: TypeGuardB<Set<unknown>>
  str: TypeGuardB<string>
  sym: TypeGuardB<symbol>
  truthy: Predicate<unknown[]>
  undef: TypeGuardB<undefined>
}

/**
 * @description
 * Тип, представляющий интерфейсы для проверки значений.
 */
export interface IIs {
  all: All & Pick<AllAndAny, 'empty'>
  any: AllAndAny
  not: {
    arr: TypeGuardC<any[]>
    bigint: TypeGuardC<bigint>
    bool: TypeGuardC<boolean>
    char: Predicate
    date: TypeGuardC<Date>
    err: TypeGuardC<Error>
    falsy: Predicate
    float: Predicate
    fun: TypeGuardC<(...args: any) => any>
    int: Predicate
    map: TypeGuardC<Map<any, any>>
    nan: Predicate
    null: TypeGuardC<null>
    nullable: TypeGuardC<null | undefined>
    num: TypeGuardC<number>
    obj: TypeGuardC<object>
    regexp: TypeGuardC<RegExp>
    set: TypeGuardC<Set<any>>
    str: TypeGuardC<string>
    sym: TypeGuardC<symbol>
    truthy: Predicate
    undef: TypeGuardC<undefined>
  } & {
    all: AllAndAny
    any: AllAndAny
    empty: IIs['empty']
  }

  arr: TypeGuardA<unknown[]>
  bigint: TypeGuardA<bigint>
  bool: TypeGuardA<boolean>
  char: Predicate
  date: TypeGuardA<Date>
  err: TypeGuardA<Error>
  falsy: Predicate
  float: Predicate
  fun: TypeGuardA<Function>
  int: Predicate
  map: TypeGuardA<Map<unknown, unknown>>
  nan: Predicate
  null: TypeGuardA<null>
  nullable: TypeGuardA<null | undefined>
  num: TypeGuardA<number>
  obj: TypeGuardA<object>
  regexp: TypeGuardA<RegExp>
  set: TypeGuardA<Set<unknown>>
  str: TypeGuardA<string>
  sym: TypeGuardA<symbol>
  truthy: Predicate
  undef: TypeGuardA<undefined>

  empty: {
    arr: Predicate<unknown[]>
    map: Predicate<Map<unknown, unknown>>
    obj: Predicate<object>
    set: Predicate<Set<unknown>>
    str: Predicate<string>
  }
}
