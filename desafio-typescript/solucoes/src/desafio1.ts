console.log("desafio1")

//tipagem por inferencia

const employeer = {

    code: 2020,
    name: "Naty"
}

console.log(employeer)

//tipagem explicita

const employeer2: {code: number, name: string} = {
    code: 1340,
    name: "Peter"
} 

console.log(employeer2)

//utilizando interface

interface Employee{
    code: number,
    name: string
}

const employeer3: Employee = {
    code: 2050,
    name: "Jane"
}

console.log(employeer3)


const employeer4 = {} as Employee

employeer4.code = 2060
employeer4.name = "Carlos"

console.log(employeer4)