# 1. Why TypeScript?

JavaScript is flexible, but that flexibility can sometimes lead to bugs.

## JavaScript Example

```javascript
let age = 20;
age = "Rolex"; // No error
```

This may cause unexpected issues later in the program.

## TypeScript Example

```typescript
let age: number = 20;
age = "Rolex"; // ❌ Error
```

TypeScript catches mistakes during development before the code runs.

## Benefits of TypeScript

- ✅ Better code quality
- ✅ Fewer bugs
- ✅ Easier debugging
- ✅ Excellent IDE support (VS Code)
- ✅ Widely used with React, Angular, and Node.js

---
# 2. TypeScript vs JavaScript

| Feature | JavaScript | TypeScript |
|----------|------------|------------|
| Types | ❌ No | ✅ Yes |
| Compile Step | ❌ No | ✅ Yes |
| Error Detection | Runtime | Compile Time |
| IntelliSense | Basic | Advanced |
| Large Projects | Harder | Easier |

## Example

### JavaScript

```javascript
function add(a, b) {
    return a + b;
}

add(10, "20"); // Works but may be wrong
```

### TypeScript

```typescript
function add(a: number, b: number) {
    return a + b;
}

add(10, "20"); // ❌ Error
```

---

# 3. Installation & Setup

## Step 1: Check Node.js

```bash
node -v
npm -v
```

## Step 2: Install TypeScript

### Global Installation

```bash
npm install -g typescript
```

### Check Installation

```bash
tsc -v
```

## Step 3: Create a Project

```bash
mkdir ts-demo
cd ts-demo
```

### Initialize npm

```bash
npm init -y
```

## Step 4: Create a TypeScript File

```bash
touch app.ts
```

or (Windows)

```cmd
echo. > app.ts
```

## Step 5: Compile TypeScript

```bash
tsc app.ts
```

### Output

```text
app.ts
app.js
```

TypeScript converts `.ts` → `.js`.

---

# 4. tsconfig.json Configuration

## Create Configuration File

```bash
tsc --init
```

This generates:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true
  }
}
```

## Important Options

### target

```json
"target": "ES2020"
```

Specifies the JavaScript version to generate.

### module

```json
"module": "ESNext"
```

Specifies the module system used.

### strict

```json
"strict": true
```

Enables maximum type checking.

### outDir

```json
"outDir": "./dist"
```

Generated JavaScript files are placed inside the `dist` folder.

---

# 5. Type Inference

TypeScript can automatically determine variable types.

## Example

```typescript
let name = "Rolex";
let age = 20;
```

TypeScript infers:

```typescript
name: string
age: number
```

So there is no need to write:

```typescript
let name: string = "Rolex";
let age: number = 20;
```

---

## Your Screenshot Example

```typescript
let name = "Rolex";
let age = 20;
```

TypeScript automatically infers:

```typescript
let name: string
let age: number
```

### Valid Assignments

```typescript
name = "John"; // ✅
age = 25;      // ✅
```

### Invalid Assignments

```typescript
name = 100;       // ❌ Error
age = "Twenty";   // ❌ Error
```

This feature is called **Type Inference**.

---

# 🎯 Day 1 Summary

Today you learned:

## 1. Why TypeScript Exists

- Catches errors before code runs
- Improves code reliability

## 2. TypeScript vs JavaScript

- TypeScript adds static types to JavaScript
- Better tooling and error checking

## 3. Installation & Setup

- Install TypeScript using npm
- Compile `.ts` files into `.js`

## 4. tsconfig.json

- Controls TypeScript compiler behavior
- Enables strict type checking and other options

## 5. Type Inference

- TypeScript automatically detects data types
- Reduces the need for explicit type annotations

---

# 📝 Practice Questions

```typescript
let city = "Nellore";
let pin = 524001;
let isStudent = true;
```

What types are inferred for:

```typescript
city = ?
pin = ?
isStudent = ?
```

## Answer

```typescript
city: string
pin: number
isStudent: boolean
```