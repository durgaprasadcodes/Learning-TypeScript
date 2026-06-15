// ============== Arrays ================

let numbers:number[] = [1,2,3,4,5]
numbers.push(2)

let names:string[] = ['Anil','Rolex','Durga','Prasad']

names.map((item:string)=>{
    console.log(item)
})

// ============= Objects ================

type User = {
    'name' : string,
    'age'  : number 
}[]

let Customer:User =[
    {
        'name': 'Anil',
        'age' : 20
    }
]

Customer.map((user)=>{
    console.log(user.name);
    console.log(user.age)
})

// =============== Nested Objects =============

type address = {
    'village' : string,
    'pincode' : number
}

type products = {
    'id' :number,
    'name':string,
    'price':number,
    'address' : address
} 

const Myproducts : products ={
    'id' : 1,
    'name' : 'laptop',
    'price' : 25000,
    'address' :{
        'village' : 'Eluru',
        'pincode': 534426
    }
}

console.log(Myproducts.address.village)


// =========== Optional Properties (?) ==============

type UserInfo = {
    'name' : string,
    'age'  : number,
    'dob' ?: string,
    'Village' ?: string
}

const user:UserInfo = {
    'name' : 'Anil',
    'age'  :24,
}

