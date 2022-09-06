# is

"Is" is micro check library written with typescript.

## **is.arr**

### Interface

```ts
interface is {
    arr: (arg: unknown) => arg is unknown[]

    all: {
        arr: (arg: unknown[]) => arg is Array<unknown[]>

        empty: {
            arr: (arg: Array<unknown[]>) => boolean
        }
    }

    any: {
        arr: (arg: unknown[]) => boolean

        empty: {
            arr: (arg: Array<unknown[]>) => boolean
        }
    }

    empty: {
        arr: (arg: unknown[]) => boolean
    }

    not: {
        arr: (arg: unknown) => boolean

        all: {
            arr: (arg: unknown[]) => boolean

            empty: {
                arr: (arg: Array<unknown[]>) => boolean
            }
        }

        any: {
            arr: (arg: unknown[]) => boolean

            empty: {
                arr: (arg: Array<unknown[]>) => boolean
            }
        }

        empty: {
            arr: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.arr([]);
true
> is.arr('');
false

> is.not.arr([]);
false
> is.not.arr('');
true

> is.empty.arr([]);
true
> is.empty.arr(['']);
false

> is.not.empty.arr([]);
false
> is.not.empty.arr(['']);
true

> is.all.arr([ [], [], [] ]);
true
> is.all.arr([ [], '', [] ]);
false
> is.all.arr([]);
false

> is.not.all.arr([ [], [], [] ]);
false
> is.not.all.arr([ [], '', [] ]);
true
> is.not.all.arr([]);
false

> is.all.empty.arr([ [], [], [] ]);
true
> is.all.empty.arr([ [], [''], [] ]);
false
> is.all.empty.arr([]);
false

> is.not.all.empty.arr([ [], [], [] ]);
false
> is.not.all.empty.arr([ [], [''], [] ]);
true
> is.not.all.empty.arr([]);
false

> is.any.arr([ {}, '', [] ]);
true
> is.any.arr([ {}, '', 22 ]);
false
> is.any.arr([]);
false

> is.not.any.arr([ {}, '', [] ]);
false
> is.not.any.arr([ {}, '', 22 ]);
true
> is.not.any.arr([]);
false

> is.any.empty.arr([ [''], [], [22] ]);
true
> is.any.empty.arr([ [''], [true], [22] ]);
false
> is.any.empty.arr([]);
false

> is.not.any.empty.arr([ [''], [], [22] ]);
false
> is.not.any.empty.arr([ [''], [true], [22] ]);
true
> is.not.any.empty.arr([]);
false
```

## **is.bigint**

### Interface

```ts
interface is {
    bigint: (arg: unknown) => arg is bigint

    all: {
        bigint: (arg: unknown[]) => arg is bigint[]
    }

    any: {
        bigint: (arg: unknown[]) => boolean
    }

    not: {
        bigint: (arg: unknown) => boolean

        all: {
            bigint: (arg: unknown[]) => boolean
        }

        any: {
            bigint: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.bigint(BigInt(''));
true
> is.bigint('');
false

> is.not.bigint(BigInt(''));
false
> is.not.bigint('');
true

> is.all.bigint([ BigInt(''), BigInt(''), BigInt('') ]);
true
> is.all.bigint([ BigInt(''), '', BigInt('') ]);
false
> is.all.bigint([]);
false

> is.not.all.bigint([ BigInt(''), BigInt(''), BigInt('') ]);
false
> is.not.all.bigint([ BigInt(''), '', BigInt('') ]);
true
> is.not.all.bigint([]);
false

> is.any.bigint([ {}, '', BigInt('') ]);
true
> is.any.bigint([ {}, '', 22 ]);
false
> is.any.bigint([]);
false

> is.not.any.bigint([ {}, '', BigInt('') ]);
false
> is.not.any.bigint([ {}, '', 22 ]);
true
> is.not.any.bigint([]);
false
```

## **is.bool**

### Interface

