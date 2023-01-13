// Type in Typescript inlude :
// String, number, boolean, Object, Array, Tuple, Enum, Any, Void, Never, Union, Type Aliases, Interface;

var a:boolean = true;
var b:string  = "true";
var c:number  = 1;

var person:{
    name : string,
    age  : number
} = {
    name : "Peter",
    age : 20
}

var list_Num: number[] = [ 1, 2, 3];
var list_Str: string[] = [ '1', '2', '3'];
var list_all: any[]  = [1, 2, false, '1', null];

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

var outTuple:[ number, string, boolean] = [ 1, '1', true];


var ID: string | number = 1; // Union Types;


type Student = {
    name :string,
    age : number
}

const Peter : Student = {
    name : 'Peter',
    age : 20
}

interface Rectangle {
    height: number,
    width: number
}
const myRectangle: Rectangle = {
    height : 20,
    width : 20
}

