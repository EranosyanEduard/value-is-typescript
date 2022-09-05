const DefaultType = typeof ''

/**
 * @description
 * Тип, представляющий допустимые типы значений.
 */
export type Types =
  | typeof DefaultType
  | 'ARR'
  | 'CHAR'
  | 'FLOAT'
  | 'INT'
  | 'NAN'
  | 'NULL'
  | 'NULLABLE'

/**
 * @description
 * Массив, представляющий множество допустимых значений.
 */
export const TypeList: readonly Types[] = [
  'ARR',
  'bigint',
  'boolean',
  'CHAR',
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
  'undefined'
]
