const DefaultType = typeof ''

/**
 * @description
 * Тип, представляющий допустимые типы значений.
 */
export type Types =
  | typeof DefaultType
  | 'ARR'
  | 'CHAR'
  | 'ERR'
  | 'FALSY'
  | 'FLOAT'
  | 'INT'
  | 'MAP'
  | 'NAN'
  | 'NULL'
  | 'NULLABLE'
  | 'SET'
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
  'ERR',
  'FALSY',
  'FLOAT',
  'function',
  'INT',
  'MAP',
  'NAN',
  'NULL',
  'NULLABLE',
  'number',
  'object',
  'SET',
  'string',
  'symbol',
  'TRUTHY',
  'undefined'
]
