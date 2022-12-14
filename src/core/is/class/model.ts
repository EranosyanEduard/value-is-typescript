import { Predicate, TypeGuardA, TypeGuardB } from '../../../models'

/**
 * @description
 * Тип, представляющий названия интерфейсов, доступных для проверки значений.
 */
export type Keys =
  | 'arr'
  | 'bigint'
  | 'bool'
  | 'char'
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
  not: Record<Keys, Predicate> & {
    all: AllAndAny
    any: AllAndAny
    empty: IIs['empty']
  }

  arr: TypeGuardA<unknown[]>
  bigint: TypeGuardA<bigint>
  bool: TypeGuardA<boolean>
  char: Predicate
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
