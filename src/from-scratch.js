const helloWorldRegex = (str) => {
  return /hello world/i.test(str);
};

// tests

// const testStr1 = "hello WORlD";
// console.log(helloWorldRegex(testStr1));

const hasAVowel = (str) => {};

const hasCatsOrDogs = (str) => {
  return /(cat|dog)/.test(str);
};

// tests

const testStr3 = "dog and cat";
console.log(hasCatsOrDogs(testStr3));

const hasVowelStart = (str) => {};

const hasPunctuationEnd = (str) => {};

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
