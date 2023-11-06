let obj = {
    a: "12",
    b: "34"
}

let obj2 = {
    c: "12",
    d: "34"
}

let obj3 = {...obj, ...obj2}

console.log(obj3)


let newArray2 = [1, 3, 4];
let newArray3 = [2, 3, 4];
let newArray4 = [...newArray2,...newArray3];

console.log(newArray4)



