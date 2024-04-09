const path = require('path');
const ScoreCounter = require('score-tests');
const { isValidCompanyUsername } = require('./debug');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('isValidCompanyUsername - correctly checks if an employee has a valid username', () => {
    expect(isValidCompanyUsername('sales9b-ajohnson1', 'albert', 'johnson')).toBe(true);
    expect(isValidCompanyUsername('tech1a-jjones', 'jason', 'jones')).toBe(true);
    expect(isValidCompanyUsername('sales4b-areyes', 'ana', 'reyes')).toBe(true);

    expect(isValidCompanyUsername('areyes', 'ana', 'reyes')).toBe(false);
    expect(isValidCompanyUsername('', 'joe', 'cats')).toBe(false);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
