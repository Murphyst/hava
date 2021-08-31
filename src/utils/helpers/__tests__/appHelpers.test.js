import {camelize} from '../appHelpers';

describe('App functions are being tested', () => {
  test('camelize is being tested', () => {
    expect(camelize('abcde')).toBe('Abcde');
  });
});
