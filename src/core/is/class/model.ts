import { Predicate, TypeGuardA, TypeGuardB } from '../../../models'

/**
 * @description
 * Тип, представляющий названия интерфейсов, доступных для проверки значений.
 */
type Keys =
  | 'arr'
  | 'bigint'
  | 'bool'
  | 'char'
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
  char: Predicate
  float: Predicate
  fun: TypeGuardB<Function>
  int: Predicate
  nan: Predicate
  null: TypeGuardB<null>
  nullable: TypeGuardB<Array<null | undefined>>
  num: TypeGuardB<number>
  obj: TypeGuardB<object>
  str: TypeGuardB<string>
  sym: TypeGuardB<symbol>
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
  undef: TypeGuardA<undefined>

  empty: {
    arr: Predicate<unknown[]>
    obj: Predicate<object>
    str: Predicate<string>
  }
}
