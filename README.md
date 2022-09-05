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
> is.not.any.arr();
false

> is.any.empty.arr([ {}, '', [] ]);
true
> is.any.empty.arr([ {}, '', 22 ]);
false
> is.any.empty.arr([]);
false

> is.not.any.empty.arr([ {}, '', [] ]);
false
> is.not.any.empty.arr([ {}, '', 22 ]);
true
> is.not.any.empty.arr([]);
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
