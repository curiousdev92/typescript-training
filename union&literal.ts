// Union Types : declare with multiple types
// function combine(input1: number | string, input2: number | string) {
//   let result: any;

//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
// }

// const combinedAges = combine(30, 26);
// console.log("combinedAges", combinedAges);

// const combinedNames = combine("Max", "Anna");
// console.log("combinedNames", combinedNames);

// Literal types: exactly the value type
function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text"
  ) {
    let result: any;
  
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
  
    return result;
  }
  
  const combinedAges = combine(30, 26, "as-number");
  console.log("combinedAges", combinedAges);
  
  const combinedStringAges = combine("30", "26", "as-number");
  console.log("combinedStringAges", combinedStringAges);
  
  const combinedNames = combine("Max", "Anna", "as-text");
  console.log("combinedNames", combinedNames);
  