// Object type
// Good ✔
const person = {
  name: "John",
  age: 30,
};

// Bad ❌
const personCopy: object = {
  name: "John",
  age: 30,
};

// Bad ❌
const personCopy2: { name: string; age: number } = {
  name: "John",
  age: 30,
};
