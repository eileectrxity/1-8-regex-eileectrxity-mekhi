# Assignment 1.2.2 - RegEx

- [Assignment 1.2.2 - RegEx](#assignment-122---regex)
  - [Before You Start](#before-you-start)
    - [Don't panic!](#dont-panic)
    - [Resources](#resources)
    - [Interpreters](#interpreters)
- [Short Answers](#short-answers)
- [Problems 1-9: `RegEx.test()`](#problems-1-9-regextest)
  - [Question 1: HelloWorldRegex](#question-1-helloworldregex)
  - [Question 2: hasAVowel](#question-2-hasavowel)
  - [Question 3: hasCatsOrDogs](#question-3-hascatsordogs)
  - [Question 4: hasVowelStart](#question-4-hasvowelstart)
  - [Question 5: hasPunctuationEnd](#question-5-haspunctuationend)
  - [Question 6: hasNothingOrDigits](#question-6-hasnothingordigits)
  - [Question 7: hasNoFlippers](#question-7-hasnoflippers)
  - [Question 8: isValidEmail](#question-8-isvalidemail)
  - [Question 9: isValidPhoneNumber](#question-9-isvalidphonenumber)
- [Problems 10-12: `str.match()`](#problems-10-12-strmatch)
  - [Question 10: matchAllNumbers](#question-10-matchallnumbers)
  - [Question 11: matchAllNumbersAsNumbers](#question-11-matchallnumbersasnumbers)
  - [Question 12: matchAllWords](#question-12-matchallwords)
- [Problems 13-16: `str.replace()`](#problems-13-16-strreplace)
  - [Question 13: replaceAllNumbers](#question-13-replaceallnumbers)
  - [question 14: fixFileName](#question-14-fixfilename)
  - [Question 15: nameRedacter](#question-15-nameredacter)
  - [Question 16: camelToSnakeCase](#question-16-cameltosnakecase)
    - [Replacer callback](#replacer-callback)
    - [Actual question to answer](#actual-question-to-answer)
- [Debug](#debug)
  - [Question 17: isValidCompanyUsername](#question-17-isvalidcompanyusername)
- [Modify](#modify)
  - [Question 18: swapAllCases](#question-18-swapallcases)
- [Bonus](#bonus)

## Before You Start

Welcome to RegEx! It's a cool tool that you can use to make string processing a breeze. Now, it's true that the syntax isn't exactly _friendly_, however it's totally understandable with practice. Be patient with yourself, move slowly, use external resources, and you got this!

### Don't panic!

Don't freak out at the number of questions, they're all pretty short. Some don't even take 50 characters to type out, every `from-scratch.js` function can be done in 1 line. RegEx is _super_ powerful,

### Resources

- [Marcy Cheat Sheet](https://github.com/The-Marcy-Lab-School/1-2-2-cheat-sheet_regex)
- [Learn Regular Expressions in 20 Minutes](https://www.youtube.com/watch?v=rhzKDrUiJVk)
- [regular-expressions.info](https://www.regular-expressions.info)
- [Launch School RegEx Mini Course](https://launchschool.com/books/regex/read/introduction)
- [Chapter 9: Regular Expressions - Eloquent JS](https://eloquentjavascript.net/09_regexp.html)
- [MDN RegEx Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

### Interpreters

- [scriptular - a simple RegEx tester](https://scriptular.com)
- [Regexr.com - a more in depth RegEx tester](https://regexr.com)

# Short Answers

Be sure to complete them!

# Problems 1-9: `RegEx.test()`

For the first few questions, we'll use regex literals and the .test method. Always check the tests to make sure that you returning the right results! Also, all these methods will be in the `from-scratch.js` file.

## Question 1: HelloWorldRegex

`helloWorldRegex` takes in a string and returns true if the string passed in contains "Hello world" _regardless of case_, and false otherwise. It can have more than that, but must have at least those two words.

```js
helloWorldRegex("Hello world"); // true
helloWorldRegex("Hello world?"); // true
helloWorldRegex("Hello world, are you there?"); // true
helloWorldRegex("hello world"); // true
helloWorldRegex("HELLO WORLD!"); // true
helloWorldRegex("HeLlO wOrLd!"); // true
helloWorldRegex("Sup world!"); // false
helloWorldRegex("Where in the world is Carmen?"); // false
helloWorldRegex("Hello"); // false
```

## Question 2: hasAVowel

`hasAVowel` takes in a string and should return true if the given string has at least 1 vowel present, and false otherwise. The case does not matter.

```js
hasAVowel("a"); // true
hasAVowel("AHHHHHH!"); // true
hasAVowel("HEY"); // true
hasAVowel("wow"); // true
hasAVowel(""); // false
hasAVowel("xzy"); // false
hasAVowel("y"); // false
```

## Question 3: hasCatsOrDogs

`hasCatsOrDogs` takes in a string and should return true if the string has either "cats" or "dogs", and false otherwise. The case doesn't matter, but the each pet should be plural.

```js
hasCatsOrDogs("Gosh, I love having so many cats!"); // true
hasCatsOrDogs("Wow, I have a lot of dogs!"); // true
hasCatsOrDogs("Cats rule!"); // true
hasCatsOrDogs("I do not care for that dog."); // false
hasCatsOrDogs("Cat? No way."); // false
hasCatsOrDogs("Cat? No, but I have a ton of dogs."); // true
```

## Question 4: hasVowelStart

`hasVowelStart` takes in a string and should return true if the string starts with a vowel, and false otherwise. The case doesn't matter.

```js
hasVowelStart("a"); // true
hasVowelStart("A"); // true
hasVowelStart("ab"); // true
hasVowelStart("Ab"); // true
hasVowelStart("ba"); // false
hasVowelStart("Ba"); // false
hasVowelStart(""); // false
```

## Question 5: hasPunctuationEnd

`hasPunctuationEnd` takes in a string and should return true if the string ends with a period, exclamation or question mark, and false otherwise.

```js
hasPunctuationEnd("a."); // true
hasPunctuationEnd("a!"); // true
hasPunctuationEnd("a?"); // true
hasPunctuationEnd("a"); // false
hasPunctuationEnd("a!a"); // false
hasPunctuationEnd("a?b"); // false
hasPunctuationEnd(""); // false
```

## Question 6: hasNothingOrDigits

`hasNothingOrDigits` takes in a string and should return true if the string is either empty or only contains digits, and false otherwise.

```js
hasNothingOrDigits(""); // true
hasNothingOrDigits("123"); // true
hasNothingOrDigits("abc"); // false
hasNothingOrDigits("123abc"); // false
hasNothingOrDigits("abc123"); // false
```

hint: When checking the _entire_ string, it's useful to add starting and ending anchors...

## Question 7: hasNoFlippers

`hasNoFlippers` takes in a string and should return true if the string _has NO "flippable" letters_, and false otherwise. A "flippable" letter is one that could be flipped upside down but look identical, so `B, C, c, D, E, H, I, K, O, o, X, x, l`. Only these _exact_ letters.

```js
hasNoFlippers("Z"); // true
hasNoFlippers("Zabdabbq"); // true
hasNoFlippers(""); // true
hasNoFlippers("abd"); // true
hasNoFlippers("B"); // false
hasNoFlippers("BC"); // false
hasNoFlippers("oao"); // false
hasNoFlippers("abdefo"); // false
```

## Question 8: isValidEmail

This question and the phone one are _probably_ the most likely thing you'll turn to regex for: tricky validation. And the way you do that is usually Googling around until you get something right. So, Google "regex email validation" and see what you get. Try to make sense of it, and then try to implement it. If you're having trouble, try to break it down into smaller pieces. What does it mean to be a valid email? What are the rules? How can you check for those rules?

As always, fall back to the tests, and if whatever you have works for those, then you're good enough for now!

## Question 9: isValidPhoneNumber

Same as above, but for phone numbers. Again, Google it and see if you can make sense of what's suggested to you.

---

# Problems 10-12: `str.match()`

Alright for these next few questions, we're going to be focusing on the new `.match` string method. Check out the docs if you're unfamiliar with the method. All questions will still be in the `from-scratch.js` file. Remember, with matches, we _usually_ want all of the matches, not just the first, **what RegEx flag lets us do that?**

[.match() docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

## Question 10: matchAllNumbers

`matchAllNumbers` takes in a string and should return an array of all the numbers in the string (as strings). If there are no numbers, it should return an empty array.

```js
matchAllNumbers("My favorite number is 12."); // ['12']
matchAllNumbers("I have no favorite number."); // []
matchAllNumbers("There were 40 fire drills last year, and luckily 0 fires"); // ['40', '0']
matchAllNumbers("I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies."); // ['1', '2', '4', '8']
```

hint: What does match return if it finds no matches? What do we _want_ it to return? RegEx can't do _everything_ for us, don't forget your other JS tricks!

## Question 11: matchAllNumbersAsNumbers

You just learned about some higher order functions that work on arrays, right? Well the above method will return an array of numbers as _strings_. That's almost certainly not what you want. So, let's make a new method that does the same thing, but returns an array of numbers as _numbers_. Which higher order method can we use to do that?

```js
matchAllNumbers("My favorite number is 12."); // [12]
matchAllNumbers("I have no favorite number."); // []
matchAllNumbers("There were 40 fire drills last year, and luckily 0 fires"); // [40, 0]
matchAllNumbers("I have 1 dog, 2 cats, and 4 bunnies. Oh wait, 8 bunnies."); // [1, 2, 4, 8]
```

## Question 12: matchAllWords

`matchAllWords` takes in a string and should return an array of all the words in the string (as strings). If there are no words, it should return an empty array. Words should only have letters and `'` in them, nothing else! Do not include punctuation.

```js
matchAllWords("Hello world!"); // ['Hello', 'world']
matchAllWords("It looks like...rain today?"); // ['It', 'looks', 'like', 'rain', 'today']
matchAllWords(""); // []
matchAllWords("I don't think I'm going, but you can!"); // ["I", "don't", "think", "I'm", "going", "but", "you", "can"]
matchAllWords("wow_this_screen_name_is_long"); // ['wow', 'this', 'screen', 'name', 'is', 'long']
matchAllWords("I have 3 dogs, 2 cats, and 10 bunnies."); // ['I', 'have', 'dogs', 'cats', 'and', 'bunnies']
matchAllWords("123"); // []
```

This question is a little open ended right? So just check the tests specifically for what they test for. If you pass them all, you get the question right!

---

# Problems 13-16: `str.replace()`

And lastly, let's work on replace. You've actually already used this method with strings, but RegEx makes it _even_ more powerful. It lets us get real specific

[.replace docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## Question 13: replaceAllNumbers

`replaceAllNumbers` takes in a string and should return a string with all the numbers replaced with "???". If there are no numbers, it should return the original string.

```js
replaceAllNumbers("My favorite number is 12."); // 'My favorite number is ???.'
replaceAllNumbers("I have no favorite number."); // 'I have no favorite number.'
replaceAllNumbers("There were 40 fire drills last year, and luckily 0 fires"); // 'There were ??? fire drills last year, and luckily ??? fires'
```

## question 14: fixFileName

`fixFileName` takes in a string and should return a string with all spaces replaced with underscores. No matter how big the whitespace is, it should be replaced with a single underscore. If there are no spaces, it should return the original string.

```js
fixFileName("hello world"); // 'hello_world'
fixFileName("hello   world"); // 'hello_world'
fixFileName("first hw-trial spring"); // 'first_hw-trial_spring'
fixFileName(""); // ''
fixFileName("assignment-12"); // 'assignment-12'
```

## Question 15: nameRedacter

`nameRedacter` takes in a string and should return a string with all the names replaced with "REDACTED". A name is a word that is in ALL capitals (but not "I" or "A"). If there are no names, it should return the original string. It should _only_ redact the name, and nothing else.

```js
nameRedacter("My name is ITZEL."); // 'My name is REDACTED.'
nameRedacter("I have no name."); // 'I have no name.'

nameRedacter("Today is MAYA's first day, ZO will help her out."); // "Today is REDACTED's first day, REDACTED will help her out."
```

## Question 16: camelToSnakeCase

### Replacer callback

Did you know that replace doesn't have to take a string as the second argument? It can also take a function! This function will be called for every match, and the return value will be used as the replacement. This is a bit more advanced, but it's a great way to do some more complex string manipulation. Check out the docs for more info.

[.replace docs that talk about the function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#using_an_inline_function_that_modifies_the_matched_characters) (Seriously...check out the docs on this).

### Actual question to answer

Anyway, using that replacer function, fill in `camelToSnakeCase`. It takes in a camelCase string and should return a snake_case_string. Meaning, replace all the capital letters with an underscore and lowercase letter. If there are no capital letters, it should return the original string.

```js
camelToSnakeCase("helloWorld"); // 'hello_world'
camelToSnakeCase("helloWorldHowAreYou"); // 'hello_world_how_are_you'
camelToSnakeCase("hello_world"); // 'hello_world'
camelToSnakeCase("hello"); // 'hello'
camelToSnakeCase(""); // ''
```

---

# Debug

Ok, from here on out, we can use any RegEx technique and function. And we'll need to use our knowledge to fix the functions written in `debug.js`. To make sure that you're doing things right, check the tests!

## Question 17: isValidCompanyUsername

So it looks like we're using a dynamic regex here and we're building it out with `new RegExp` but we're hitting an issue. See, a normal string will see a `\` as a special escape character and won't print it right. But we need them for our regex! How can we get around this? We need to escape them with another `\`. It looks weird but it'll work! Try it out!

---

# Modify

Oh dear, it looks like the functions written in `modify.js` are written without RegEx. Let's fix that! The tests need to pass, make sure to keep checking them.

## Question 18: swapAllCases

It looks like this function is trying to swap the cases of all the letters in a string. But it's doing it _so_ clunky. Checking the case of the letter by comparing if it's the same as the uppercase version of itself? More importantly, we don't need a loop and new string if we just use replace _properly_. Remember the callback function from above? You'll need it!

The test is going to check to see that you only use `toUpperCase` and `toLowerCase` only once _each_ for the entire function. If you use it more than that, you're not using RegEx efficiently!

To be clear, make sure you delete the existing code, if you comment it out, the commented methods will get picked up and you'll fail the test (also no using the `match === match.uppercase()` trick, we have regex now)!

---

# Bonus

After you have answered all the questions and done your short answers, there are some topics in RegEx that you should explore:

- .exec
- Capture Groups
- Look ahead/behind assertions

These are more advanced methods and concepts, but if you're feeling good about RegEx, check them out!
