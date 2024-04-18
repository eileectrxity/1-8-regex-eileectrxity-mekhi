//Lesson 1-8 Assignment: RegEx by Mekhi[odd q's] + Eileen[even q's]

//for question s1-9, we'll use regex literals and the .test method

//Question 1:
const helloWorldRegex = (str) => {
  return /hello world/i.test(str);
};

// //printing q1 test to the console below
// const testStr1 = "hello WORlD";
// console.log(helloWorldRegex(testStr1));

//Question 2: hasAVowel takes in a string and should return true if the given string has at least 1 vowel present, and false otherwise. the case does not matter
const hasAVowel = (str) => {
  return /[aeiou]/i.test(str);
};

// //printing q2 test to the console below
// console.log(hasAVowel("a")); //true
// console.log(hasAVowel("AHHHHHH!")); //true
// console.log(hasAVowel("HEY")); //true
// console.log(hasAVowel("wow")); //true
// console.log(hasAVowel("")); //false
// console.log(hasAVowel("xzy")); //false
// console.log(hasAVowel("y")); //false

//Question 3:
const hasCatsOrDogs = (str) => {
  return /(cat|dog)/.test(str);
};

//Question 4: hasVowelStart takes in a string and should return true if the string starts with a vowel, and false otherwise. the case doesn't matter
const hasVowelStart = (str) => {
  return /^[aeiou]/i.test(str);
};

// //printing q4 test to the console below
// console.log(hasVowelStart("a")); //true
// console.log(hasVowelStart("A")); //true
// console.log(hasVowelStart("ab")); //true
// console.log(hasVowelStart("Ab")); //true
// console.log(hasVowelStart("ba")); //false
// console.log(hasVowelStart("Ba")); //false
// console.log(hasVowelStart("")); //false

//Question 5
const hasPunctuationEnd = (str) => {
  return /[.!?]$/.test(str);
};

// tests
console.log(hasPunctuationEnd("a.")); // true
console.log(hasPunctuationEnd("a!")); // true
console.log(hasPunctuationEnd("a?")); // true
console.log(hasPunctuationEnd("a")); // false
console.log(hasPunctuationEnd("a!a")); // false
console.log(hasPunctuationEnd("a?b")); // false
console.log(hasPunctuationEnd("")); // false

const hasNothingOrDigits = (str) => {};

const hasNoFlippers = (str) => {};

const isValidEmail = (str) => {};

const isValidPhoneNumber = (str) => {};

const matchAllNumbers = (str) => {};

const matchAllNumbersAsNumbers = (str) => {};

const matchAllWords = (str) => {};

const replaceAllNumbers = (str) => {};

const fixFileName = (str) => {};

const nameRedacter = (str) => {};

const camelToSnakeCase = (str) => {};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
