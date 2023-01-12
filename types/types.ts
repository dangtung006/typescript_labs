type StringOrNumber  = string | number;

type Student = {
    id : StringOrNumber,
    name : string,
    age : number,
    addr : string
}

var getStudentInfo = (id: StringOrNumber): void => {
    console.log({
        id : id,
        name : "demo",
        age : 32,
        addr : "HN"
    });
}

getStudentInfo(1);