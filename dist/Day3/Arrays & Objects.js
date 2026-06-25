// ============== Arrays ================
let numbers = [1, 2, 3, 4, 5];
numbers.push(2);
let names = ['Anil', 'Rolex', 'Durga', 'Prasad'];
names.map((item) => {
    console.log(item);
});
let Customer = [
    {
        'name': 'Anil',
        'age': 20
    }
];
Customer.map((user) => {
    console.log(user.name);
    console.log(user.age);
});
const Myproducts = {
    'id': 1,
    'name': 'laptop',
    'price': 25000,
    'address': {
        'village': 'Eluru',
        'pincode': 534426
    }
};
console.log(Myproducts.address.village);
const user = {
    'name': 'Anil',
    'age': 24,
};
export {};