```ts
interface is {
    bool: (arg: unknown) => arg is boolean

    all: {
        bool: (arg: unknown[]) => arg is boolean[]
    }

    any: {
        bool: (arg: unknown[]) => boolean
    }

    not: {
        bool: (arg: unknown) => boolean

        all: {
            bool: (arg: unknown[]) => boolean
        }

        any: {
            bool: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.bool(true);
true
> is.bool(false);
true
> is.bool('');
false

> is.not.bool(true);
false
> is.not.bool(false);
false
> is.not.bool('');
true

> is.all.bool([ true, false, true ]);
true
> is.all.bool([ true, '', false ]);
false
> is.all.bool([]);
false

> is.not.all.bool([ true, false, true ]);
false
> is.not.all.bool([ true, '', false ]);
true
> is.not.all.bool([]);
false

> is.any.bool([ {}, '', true ]);
true
> is.any.bool([ {}, '', 22 ]);
false
> is.any.bool([]);
false

> is.not.any.bool([ {}, '', true ]);
false
> is.not.any.bool([ {}, '', 22 ]);
true
> is.not.any.bool([]);
false
```

## **is.char**

### Interface

```ts
interface is {
    char: (arg: unknown) => boolean

    all: {
        char: (arg: unknown[]) => boolean
    }

    any: {
        char: (arg: unknown[]) => boolean
    }

    not: {
        char: (arg: unknown) => boolean

        all: {
            char: (arg: unknown[]) => boolean
        }

        any: {
            char: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.char('a');
true
> is.char('');
false

> is.not.char('a');
false
> is.not.char('');
true

> is.all.char([ 'a', 'b', 'c' ]);
true
> is.all.char([ 'a', 22, 'c' ]);
false
> is.all.char([]);
false

> is.not.all.char([ 'a', 'b', 'c' ]);
false
> is.not.all.char([ 'a', 22, 'c' ]);
true
> is.not.all.char([]);
false

> is.any.char([ {}, '', 'a' ]);
true
> is.any.char([ {}, '', 22 ]);
false
> is.any.char([]);
false

> is.not.any.char([ {}, '', 'a' ]);
false
> is.not.any.char([ {}, '', 22 ]);
true
> is.not.any.char([]);
false
```

## **is.falsy**

### Interface

```ts
interface is {
    falsy: (arg: unknown) => boolean

    all: {
        falsy: (arg: unknown[]) => boolean
    }

    any: {
        falsy: (arg: unknown[]) => boolean
    }

    not: {
        falsy: (arg: unknown) => boolean

        all: {
            falsy: (arg: unknown[]) => boolean
        }

        any: {
            falsy: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.falsy('');
true
> is.falsy('a');
false

> is.not.falsy('');
false
> is.not.falsy('a');
true

> is.all.falsy([ false, 0, NaN, '', null, undefined ]);
true
> is.all.falsy([ false, 1, NaN, '', null, undefined ]);
false
> is.all.falsy([]);
false

> is.not.all.falsy([ false, 0, NaN, '', null, undefined ]);
false
> is.not.all.falsy([ false, 1, NaN, '', null, undefined ]);
true
> is.not.all.falsy([]);
false

> is.any.falsy([ true, 1, 'a', [], {}, null ]);
true
> is.any.falsy([ true, 1, 'a', [], {}, () => {} ]);
false
> is.any.falsy([]);
false

> is.not.any.falsy([ true, 1, 'a', [], {}, null ]);
false
> is.not.any.falsy([ true, 1, 'a', [], {}, () => {} ]);
true
> is.not.any.falsy([]);
false
```

## **is.float**

### Interface

```ts
interface is {
    float: (arg: unknown) => boolean

    all: {
        float: (arg: unknown[]) => boolean
    }

    any: {
        float: (arg: unknown[]) => boolean
    }

    not: {
        float: (arg: unknown) => boolean

        all: {
            float: (arg: unknown[]) => boolean
        }

        any: {
            float: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.float(2.2);
true
> is.float('');
false

> is.not.float(2.2);
false
> is.not.float('');
true

> is.all.float([ 1.1, 2.2, 3.3 ]);
true
> is.all.float([ 1.1, 2.2, '3.3' ]);
false
> is.all.float([]);
false

> is.not.all.float([ 1.1, 2.2, 3.3 ]);
false
> is.not.all.float([ 1.1, 2.2, '3.3' ]);
true
> is.not.all.float([]);
false

> is.any.float([ 1, 'a', 2.2 ]);
true
> is.any.float([ 1, 'a', true ]);
false
> is.any.float([]);
false

> is.not.any.float([ 1, 'a', 2.2 ]);
false
> is.not.any.float([ 1, 'a', true ]);
true
> is.not.any.float([]);
false
```

