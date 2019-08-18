import { composeAlert, composeOk } from './messages';

test('composeAlert should compose alert message', () => {
  const url = 'https://google.com';
  const actual = composeAlert(url);
  const expected = `❗${url} is down`;

  expect(actual).toBe(expected);
});

test('composeOk should compose Ok message', () => {
  const url = 'https://google.com';
  const actual = composeOk(url);
  const expected = `✅${url} is up`;

  expect(actual).toBe(expected);
});
