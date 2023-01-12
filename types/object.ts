var car:{name : string, weight : number } = {
    name : "toyota",
    weight : 50
};

console.log("car : " , car);

const toyotaCar : { type: string, mileage?: number = 0 } = { 
    type: "Toyota"
};

toyotaCar.mileage = 2000;
console.log(toyotaCar);