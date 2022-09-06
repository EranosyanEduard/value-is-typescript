import { Types } from '../../../../utils'
import Checker from '../../class'

export default new Checker<
  Extract<Types, 'ARR' | 'MAP' | 'object' | 'SET' | 'string'>,
  object | string
>(['ARR', 'MAP', 'object', 'SET', 'string'], (checkerKey) => {
  switch (checkerKey) {
    case 'ARR':
    case 'string':
      return (v) => (v as string | []).length === 0
    case 'MAP':
    case 'SET':
      return (v) => (v as Map<unknown, unknown> | Set<unknown>).size === 0
    case 'object':
      return (v) => Object.keys(v as object).length === 0
    default:
      throw new Error('Неожиданная ошибка при проверке значения')
  }
})
