import mooncakeSays from './index.js';

test('mooncake knows what to say', () => {
  expect(mooncakeSays('woooahhh!')).toBe('(o.o) woooahhh!');
});

test('mooncake is not sure what to say', () => {
  expect(mooncakeSays()).toBe('(o.o) chookity?');
});