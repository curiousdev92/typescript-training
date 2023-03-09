// We want to check if the value for role in the following object is 'Admin' return 0(or any preferred number)
// and if it is 'User' return 1. This would be achived via an if-else statement in js.
// but in ts we can simply define enum datatype

enum Role {
    Admin,
    Readonly,
    Author,
  }
  
  const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.Admin,
  };
  
  console.log(person.role); //==> 0
  