## **is.fun**

### Interface

```ts
interface is {
    fun: (arg: unknown) => arg is Function

    all: {
        fun: (arg: unknown[]) => arg is Function[]
    }

    any: {
        fun: (arg: unknown[]) => boolean
    }

    not: {
        fun: (arg: unknown) => boolean

        all: {
            fun: (arg: unknown[]) => boolean
        }

        any: {
            fun: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.fun(is.fun);
true
> is.fun('');
false

> is.not.fun(is.fun);
false
> is.not.fun('');
true

> is.all.fun([ is.fun, console.log, () => {} ]);
true
> is.all.fun([ is.fun, console.log, '' ]);
false
> is.all.fun([]);
false

> is.not.all.fun([ is.fun, console.log, () => {} ]);
false
> is.not.all.fun([ is.fun, console.log, '' ]);
true
> is.not.all.fun([]);
false

> is.any.fun([ {}, '', is.fun ]);
true
> is.any.fun([ {}, '', 22 ]);
false
> is.any.fun([]);
false

> is.not.any.fun([ {}, '', is.fun ]);
false
> is.not.any.fun([ {}, '', 22 ]);
true
> is.not.any.fun([]);
false
```

## **is.int**

### Interface

```ts
interface is {
    int: (arg: unknown) => boolean

    all: {
        int: (arg: unknown[]) => boolean
    }

    any: {
        int: (arg: unknown[]) => boolean
    }

    not: {
        int: (arg: unknown) => boolean

        all: {
            int: (arg: unknown[]) => boolean
        }

        any: {
            int: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.int(0);
true
> is.int('');
false

> is.not.int(0);
false
> is.not.int('');
true

> is.all.int([ 1, 2, 3 ]);
true
> is.all.int([ 1, 2, '' ]);
false
> is.all.int([]);
false

> is.not.all.int([ 1, 2, 3 ]);
false
> is.not.all.int([ 1, 2, '' ]);
true
> is.not.all.int([]);
false

> is.any.int([ {}, 1e3, '' ]);
true
> is.any.int([ {}, true, '' ]);
false
> is.any.int([]);
false

> is.not.any.int([ {}, 1e3, '' ]);
false
> is.not.any.int([ {}, true, '' ]);
true
> is.not.any.int([]);
false
```

## **is.nan**

### Interface

```ts
interface is {
    nan: (arg: unknown) => boolean

    all: {
        nan: (arg: unknown[]) => boolean
    }

    any: {
        nan: (arg: unknown[]) => boolean
    }

    not: {
        nan: (arg: unknown) => boolean

        all: {
            nan: (arg: unknown[]) => boolean
        }

        any: {
            nan: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.nan(NaN);
true
> is.nan('');
false

> is.not.nan(NaN);
false
> is.not.nan('');
true

> is.all.nan([ NaN, NaN, NaN ]);
true
> is.all.nan([ NaN, NaN, '' ]);
false
> is.all.nan([]);
false

> is.not.all.nan([ NaN, NaN, NaN ]);
false
> is.not.all.nan([ NaN, NaN, '' ]);
true
> is.not.all.nan([]);
false

> is.any.nan([ {}, NaN, '' ]);
true
> is.any.nan([ {}, true, '' ]);
false
> is.any.nan([]);
false

> is.not.any.nan([ {}, NaN, '' ]);
false
> is.not.any.nan([ {}, true, '' ]);
true
> is.not.any.nan([]);
false
```

## **is.null**

### Interface

