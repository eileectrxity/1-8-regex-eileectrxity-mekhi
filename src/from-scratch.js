//Lesson 1-8 Assignment: RegEx by Mekhi[odd q's] + Eileen[even q's]

//for question s1-9: we'll use regex literals and the .test method

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
  return /(cats|dogs)/i.test(str);
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

//QUESTION 7: hasNoFlippers takes in a string and should return true if the string has NO "flippable" letters, and false otherwise. a "flippable" letter is one that could be flipped upside down but look identical, so B, C, c, D, E, H, I, K, O, o, X, x, l. Only these exact letters
const hasNoFlippers = (str) => {
  // return /^[^BCcDEHIKOoXxl]*$/.test(str); //have no clue why this works
  return !/[BCcDEHIKOoXxl]/.test(str);
};

// //printing q7 test to the console below
// console.log(hasNoFlippers("Z")); // true
// console.log(hasNoFlippers("Zabdabbq")); // true
// console.log(hasNoFlippers("")); // true
// console.log(hasNoFlippers("abd")); // true
// console.log(hasNoFlippers("B")); // false
// console.log(hasNoFlippers("BC")); // false
// console.log(hasNoFlippers("oao")); // false
// console.log(hasNoFlippers("abdefo")); // false

//QUESTION 8: this question and the phone one are probably the most likely thing you'll turn to regex for: tricky validation. the way you do that is usually Googling around until you get something right. so, Google "regex email validation" and see what you get. try to make sense of it, and then try to implement it. if you're having trouble, try to break it down into smaller pieces. what does it mean to be a valid email? what are the rules? how can you check for those rules?
const isValidEmail = (str) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
};

// //printing q8 test to the console below
// console.log(isValidEmail('a@b.co')); //true
// console.log(isValidEmail('tom@gmail.com')); //true
// console.log(isValidEmail('zo@marcy.org')); //true
// console.log(isValidEmail('maya.b@marcy.org')); //true
// console.log(isValidEmail('reuben_O@marcy.org')); //true
// console.log(isValidEmail('gonzalo@marcy')); //false
// console.log(isValidEmail('ben@marcy.')); //false
// console.log(isValidEmail('carms%@marcy.org')); //false

//QUESTION 9: same as above, but for phone numbers. again, Google it and see if you can make sense of what's suggested to you
const isValidPhoneNumber = (str) => {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]+[0-9]{3}[-\s\.]+[0-9]{4}$/.test(str);
};

// //printing q9 test to the console below
// console.log(isValidPhoneNumber('860-227-7890')); //true
// console.log(isValidPhoneNumber('(860) 410-7890')); //true
// console.log(isValidPhoneNumber('860 892 8010')); //true
// console.log(isValidPhoneNumber('860.888.4872')); //true
// console.log(isValidPhoneNumber('860-227-789')); //false
// console.log(isValidPhoneNumber('860-227-78900')); //false
// console.log(isValidPhoneNumber('8602277898')); //false
// console.log(isValidPhoneNumber('ohmannotevenclosehere')); //false

//question 10-12: for these next few questions, we're going to be focusing on the new .match string method. check out the docs if you're unfamiliar with the method. all questions will still be in the from-scratch.js file. remember, with matches, we usually want all of the matches, not just the first, what RegEx flag lets us do that?

//QUESTION 10: matchAllNumbers takes in a string and should return an array of all the numbers in the string (as strings). if there are no numbers, it should return an empty array. hint: what does match return if it finds no matches? what do we want it to return? RegEx can't do everything for us, don't forget your other JS tricks!
const matchAllNumbers = (str) => {
  const digitRegex = str.match(/\d+/g) || [];
  return digitRegex; // could also do ternary --> ? digitRegex : []
};

// //printing q10 test to the console below
// console.log(matchAllNumbers("My favorite number is 12.")); //['12']
// console.log(matchAllNumbers("I have no favorite number.")); //[]
// console.log(matchAllNumbers("There were 40 fire drills last year, and luckily 0 fires")); //['40', '0']
// console.log(matchAllNumbers("I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies.")); //['1', '2', '4', '8']

//QUESTION 11:
const matchAllNumbersAsNumbers = (str) => {
  const digitRegex = /\d+/g;
  const digits = str.match(digitRegex) || [];
  return digits.map((x) => Number(x));
};

// //printing q11 test to the console below
// console.log(matchAllNumbersAsNumbers("My favorite number is 12.")); //[12]
// console.log(matchAllNumbersAsNumbers("I have no favorite number.")); //[]
// console.log(matchAllNumbersAsNumbers("There were 40 fire drills last year, and luckily 0 fires")); //[40, 0]
// console.log(matchAllNumbersAsNumbers("I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies.")); //[1, 2, 4, 8]

//QUESTION 12: matchAllWords takes in a string and should return an array of all the words in the string (as strings). if there are no words, it should return an empty array. words should only have letters and ' in them, nothing else! do not include punctuation. this question is a little open ended right? so just check the tests specifically for what they test for. if you pass them all, you get the question right!
const matchAllWords = (str) => {
  return str.match(/[a-zA-Z]+(?:'\w+)?/g) || [];
};

// //printing q12 test to the console below
// console.log(matchAllWords("Hello world!")); //['Hello', 'world']
// console.log(matchAllWords("It looks like...rain today?")); //['It', 'looks', 'like', 'rain', 'today']
// console.log(matchAllWords("")); //[]
// console.log(matchAllWords("I don't think I'm going, but you can!")); //["I", "don't", "think", "I'm", "going", "but", "you", "can"]
// console.log(matchAllWords("wow_this_screen_name_is_long")); //['wow', 'this', 'screen', 'name', 'is', 'long']
// console.log(matchAllWords("I have 3 dogs, 2 cats, and 10 bunnies.")); //['I', 'have', 'dogs', 'cats', 'and', 'bunnies']
// console.log(matchAllWords("123")); //[]

//QUESTION 13:
const replaceAllNumbers = (str) => {
  return str.replaceAll(/\d+/g, "???");
};

// //printing q13 test to the console below
// replaceAllNumbers("My favorite number is 12."); // 'My favorite number is ???.'
// replaceAllNumbers("I have no favorite number."); // 'I have no favorite number.'
// replaceAllNumbers("There were 40 fire drills last year, and luckily 0 fires"); // 'There were ??? fire drills last year, and luckily ??? fires'

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
