//Lesson 1-8 Assignment: RegEx by Mekhi[odd q's] + Eileen[even q's]

//for questions 1-9, we'll use regex literals and the .test method

//QUESTION 1:
const helloWorldRegex = (str) => {
  return /hello world/i.test(str);
};

// //printing q1 test to the console below
// const testStr1 = "hello WORlD";
// console.log(helloWorldRegex(testStr1));

//QUESTION 2: hasAVowel takes in a string and should return true if the given string has at least 1 vowel present, and false otherwise. the case does not matter
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

//QUESTION 3:
const hasCatsOrDogs = (str) => {
  return /(cat|dog)/.test(str);
};

// //printing q3 test to the console below
// console.log(hasCatsOrDogs("Gosh, I love having so many cats!")); //true
// console.log(hasCatsOrDogs("Wow, I have a lot of dogs!")); //true
// console.log(hasCatsOrDogs("Cats rule!")); //true
// console.log(hasCatsOrDogs("I do not care for that dog.")); //false
// console.log(hasCatsOrDogs("Cat? No way.")); //false
// console.log(hasCatsOrDogs("Cat? No, but I have a ton of dogs.")); //true

//QUESTION 4: hasVowelStart takes in a string and should return true if the string starts with a vowel, and false otherwise. the case doesn't matter
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

//QUESTION 5:
const hasPunctuationEnd = (str) => {
  return /[.!?]$/.test(str);
};

// // printing q5 test to the console below
// console.log(hasPunctuationEnd("a.")); // true
// console.log(hasPunctuationEnd("a!")); // true
// console.log(hasPunctuationEnd("a?")); // true
// console.log(hasPunctuationEnd("a")); // false
// console.log(hasPunctuationEnd("a!a")); // false
// console.log(hasPunctuationEnd("a?b")); // false
// console.log(hasPunctuationEnd("")); // false

//QUESTION 6: hasNothingOrDigits takes in a string and should return true if the string is either empty or only contains digits, and false otherwise. hint: when checking the entire string, it's useful to add starting and ending anchors
const hasNothingOrDigits = (str) => {
  return /^$|^\d+$/.test(str);
};

// //printing q6 test to the console below
// console.log(hasNothingOrDigits("")); //true
// console.log(hasNothingOrDigits("123")); //true
// console.log(hasNothingOrDigits("abc")); //false
// console.log(hasNothingOrDigits("123abc")); //false
// console.log(hasNothingOrDigits("abc123")); //false

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
