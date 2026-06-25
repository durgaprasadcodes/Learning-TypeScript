// =========== Function Parameter Typing ================
function greet(invite) {
    console.log(invite);
}
greet('hi Purna ');
// ========== Optional Parameters (?) ==================
function sum(a, b, mes) {
    console.log(a + b, `sum of ${a} + ${b}`);
}
sum(5, 10);
// ========= Default Parameters (=) ====================
function Default(a = 'Hi') {
    console.log(a);
}
Default();
// ========== Return Type Annotation ==============
function Nums(num) {
    return num;
}
Nums(5);
function Strs(str) {
    return str;
}
Strs('Anil');
function Void(vd) {
    console.log(vd);
}
let result = Void('Hello');
console.log(result);
// Hello
//undefined
function isAdult(age) {
    return age >= 18;
}
isAdult(30);
export {};
