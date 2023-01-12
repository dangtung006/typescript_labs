interface Student {
    name : string
    age: number
    gender: boolean
    introduce (name: string) : void
}

const Tom : Student = {
    name : "Tome",
    age  : 18,
    gender : true,

    introduce(name: string):void{
        console.log(`my name is : ${name}`);
    }
}

const getStudentInfo = (student:Student):void => {
    console.log(student.name);
}

getStudentInfo(Tom);