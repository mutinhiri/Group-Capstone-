import counterComment from './commentCounter.js';

const mockCommentsArray = ['first', 'second', 'third'];

describe('test comments counter', () => {
  test('should return the amount of items', () => {
    expect(counterComment(mockCommentsArray)).toBe(3);
  });

  test('shoud return the ammount after adding 1', () => {
    mockCommentsArray.push('fourth');
    expect(counterComment(mockCommentsArray)).not.toBe(undefined);
    expect(counterComment(mockCommentsArray)).toBe(4);
  });
});
