const path = require('path');
const ScoreCounter = require('score-tests');
const { swapAllCases } = require('./modify');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

/*
const swapAllCases = (str) => {
  const swapCase = (char) => (/[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase());
  return str.replace(/[a-zA-Z]/g, swapCase);
};
*/

describe(testSuiteName, () => {
  it('swapAllCases - swaps all letter cases in string using regex properly and toUpper/LowerCase once each', () => {
    expect(swapAllCases('Hello')).toEqual('hELLO');
    expect(swapAllCases('hELLO')).toEqual('Hello');
    expect(swapAllCases('Now What?')).toEqual('nOW wHAT?');
    expect(swapAllCases('SpONGeBoB TeXT')).toEqual('sPongEbOb tExt');
    expect(swapAllCases('123')).toEqual('123');
    expect(swapAllCases('')).toEqual('');

    // here's where we check to see that you only use each method once for the conversion,
    // and rely on regex for everything else
    const textContent = swapAllCases.toString();
    const swapCaseCalls = textContent.match(/toUpperCase/gi);
    expect(swapCaseCalls).not.toBeNull();
    expect(swapCaseCalls.length).toBe(1);

    const replaceCalls = textContent.match(/toLowerCase/gi);
    expect(replaceCalls).not.toBeNull();
    expect(replaceCalls.length).toBe(1);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