```ts
interface is {
    null: (arg: unknown) => arg is null

    all: {
        null: (arg: unknown[]) => arg is null[]
    }

    any: {
        null: (arg: unknown[]) => boolean
    }

    not: {
        null: (arg: unknown) => boolean

        all: {
            null: (arg: unknown[]) => boolean
        }

        any: {
            null: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.null(null);
true
> is.null('');
false

> is.not.null(null);
false
> is.not.null('');
true

> is.all.null([ null, null, null ]);
true
> is.all.null([ null, null, '' ]);
false
> is.all.null([]);
false

> is.not.all.null([ null, null, null ]);
false
> is.not.all.null([ null, null, '' ]);
true
> is.not.all.null([]);
false

> is.any.null([ {}, null, '' ]);
true
> is.any.null([ {}, true, '' ]);
false
> is.any.null([]);
false

> is.not.any.null([ {}, null, '' ]);
false
> is.not.any.null([ {}, true, '' ]);
true
> is.not.any.null([]);
false
```

## **is.nullable**

### Interface

```ts
interface is {
    nullable: (arg: unknown) => arg is null | undefined

    all: {
        nullable: (arg: unknown[]) => arg is Array<null | undefined>
    }

    any: {
        nullable: (arg: unknown[]) => boolean
    }

    not: {
        nullable: (arg: unknown) => boolean

        all: {
            nullable: (arg: unknown[]) => boolean
        }

        any: {
            nullable: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.nullable(null);
true
> is.nullable(undefined);
true
> is.nullable('');
false

> is.not.nullable(null);
false
> is.not.nullable(undefined);
false
> is.not.nullable('');
true

> is.all.nullable([ null, undefined, null ]);
true
> is.all.nullable([ null, undefined, '' ]);
false
> is.all.nullable([]);
false

> is.not.all.nullable([ null, undefined, null ]);
false
> is.not.all.nullable([ null, undefined, '' ]);
true
> is.not.all.nullable([]);
false

> is.any.nullable([ {}, null, '' ]);
true
> is.any.nullable([ {}, undefined, '' ]);
true
> is.any.nullable([ {}, true, '' ]);
false
> is.any.nullable([]);
false

> is.not.any.nullable([ {}, null, '' ]);
false
> is.not.any.nullable([ {}, undefined, '' ]);
false
> is.not.any.nullable([ {}, true, '' ]);
true
> is.not.any.nullable([]);
false
```

## **is.num**

### Interface

```ts
interface is {
    num: (arg: unknown) => arg is number

    all: {
        num: (arg: unknown[]) => arg is number[]
    }

    any: {
        num: (arg: unknown[]) => boolean
    }

    not: {
        num: (arg: unknown) => boolean

        all: {
            num: (arg: unknown[]) => boolean
        }

        any: {
            num: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.num(22);
true
> is.num('');
false

> is.not.num(22);
false
> is.not.num('');
true

> is.all.num([ 1.1, 22, NaN ]);
true
> is.all.num([ 1.1, 22, '' ]);
false
> is.all.num([]);
false

> is.not.all.num([ 1.1, 22, NaN ]);
false
> is.not.all.num([ 1.1, 22, '' ]);
true
> is.not.all.num([]);
false

> is.any.num([ {}, 22, '' ]);
true
> is.any.num([ {}, true, '' ]);
false
> is.any.num([]);
false

> is.not.any.num([ {}, 22, '' ]);
false
> is.not.any.num([ {}, true, '' ]);
true
> is.not.any.num([]);
false
```

## **is.obj**

### Interface

```ts
interface is {
    obj: (arg: unknown) => arg is object

    all: {
        obj: (arg: unknown[]) => arg is object[]

        empty: {
            obj: (arg: object[]) => boolean
        }
    }

    any: {
        obj: (arg: unknown[]) => boolean

        empty: {
            obj: (arg: object[]) => boolean
        }
    }

    empty: {
        obj: (arg: object) => boolean
    }

    not: {
        obj: (arg: unknown) => boolean

        all: {
            obj: (arg: unknown[]) => boolean

            empty: {
                obj: (arg: object[]) => boolean
            }
        }

        any: {
            obj: (arg: unknown[]) => boolean

            empty: {
                obj: (arg: object[]) => boolean
            }
        }

        empty: {
            obj: (arg: object) => boolean
        }
    }
}
```

