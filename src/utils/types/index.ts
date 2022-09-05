const DefaultType = typeof ''

/**
 * @description
 * Тип, представляющий допустимые типы значений.
 */
export type Types =
  | typeof DefaultType
  | 'ARR'
  | 'CHAR'
  | 'FALSY'
  | 'FLOAT'
  | 'INT'
  | 'NAN'
  | 'NULL'
  | 'NULLABLE'
  | 'TRUTHY'

/**
 * @description
 * Массив, представляющий множество допустимых значений.
 */
export const TypeList: readonly Types[] = [
  'ARR',
  'bigint',
  'boolean',
  'CHAR',
  'FALSY',
  'FLOAT',
  'function',
  'INT',
  'NAN',
  'NULL',
  'NULLABLE',
  'number',
  'object',
  'string',
  'symbol',
  'TRUTHY',
  'undefined'
]
