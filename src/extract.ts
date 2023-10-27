type MixedTypes =
    | 'Hi'
    | 123
    | ['ts','js']
    | {name: 'ts', age: number}
    | "Hey"
    | {name: 'ts', age: number}
    | 13
    | [12,13,14]

    type StringsType = Extract<MixedTypes, string>
    type NumbersType = Extract<MixedTypes, number>
    type ProductType1 = Extract<MixedTypes, {name: 'ts'}>
    type ProductType2 = Extract<MixedTypes, {price: number}>
    type ProductArray1 = Extract<MixedTypes, []>
    type ProductArray2 = Extract<MixedTypes, Array<string>>
    type ProductArray3 = Extract<MixedTypes, Array<number>>