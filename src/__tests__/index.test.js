import { add } from '../index';

describe('FizBuzz', () => {
  test('debería sumar bien', () => {
    expect(add(2, 3)).toBe(5);
  });
});
