# 📘 TypeScript Mastery Roadmap (Days 1–7)

> A structured roadmap for learning TypeScript from fundamentals to a mini project.

---

# 🟢 Day 1 — Introduction to TypeScript

## 🎯 Topics

* Why TypeScript?
* TypeScript vs JavaScript
* Installation & Setup
* `tsconfig.json` Configuration
* Type Inference

## 🛠 Practice

* Set up your first `.ts` file
* Observe how TypeScript infers types automatically

## 💻 Code Example

```ts
let name = "Rolex";
let age = 20;

// TypeScript infers:
// name: string
// age: number
```

## ✅ Expected Outcome

* Understand why TypeScript exists.
* Successfully compile and run a TypeScript file.
* Learn automatic type inference.

---

# 🟢 Day 2 — Primitive Types

## 🎯 Topics

* `string`
* `number`
* `boolean`
* `null`
* `undefined`
* `any`
* `unknown`
* `void`
* `never`

## 🛠 Practice

* Create a variable for every primitive type.
* Experiment with `any` vs `unknown`.

## 💻 Code Example

```ts
let s: string = "hello";
let n: number = 42;
let b: boolean = true;
let u: undefined = undefined;
let nul: null = null;
```

## ✅ Expected Outcome

* Understand TypeScript's primitive types.
* Know when to use `unknown` instead of `any`.

---

# 🟢 Day 3 — Arrays & Objects

## 🎯 Topics

* Array Typing (`number[]`, `string[]`)
* Object Typing with `type`
* Nested Objects
* Optional Properties (`?`)

## 🛠 Practice

* Build a `User` type with a nested address object.
* Create typed arrays of users.

## 💻 Code Example

```ts
type User = {
  name: string;
  age: number;
};

const users: User[] = [];
```

## ✅ Expected Outcome

* Create strongly typed arrays and objects.
* Understand optional properties and nesting.

---

# 🟢 Day 4 — Functions

## 🎯 Topics

* Function Parameter Typing
* Optional Parameters (`?`)
* Default Parameters (`=`)
* Return Type Annotation
* `void` Return Type

## 🛠 Practice

* Create:

  * `add()`
  * `greet()`
  * `formatUser()`
* Practice optional and default parameters.

## 💻 Code Example

```ts
function add(a: number, b: number): number {
  return a + b;
}

function greet(name = "User"): void {
  console.log(`Hello, ${name}`);
}
```

## ✅ Expected Outcome

* Write fully typed functions.
* Understand return types and parameter typing.

---

# 🟢 Day 5 — Union & Intersection Types

## 🎯 Topics

* Union Types (`|`)
* Intersection Types (`&`)
* Literal Types
* Combining Unions with Objects

## 🛠 Practice

* Build a `Status` type.
* Create an intersection of two interfaces/types.

## 💻 Code Example

```ts
type Status = "loading" | "success" | "error";

type User = {
  name: string;
};

type Admin = User & {
  role: string;
};
```

## ✅ Expected Outcome

* Model real-world data using unions and intersections.
* Restrict values using literal types.

---

# 🟢 Day 6 — Type Aliases & Interfaces

## 🎯 Topics

* `type` Keyword
* `interface` Keyword
* Differences Between Them
* When to Use Each

## 🛠 Practice

* Create a `Product` interface.
* Extend it into `DiscountedProduct`.

## 💻 Code Example

```ts
interface Product {
  id: number;
  title: string;
}

interface DiscountedProduct extends Product {
  discount: number;
}
```

## ✅ Expected Outcome

* Understand interface inheritance.
* Know when to choose `type` or `interface`.

---

# 🟢 Day 7 — Mini Project: Expense Tracker Logic

## 🎯 Topics

* Pure TypeScript (No React)
* Arrays & Typed Objects
* Functions with Return Types
* Interfaces for Data Shape

## 🛠 Project Requirements

### Create an Expense Interface

```ts
interface Expense {
  id: number;
  title: string;
  amount: number;
}
```

### Features

* ➕ Add Expense
* ❌ Delete Expense
* 📋 View Expenses
* 💰 Calculate Total Expenses

## 💻 Example

```ts
interface Expense {
  id: number;
  title: string;
  amount: number;
}

const expenses: Expense[] = [];

function addExpense(expense: Expense): void {
  expenses.push(expense);
}

function getTotal(): number {
  return expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
}
```

## ✅ Expected Outcome

* Apply everything learned so far.
* Build logic using interfaces, arrays, and functions.
* Prepare for React + TypeScript integration.


---

## 🚀 Next Milestone

After completing Day 7, you'll have a solid TypeScript foundation and be ready to start building **React + TypeScript** applications with confidence.
