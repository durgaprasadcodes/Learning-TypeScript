type Address = {
    Village: string,
    Pincode: number
}

type Skills = {
    SkillName: string,
    selfRating: number
}[]

type UserInfo = {
    name: string,
    age: number,
    phone: number,
    email: string
    skills: Skills
    address: Address
}

const user: UserInfo = {
    name: 'Anil',
    age: 20,
    phone: 7238746389,
    email: 'abc@gmail.com',
    skills: [
        { SkillName: 'Python', selfRating: 5 },
        { SkillName: 'React', selfRating: 4.5 },
        { SkillName: 'TypeScript', selfRating: 3 }
    ],
    address: { Village: 'Eluru', Pincode: 534426 }
}