/*QUESTION 18: it looks like this function is trying to swap the cases of all the letters in a string. but it's doing it so clunky. checking the case of the letter by comparing if it's the same as the uppercase version of itself? more importantly, we don't need a loop and new string if we just use replace properly. remember the callback function from above? you'll need it! 
the test is going to check to see that you only use toUpperCase and toLowerCase only once each for the entire function. if you use it more than that, you're not using RegEx efficiently!
to be clear, make sure you delete the existing code, if you comment it out, the commented methods will get picked up and you'll fail the test (also no using the match === match.uppercase() trick, we have regex now)!*/

//original function modified
const swapAllCases = (str) => {
  return str.replace(/[a-zA-Z]/g, (match) => {
    return /[A-Z]/.test(match) ? match.toLowerCase() : match.toUpperCase();
  });
};

// //printing q18 test to the console below
// console.log(swapAllCases('Hello')); //'hELLO'
// console.log(swapAllCases('hELLO')); //'Hello'
// console.log(swapAllCases('Now What?')); //'nOW wHAT?'
// console.log(swapAllCases('SpONGeBoB TeXT')); //'sPongEbOb tExt'
// console.log(swapAllCases('123')); //'123'
// console.log(swapAllCases('')); //''

module.exports = {
  swapAllCases,
};
