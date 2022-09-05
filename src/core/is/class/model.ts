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
  | 'falsy'
  | 'float'
  | 'fun'
  | 'int'
  | 'nan'
  | 'null'
  | 'nullable'
  | 'num'
  | 'obj'
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
    obj: Predicate<object[]>
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
  falsy: Predicate<unknown[]>
  float: Predicate<unknown[]>
  fun: TypeGuardB<Function>
  int: Predicate<unknown[]>
  nan: Predicate<unknown[]>
  null: TypeGuardB<null>
  nullable: TypeGuardB<Array<null | undefined>>
  num: TypeGuardB<number>
  obj: TypeGuardB<object>
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
  not: Record<Keys, Predicate> &
    Pick<IIs, 'empty'> &
    Record<'all' | 'any', AllAndAny>

  arr: TypeGuardA<unknown[]>
  bigint: TypeGuardA<bigint>
  bool: TypeGuardA<boolean>
  char: Predicate
  falsy: Predicate
  float: Predicate
  fun: TypeGuardA<Function>
  int: Predicate
  nan: Predicate
  null: TypeGuardA<null>
  nullable: TypeGuardA<null | undefined>
  num: TypeGuardA<number>
  obj: TypeGuardA<object>
  str: TypeGuardA<string>
  sym: TypeGuardA<symbol>
  truthy: Predicate
  undef: TypeGuardA<undefined>

  empty: {
    arr: Predicate<unknown[]>
    obj: Predicate<object>
    str: Predicate<string>
  }
}