### Example

```ts
> is.obj([]);
true
> is.obj({});
true
> is.obj('');
false

> is.not.obj([]);
false
> is.not.obj({});
false
> is.not.obj('');
true

> is.empty.obj([]);
true
> is.empty.obj({});
true
> is.empty.obj([0]);
false
> is.empty.obj({ id: 0 });
false

> is.not.empty.obj([]);
false
> is.not.empty.obj({});
false
> is.not.empty.obj([0]);
true
> is.not.empty.obj({ id: 0 });
true

> is.all.obj([ {}, [], {} ]);
true
> is.all.obj([ {}, [], '' ]);
false
> is.all.obj([]);
false

> is.not.all.obj([ {}, [], {} ]);
false
> is.not.all.obj([ {}, [], '' ]);
true
> is.not.all.obj([]);
false

> is.all.empty.obj([ {}, [], {} ]);
true
> is.all.empty.obj([ {}, [''], {} ]);
false
> is.all.empty.obj([]);
false

> is.not.all.empty.obj([ {}, [], {} ]);
false
> is.not.all.empty.obj([ {}, [''], {} ]);
true
> is.not.all.empty.obj([]);
false

> is.any.obj([ '', {}, 22 ]);
true
> is.any.obj([ '', true, 22 ]);
false
> is.any.obj([]);
false

> is.not.any.obj([ '', {}, 22 ]);
false
> is.not.any.obj([ '', true, 22 ]);
true
> is.not.any.obj([]);
false

> is.any.empty.obj([ is, {}, [22] ]);
true
> is.any.empty.obj([ is, { id: 22 }, [22] ]);
false
> is.any.empty.obj([]);
false

> is.not.any.empty.obj([ is, {}, [22] ]);
false
> is.not.any.empty.obj([ is, { id: 22 }, [22] ]);
true
> is.not.any.empty.obj([]);
false
```

## **is.str**

### Interface

```ts
interface is {
    str: (arg: unknown) => arg is string

    all: {
        str: (arg: unknown[]) => arg is string[]

        empty: {
            str: (arg: string[]) => boolean
        }
    }

    any: {
        str: (arg: unknown[]) => boolean

        empty: {
            str: (arg: string[]) => boolean
        }
    }

    empty: {
        str: (arg: string) => boolean
    }

    not: {
        str: (arg: unknown) => boolean

        all: {
            str: (arg: unknown[]) => boolean

            empty: {
                str: (arg: string[]) => boolean
            }
        }

        any: {
            str: (arg: unknown[]) => boolean

            empty: {
                str: (arg: string[]) => boolean
            }
        }

        empty: {
            str: (arg: string) => boolean
        }
    }
}
```

### Example

```ts
> is.str('');
true
> is.str([]);
false

> is.not.str('');
false
> is.not.str([]);
true

> is.empty.str('');
true
> is.empty.str('a');
false

> is.not.empty.str('');
false
> is.not.empty.str('a');
true

> is.all.str([ '', '', '' ]);
true
> is.all.str([ '', '', [] ]);
false
> is.all.str([]);
false

> is.not.all.str([ '', '', '' ]);
false
> is.not.all.str([ '', '', [] ]);
true
> is.not.all.str([]);
false

> is.all.empty.str([ '', '', '' ]);
true
> is.all.empty.str([ '', 'a', '' ]);
false
> is.all.empty.str([]);
false

> is.not.all.empty.str([ '', '', '' ]);
false
> is.not.all.empty.str([ '', 'a', '' ]);
true
> is.not.all.empty.str([]);
false

> is.any.str([ {}, '', [] ]);
true
> is.any.str([ {}, true, 22 ]);
false
> is.any.str([]);
false

> is.not.any.str([ {}, '', [] ]);
false
> is.not.any.str([ {}, true, 22 ]);
true
> is.not.any.str([]);
false

> is.any.empty.str([ 'a', '', 'b' ]);
true
> is.any.empty.str([ 'a', '_', 'b' ]);
false
> is.any.empty.str([]);
false

> is.not.any.empty.str([ 'a', '', 'b' ]);
false
> is.not.any.empty.str([ 'a', '_', 'b' ]);
true
> is.not.any.empty.str([]);
false
```

