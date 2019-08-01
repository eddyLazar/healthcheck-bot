import concat from './concat';

test('given two strings should concat into one', () => {
  const expected = 'helloworld';
  const actual = concat('hello', 'world');

  expect(actual).toBe(expected);
});
