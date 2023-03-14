// *************** Unknown type *************** //
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "John";

// userName = userInput; //Error: Type 'unknown' is not assignable to type 'string'.

// *************** Never type *************** //
/**
 * Returns nothing because the code crashes here.
 * @param message message of the error
 * @param code the error code
 */
function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("An error occured!", 500);
