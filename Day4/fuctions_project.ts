function createUser(
    name: string,
    age: number = 18,
    city?: string
): string {
    return `${name} is ${age} years old from ${city ?? "Unknown City"}`;
}

console.log(createUser("Anil"));
console.log(createUser("Anil", 20));
console.log(createUser("Anil", 20, "Mumbai"));