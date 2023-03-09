// // Object type
// // Good ✔
// const person = {
//   name: "John",
//   age: 30,
// };

// // Bad ❌
// const personCopy: object = {
//   name: "John",
//   age: 30,
// };

// // Bad ❌
// const personCopy2: { name: string; age: number } = {
//   name: "John",
//   age: 30,
// };

// Array type
const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
  };
  
  let favoriteActivities: string[];
  // favoriteActivities = 'Sports' //=> Error: Type 'string' is not assignable to type 'string[]'
  // favoriteActivities = ["Sports", 1]; //=> Error: Type 'number' is not assignable to type 'string'
  
  for (const hobby of person.hobbies) {
    // console.log(hobby.map()) //=> Error: Property 'map' does not exist on type 'string'
    console.log(hobby.toLowerCase()); // ✔✔✔
  }
  
  // Array ---> Tuple type
  const simplePerson = {
    name: "simplePerson",
    role: [2, "author"],
  };
  
  simplePerson.role.push("admin");
  simplePerson.role[1] = 10;
  
  const tuplePerson: { name: string; age: number; role: [number, string] } = {
    name: "tuplePerson",
    age: 30,
    role: [2, "author"],
  };
  
  // tuplePerson.role[1] = 10; //=> Error: Type 'number' is not assignable to type 'string'
  // tuplePerson.role = [10,'admin', 'user']; //=> Error: Source has 3 element(s) but target allows only 2
  tuplePerson.role.push("admin"); // This works. It won't generate error ;)
  