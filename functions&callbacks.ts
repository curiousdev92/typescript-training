// Function return type
function add(n1: number, n2: number): number {
    return n1 + n2;
  }
  
  // Void type: a function that returns nothing, is the type of void
  function printResult(num: number): void {
    console.log("REsult: " + num);
  }
  printResult(add(5, 10));
  
  let combineValues: (a: number, b: number) => number; // This type says: a function with exactly two paramether of type number and returns a number
  
  // combineValues = add; // No errors. The add function is same type of combineValues function.
  // combineValues = printResult; // Error: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
  
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  
  addAndHandle(10, 20, (result) => {
    console.log(result);
  });
  