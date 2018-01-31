/**
 * a simple example of how to add 2 numbers together using currying
 * @param number1 - This is the set number. This will not change.
 */
const simpleAdd = number1 => number2 => number1 + number2;

export default simpleAdd;