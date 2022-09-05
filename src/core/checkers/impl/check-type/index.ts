import { TypeList } from '../../../../utils'
import Checker from '../../class'

export default new Checker(TypeList, (checkerKey) => {
  switch (checkerKey) {
    case 'ARR':
      return (v) => Array.isArray(v)
    case 'CHAR':
      return (v) => typeof v === 'string' && v.length === 1
    case 'FLOAT':
      return (v) =>
        typeof v === 'number' && Number.isFinite(v) && !Number.isInteger(v)
    case 'INT':
      return (v) => Number.isInteger(v)
    case 'NAN':
      return (v) => Number.isNaN(v)
    case 'NULL':
      return (v) => v === null
    case 'NULLABLE':
      return (v) => v === null || v === undefined
    case 'object':
      return (v) => typeof v === 'object' && v !== null
    default:
      // eslint-disable-next-line valid-typeof
      return (v) => typeof v === checkerKey
  }
})
