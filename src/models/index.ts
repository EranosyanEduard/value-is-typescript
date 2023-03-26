/**
 * @description
 * Тип, представляющий функцию - предикат.
 */
export type Predicate<V = unknown> = (v: V) => boolean

/**
 * @description
 * Тип, представляющий функцию - предикат, выполняющий приведение типа.
 */
export type TypeGuardA<R> = (v: unknown) => v is R

/**
 * @description
 * Тип, представляющий функцию - предикат, выполняющий приведение типа.
 */
export type TypeGuardB<R> = (v: unknown[]) => v is R[]

/**
 * @description
 * Тип, представляющий функцию - предикат, выполняющий приведение типа.
 */
export type TypeGuardC<U> = <T>(v: T) => v is Exclude<T, U>
