type rgbColor = 'red' | 'green' | 'blue';

type RecordFake1<UnionType extends string, valueType> = {
    [ Key in UnionType] : valueType
}

type RecordFake2<UnionType extends string, valueType = string> = {
    [ Key in UnionType] : valueType
}

type RGB = Record<rgbColor, number>;

const firstColor : RecordFake2<rgbColor, number> = {
    red : 1,
    green : 2,
    blue : 256
}

type Query = {
    [key : string] : string
}

type maximumColorValue = 256;

type computedRange<N extends number , Result extends Array<unknown> = []> = 
    Result['length'] extends N 
    ? Result
    : computedRange<N, [...Result, Result['length']]>


type fromZeroTo256 = computedRange<maximumColorValue>[number];

type rgb = {
    [key in rgbColor] : fromZeroTo256
}

//Indexed Access Types
enum personA {
    name ='Peter',
    age  = 30
}

type person = typeof personA


