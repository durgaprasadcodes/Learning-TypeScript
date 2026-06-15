// =========== Function Parameter Typing ================

function greet(invite: string) {
    console.log(invite)
}

greet('hi Purna ')

// ========== Optional Parameters (?) ==================

function sum(a: number, b: number, mes?: string) {
    console.log(a + b, `sum of ${a} + ${b}`)
}

sum(5, 10)

// ========= Default Parameters (=) ====================

function Default(a: string = 'Hi') {
    console.log(a)
}

Default()

// ========== Return Type Annotation ==============

function Nums(num: number): number {
    return num
}

Nums(5)

function Strs(str: string): string {
    return str
}

Strs('Anil')

function Void(vd: string): void {
    console.log(vd)
}

let result = Void('Hello')
console.log(result)

// Hello
//undefined

function isAdult(age: number): boolean {
    return age >= 18;
}

isAdult(30)

