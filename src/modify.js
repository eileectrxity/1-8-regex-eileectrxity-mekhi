const swapAllCases = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isUppercaseLetter = char === char.toUpperCase();
    result += isUppercaseLetter ? char.toLowerCase() : char.toUpperCase();
  }

  return result;
};

module.exports = {
  swapAllCases,
};