## **is.sym**

### Interface

```ts
interface is {
    sym: (arg: unknown) => arg is symbol

    all: {
        sym: (arg: unknown[]) => arg is symbol[]
    }

    any: {
        sym: (arg: unknown[]) => boolean
    }

    not: {
        sym: (arg: unknown) => boolean

        all: {
            sym: (arg: unknown[]) => boolean
        }

        any: {
            sym: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.sym(Symbol(''));
true
> is.sym('');
false

> is.not.sym(Symbol(''));
false
> is.not.sym('');
true

> is.all.sym([ Symbol(''), Symbol(''), Symbol('') ]);
true
> is.all.sym([ Symbol(''), Symbol(''), '' ]);
false
> is.all.sym([]);
false

> is.not.all.sym([ Symbol(''), Symbol(''), Symbol('') ]);
false
> is.not.all.sym([ Symbol(''), Symbol(''), '' ]);
true
> is.not.all.sym([]);
false

> is.any.sym([ {}, Symbol(''), '' ]);
true
> is.any.sym([ {}, 22, '' ]);
false
> is.any.sym([]);
false

> is.not.any.sym([ {}, Symbol(''), '' ]);
false
> is.not.any.sym([ {}, 22, '' ]);
true
> is.not.any.sym([]);
false
```

## **is.truthy**

### Interface

```ts
interface is {
    truthy: (arg: unknown) => boolean

    all: {
        truthy: (arg: unknown[]) => boolean
    }

    any: {
        truthy: (arg: unknown[]) => boolean
    }

    not: {
        truthy: (arg: unknown) => boolean

        all: {
            truthy: (arg: unknown[]) => boolean
        }

        any: {
            truthy: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.truthy('a');
true
> is.truthy('');
false

> is.not.truthy('a');
false
> is.not.truthy('');
true

> is.all.truthy([ true, 1, 'a', [], {}, () => {} ]);
true
> is.all.truthy([ true, 0, 'a', [], {}, () => {} ]);
false
> is.all.truthy([]);
false

> is.not.all.truthy([ true, 1, 'a', [], {}, () => {} ]);
false
> is.not.all.truthy([ true, 0, 'a', [], {}, () => {} ]);
true
> is.not.all.truthy([]);
false

> is.any.truthy([ false, 0, '', null, undefined, [] ]);
true
> is.any.truthy([ false, 0, '', null, undefined ]);
false
> is.any.truthy([]);
false

> is.not.any.truthy([ false, 0, '', null, undefined, [] ]);
false
> is.not.any.truthy([ false, 0, '', null, undefined ]);
true
> is.not.any.truthy([]);
false
```

## **is.undef**

### Interface

```ts
interface is {
    undef: (arg: unknown) => arg is undefined

    all: {
        undef: (arg: unknown[]) => arg is undefined[]
    }

    any: {
        undef: (arg: unknown[]) => boolean
    }

    not: {
        undef: (arg: unknown) => boolean

        all: {
            undef: (arg: unknown[]) => boolean
        }

        any: {
            undef: (arg: unknown[]) => boolean
        }
    }
}
```

### Example

```ts
> is.undef(undefined);
true
> is.undef('');
false

> is.not.undef(undefined);
false
> is.not.undef('');
true

> is.all.undef([ undefined, undefined, undefined ]);
true
> is.all.undef([ undefined, undefined, '' ]);
false
> is.all.undef([]);
false

> is.not.all.undef([ undefined, undefined, undefined ]);
false
> is.not.all.undef([ undefined, undefined, '' ]);
true
> is.not.all.undef([]);
false

> is.any.undef([ {}, undefined, '' ]);
true
> is.any.undef([ {}, 22, '' ]);
false
> is.any.undef([]);
false

> is.not.any.undef([ {}, undefined, '' ]);
false
> is.not.any.undef([ {}, 22, '' ]);
true
> is.not.any.undef([]);
false
```
