import { sum } from '../src';

describe('Testing SUM Function', () => {
  it('SUM works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
