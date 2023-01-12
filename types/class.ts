class Student {
    public name: string
    private age : number
    readonly  gender : boolean

    constructor(name:string , age: number, gender: boolean){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }


    getAge(){
        return this.age;
    }
}

var Tom   = new Student("tom" , 20, true);
var Tien  = new Student("tien", 30, true);

let myGroup:Student[] = [];

myGroup.push(Tom);
myGroup.push(Tien);

for(var idx = 0; idx < myGroup.length;  idx++){
    var age = myGroup[idx].getAge();
    console.log("age : ", age);
}