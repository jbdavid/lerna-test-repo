import { Greeter } from './test1';

test('My Greeter', () => {
  const location = window.location
  expect(Greeter('Carl')).toBe('Hello Carl');
});