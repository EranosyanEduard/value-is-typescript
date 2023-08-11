import { Predicate } from '../../../models'
import { IChecker } from './model'

class Checker<K extends string, V> implements IChecker<K, V> {
  /**
   * @description
   * Словарь, содержащий функции для проверки значения.
   * @private
   */
  readonly #checkers: Map<K, Predicate<V>>

  constructor(
    checkerKeys: readonly K[],
    getChecker: (checkerKey: K) => Predicate<V>
  ) {
    this.#checkers = new Map(checkerKeys.map((key) => [key, getChecker(key)]))
  }

  check(checkerKey: K, value: V): boolean | never {
    const check = this.#checkers.get(checkerKey)

    if (check === undefined) {
      throw new Error(
        `Функция для проверки значения с ключом ${checkerKey} не найдена`
      )
    }

    return check(value)
  }
}

export default Checker
