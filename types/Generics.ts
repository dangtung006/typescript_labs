// Generics Type

var lastOfArr = <T>(arr: Array<T>) => arr[arr.length - 1];

const listNum = lastOfArr([1, 2, 3]);
const listStr = lastOfArr(['1', '2', '3']);

console.log("listNum : " , listNum);
console.log("listStr : " , listStr);

const makeArr = <T>(x:T) => [x];
console.log(makeArr(null));

const makeArrXY = <X , Y>(x: X, y: Y) => [x, y];
console.log(makeArrXY(1, "1"));

const makeFullName = <T extends { firstName: string, lastName : string}> (obj: T) =>{
    var fullName : string = `${obj.firstName} ${obj.lastName}`;
    console.log("fullName : " , fullName)
}

makeFullName({ firstName : 'Peter' , lastName : 'Dao' });