const square = (side: number)=> side * side;
console.log(square(10));

const add = (a: number, b: number, c? :number = 0) => {
    return  a + b + c;
}

console.log(add(1, 2));

const minus = (a : number, b: number) : number => a - b;
console.log(minus(1, 2));

const div = (a: number, b:number) => a/b;
console.log(div(1,2));