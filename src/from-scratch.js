//Lesson 1-8 Assignment: RegEx by Mekhi[odd q's] + Eileen[even q's]

//for question s1-9, we'll use regex literals and the .test method

//Question 1:
const helloWorldRegex = (str) => {
  return /hello world/i.test(str);
};

//Question 2: hasAVowel takes in a string and should return true if the given string has at least 1 vowel present, and false otherwise. the case does not matter
const hasAVowel = (str) => {
  return /[aeiou]/i.test(str);
};

//Question 3:
const hasCatsOrDogs = (str) => {
  return /(cat|dog)/.test(str);
};

const hasVowelStart = (str) => {};

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
