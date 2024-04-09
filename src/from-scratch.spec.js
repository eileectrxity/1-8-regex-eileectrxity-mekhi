const path = require('path');
const ScoreCounter = require('score-tests');
const {
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
} = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('helloWorldRegex - if the string contains "hello world" regardless of case it returns true', () => {
    expect(helloWorldRegex('Hello world')).toBeTruthy();
    expect(helloWorldRegex('Hello world?')).toBeTruthy();
    expect(helloWorldRegex('Hello world, are you there?')).toBeTruthy();
    expect(helloWorldRegex('hello world')).toBeTruthy();
    expect(helloWorldRegex('HELLO WORLD!')).toBeTruthy();
    expect(helloWorldRegex('HeLlO wOrLd!')).toBeTruthy();
    expect(helloWorldRegex('Sup world!')).toBeFalsy();
    expect(helloWorldRegex('Where in the world is Carmen?')).toBeFalsy();
    expect(helloWorldRegex('Hello')).toBeFalsy();
    expect(helloWorldRegex('')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('hasAVowel - if the string contains a vowel regardless of case it returns true', () => {
    expect(hasAVowel('a')).toBeTruthy();
    expect(hasAVowel('AHHHHHH!')).toBeTruthy();
    expect(hasAVowel('HEY')).toBeTruthy();
    expect(hasAVowel('wow')).toBeTruthy();

    expect(hasAVowel('')).toBeFalsy();
    expect(hasAVowel('xzy')).toBeFalsy();
    expect(hasAVowel('y')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('hasCatsOrDogs - if the string contains "cats" or "dogs" regardless of case it returns true', () => {
    expect(hasCatsOrDogs('Gosh, I love having so many cats!')).toBeTruthy();
    expect(hasCatsOrDogs('Wow, I have a lot of dogs!')).toBeTruthy();
    expect(hasCatsOrDogs('Cats rule!')).toBeTruthy();
    expect(hasCatsOrDogs('I do not care for that dog.')).toBeFalsy();
    expect(hasCatsOrDogs('Cat? No way.')).toBeFalsy();
    expect(hasCatsOrDogs('Cat? No, but I have a ton of dogs.')).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('hasVowelStart - if the string starts with a vowel regardless of case it returns true', () => {
    expect(hasVowelStart('a')).toBeTruthy();
    expect(hasVowelStart('e')).toBeTruthy();
    expect(hasVowelStart('i')).toBeTruthy();
    expect(hasVowelStart('o')).toBeTruthy();
    expect(hasVowelStart('u')).toBeTruthy();
    expect(hasVowelStart('A')).toBeTruthy();
    expect(hasVowelStart('E')).toBeTruthy();
    expect(hasVowelStart('I')).toBeTruthy();
    expect(hasVowelStart('O')).toBeTruthy();
    expect(hasVowelStart('U')).toBeTruthy();
    expect(hasVowelStart('ab')).toBeTruthy();
    expect(hasVowelStart('Ab')).toBeTruthy();

    expect(hasVowelStart('ba')).toBeFalsy();
    expect(hasVowelStart('Ba')).toBeFalsy();
    expect(hasVowelStart('qasda')).toBeFalsy();
    expect(hasVowelStart('')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('hasPunctuationEnd - if the string ends with a . or ? or ! it returns true', () => {
    expect(hasPunctuationEnd('a.')).toBeTruthy();
    expect(hasPunctuationEnd('a!')).toBeTruthy();
    expect(hasPunctuationEnd('a?')).toBeTruthy();
    expect(hasPunctuationEnd('a')).toBeFalsy();
    expect(hasPunctuationEnd('a!a')).toBeFalsy();
    expect(hasPunctuationEnd('a?b')).toBeFalsy();
    expect(hasPunctuationEnd('')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('hasNothingOrDigits - if the string contains nothing or only digits it returns true', () => {
    expect(hasNothingOrDigits('')).toBeTruthy();
    expect(hasNothingOrDigits('123')).toBeTruthy();
    expect(hasNothingOrDigits('9')).toBeTruthy();
    expect(hasNothingOrDigits('92102798791387045834')).toBeTruthy();
    expect(hasNothingOrDigits('4')).toBeTruthy();
    expect(hasNothingOrDigits('abc')).toBeFalsy();
    expect(hasNothingOrDigits('123abc')).toBeFalsy();
    expect(hasNothingOrDigits('2348234681276384126834623493Q11964')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it("hasNoFlippers - if the string doesn't have: B, C, c, D, E, H, I, K, O, o, X, x, l, it returns true", () => {
    expect(hasNoFlippers('Z')).toBeTruthy();
    expect(hasNoFlippers('Zabdabbq')).toBeTruthy();
    expect(hasNoFlippers('')).toBeTruthy();
    expect(hasNoFlippers('abd')).toBeTruthy();

    expect(hasNoFlippers('B')).toBeFalsy();
    expect(hasNoFlippers('BC')).toBeFalsy();
    expect(hasNoFlippers('oao')).toBeFalsy();
    expect(hasNoFlippers('abdefo')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('isValidEmail - if the string is a valid email it returns true', () => {
    expect(isValidEmail('a@b.co')).toBeTruthy();
    expect(isValidEmail('tom@gmail.com')).toBeTruthy();
    expect(isValidEmail('zo@marcy.org')).toBeTruthy();
    expect(isValidEmail('maya.b@marcy.org')).toBeTruthy();
    expect(isValidEmail('reuben_O@marcy.org')).toBeTruthy();

    expect(isValidEmail('gonzalo@marcy')).toBeFalsy();
    expect(isValidEmail('ben@marcy.')).toBeFalsy();
    expect(isValidEmail('carms%@marcy.org')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('isValidPhoneNumber - if the string is a valid phone number it returns true', () => {
    expect(isValidPhoneNumber('860-227-7890')).toBeTruthy();
    expect(isValidPhoneNumber('(860) 410-7890')).toBeTruthy();
    expect(isValidPhoneNumber('860 892 8010')).toBeTruthy();
    expect(isValidPhoneNumber('860.888.4872')).toBeTruthy();

    expect(isValidPhoneNumber('860-227-789')).toBeFalsy();
    expect(isValidPhoneNumber('860-227-78900')).toBeFalsy();
    expect(isValidPhoneNumber('8602277898')).toBeFalsy();
    expect(isValidPhoneNumber('ohmannotevenclosehere')).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('matchAllNumbers - returns an array of all the numbers in the string as strings', () => {
    expect(matchAllNumbers('My favorite number is 12.')).toEqual(['12']);
    expect(matchAllNumbers('I have no favorite number.')).toEqual([]);
    expect(matchAllNumbers('There were 40 fire drills last year, and luckily 0 fires')).toEqual(['40', '0']);
    expect(matchAllNumbers('I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies.')).toEqual(['1', '2', '4', '8']);

    expect(matchAllNumbers('abc')).toEqual([]);
    expect(matchAllNumbers('')).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('matchAllNumbersAsNumbers - returns an array of all the numbers in the string as numbers', () => {
    expect(matchAllNumbersAsNumbers('My favorite number is 12.')).toEqual([12]);
    expect(matchAllNumbersAsNumbers('I have no favorite number.')).toEqual([]);
    expect(matchAllNumbersAsNumbers('There were 40 fire drills last year, and luckily 0 fires')).toEqual([40, 0]);
    expect(matchAllNumbersAsNumbers('I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies.')).toEqual([1, 2, 4, 8]);

    expect(matchAllNumbersAsNumbers('abc')).toEqual([]);
    expect(matchAllNumbersAsNumbers('')).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('matchAllWords - returns an array of all the words in the string', () => {
    expect(matchAllWords('123')).toEqual([]);
    expect(matchAllWords('Hello world!')).toEqual(['Hello', 'world']);
    expect(matchAllWords('It looks like...rain today?'))
      .toEqual(['It', 'looks', 'like', 'rain', 'today']);
    expect(matchAllWords('')).toEqual([]);
    expect(matchAllWords("I don't think I'm going, but you can!"))
      .toEqual(['I', "don't", 'think', "I'm", 'going', 'but', 'you', 'can']);
    expect(matchAllWords('wow_this_screen_name_is_long'))
      .toEqual(['wow', 'this', 'screen', 'name', 'is', 'long']);
    expect(matchAllWords('I have 3 dogs, 2 cats, and 10 bunnies.'))
      .toEqual(['I', 'have', 'dogs', 'cats', 'and', 'bunnies']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('replaceAllNumbers - replaces all the numbers in the string with "???"', () => {
    expect(replaceAllNumbers('My favorite number is 12.')).toEqual('My favorite number is ???.');
    expect(replaceAllNumbers('I have no favorite number.')).toEqual('I have no favorite number.');
    expect(replaceAllNumbers('There were 40 fire drills last year, and luckily 0 fires'))
      .toEqual('There were ??? fire drills last year, and luckily ??? fires');
    expect(replaceAllNumbers('I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies.'))
      .toEqual('I have ??? dog, ??? cats, and ??? bunnies. Oh wait, ??? bunnies.');

    expect(replaceAllNumbers('abc')).toEqual('abc');
    expect(replaceAllNumbers('')).toEqual('');
    expect(replaceAllNumbers('1')).toEqual('???');
    expect(replaceAllNumbers('100')).toEqual('???');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('fixFileName - replaces all the whitespace in the string with underscores', () => {
    expect(fixFileName('')).toEqual('');
    expect(fixFileName(' ')).toEqual('_');
    expect(fixFileName('\t')).toEqual('_');
    expect(fixFileName('\n')).toEqual('_');
    expect(fixFileName('hello world')).toEqual('hello_world');
    expect(fixFileName('hello   world')).toEqual('hello_world');
    expect(fixFileName(`hello
    world`)).toEqual('hello_world');
    expect(fixFileName('first hw-trial spring')).toEqual('first_hw-trial_spring');
    expect(fixFileName('assignment-12')).toEqual('assignment-12');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('nameRedacter - replaces all the words in the string that are 2 or more characters long and all uppercase with "REDACTED"', () => {
    expect(nameRedacter('My name is ITZEL.')).toEqual('My name is REDACTED.');
    expect(nameRedacter('A name is not something I have.')).toEqual('A name is not something I have.');
    expect(nameRedacter("Today is MAYA's first day, ZO will help her out."))
      .toEqual("Today is REDACTED's first day, REDACTED will help her out.");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('camelCaseToSnakeCase - converts a camelCase string to snake_case', () => {
    expect(camelToSnakeCase('helloWorld')).toEqual('hello_world');
    expect(camelToSnakeCase('helloWorldHowAreYou')).toEqual('hello_world_how_are_you');
    expect(camelToSnakeCase('hello_world')).toEqual('hello_world');
    expect(camelToSnakeCase('do-not-touch-kebab-case')).toEqual('do-not-touch-kebab-case');
    expect(camelToSnakeCase('hello')).toEqual('hello');
    expect(camelToSnakeCase('')).toEqual('');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });
  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
