const DefaultType = typeof ''

/**
 * @description
 * Тип, представляющий допустимые типы значений.
 */
export type Types =
  | typeof DefaultType
  | 'ARR'
  | 'CHAR'
  | 'DATE'
  | 'ERR'
  | 'FALSY'
  | 'FLOAT'
  | 'INT'
  | 'MAP'
  | 'NAN'
  | 'NULL'
  | 'NULLABLE'
  | 'REGEXP'
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
  'DATE',
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
  'REGEXP',
  'SET',
  'string',
  'symbol',
  'TRUTHY',
  'undefined'
]
