type MixedTypess =
    | 'Hi'
    | 123
    | ['ts','js']
    | {name: 'ts', age: number}
    | "Hey"
    | {name: 'ts', age: number}
    | 13
    | [12,13,14]

    type NotStrings = Exclude<MixedTypess, string>
    type NotNumbers = Exclude<MixedTypess, number>
    type NotProduct = Exclude<MixedTypess, {name: 'ts'}>
    type NotProduct1 = Exclude<MixedTypess, {price:number}>
    type NotEmptyArray = Exclude<MixedTypess, []>
