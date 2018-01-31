/**
 * creates a greeting string using a deeply curried function
 * @param greeting
 */
const deeplyCurriedGreeting = greeting => seperator => name => `${greeting}${seperator}${name}`;

export default deeplyCurriedGreeting;