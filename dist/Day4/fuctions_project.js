function createUser(name, age = 18, city) {
    return `${name} is ${age} years old from ${city ?? "Unknown City"}`;
}
console.log(createUser("Anil"));
console.log(createUser("Anil", 20));
console.log(createUser("Anil", 20, "Mumbai"));
export {};
