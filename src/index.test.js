const sayhello = require('./index');

test('say hello to the name passed', () => {
  expect(sayhello('Brunno')).toBe('Hello Brunno');
});
