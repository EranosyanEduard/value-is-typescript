import { Types } from '../../../../utils'
import Checker from '../../class'

export default new Checker<
  Extract<Types, 'ARR' | 'object' | 'string'>,
  object | string
>(['ARR', 'object', 'string'], (checkerKey) => {
  switch (checkerKey) {
    case 'ARR':
    case 'string':
    case 'object':
      return (v) => {
        if (Array.isArray(v) || typeof v === 'string') {
          return v.length === 0
        }
        return Object.keys(v).length === 0
      }
    default:
      throw new Error('Неожиданная ошибка при проверке значения')
  }
})
