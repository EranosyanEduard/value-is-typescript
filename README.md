# is

"Is" is micro check library written with typescript.

## Interface

```ts
/**
 * @description
 * Type is interface names.
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
 * Type is lib interface.
 */
export interface Is {
    all: {
        arr: (v: unknown[]) => v is unknown[][]
        bigint: (v: unknown[]) => v is bigint[]
        bool: (v: unknown[]) => v is boolean[]
        char: (v: unknown[]) => boolean
        float: (v: unknown[]) => boolean
        fun: (v: unknown[]) => v is Function[]
        int: (v: unknown[]) => boolean
        nan: (v: unknown[]) => boolean
        null: (v: unknown[]) => v is null[]
        nullable: (v: unknown[]) => v is Array<null | undefined>
        num: (v: unknown[]) => v is number[]
        obj: (v: unknown[]) => v is object[]
        str: (v: unknown[]) => v is string[]
        sym: (v: unknown[]) => v is symbol[]
        undef: (v: unknown[]) => v is undefined[]

        empty: {
            arr: (v: unknown[][]) => boolean
            obj: (v: object[]) => boolean
            str: (v: string[]) => boolean
        }
    }

    any: Record<Keys, (v: unknown[]) => boolean> & {
        empty: {
            arr: (v: unknown[][]) => boolean
            obj: (v: object[]) => boolean
            str: (v: string[]) => boolean
        }
    }

    not: Record<Keys, (v: unknown) => boolean> & {
        all: Record<Keys, (v: unknown[]) => boolean> & {
            empty: {
                arr: (v: unknown[][]) => boolean
                obj: (v: object[]) => boolean
                str: (v: string[]) => boolean
            }
        }

        any: Record<Keys, (v: unknown[]) => boolean> & {
            empty: {
                arr: (v: unknown[][]) => boolean
                obj: (v: object[]) => boolean
                str: (v: string[]) => boolean
            }
        }

        empty: {
            arr: (v: unknown[]) => boolean
            obj: (v: object) => boolean
            str: (v: string) => boolean
        }
    }

    arr: (v: unknown) => v is unknown[]
    bigint: (v: unknown) => v is bigint
    bool: (v: unknown) => v is boolean
    char: (v: unknown) => boolean
    float: (v: unknown) => boolean
    fun: (v: unknown) => v is Function
    int: (v: unknown) => boolean
    nan: (v: unknown) => boolean
    null: (v: unknown) => v is null
    nullable: (v: unknown) => v is null | undefined
    num: (v: unknown) => v is number
    obj: (v: unknown) => v is object
    str: (v: unknown) => v is string
    sym: (v: unknown) => v is symbol
    undef: (v: unknown) => v is undefined

    empty: {
        arr: (v: unknown[]) => boolean
        obj: (v: object) => boolean
        str: (v: string) => boolean
    }
}
```
