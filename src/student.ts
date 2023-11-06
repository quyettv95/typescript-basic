
interface Student {
    readonly fullname: string;
    email: string;
    age?:number;
    phone: number;
}

const quyet: Student = {
    fullname: "Quyet",
    phone: 9290281,
    email: "quyettv.it@gmail.com",
    age: 30
}

const sang: Student = {
    fullname: "Sang",
    phone: 9290281,
    email: "quyettv.it@gmail.com",
    age: 30
}


// const fullname: string = quyet.fullname;
// const age: number = quyet.age;
let {fullname, age} = sang;
console.log(fullname)
console.log(age)