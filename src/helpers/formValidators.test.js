import { email, minLength, alphaNumeric, numericOnly } from './formValidators';

describe('Tests for form validators', () => {
  it('validates email', () => {
    const value = 'test';
    const expected = 'Invalid email address';

    expect(email(value)).toEqual(expected);
  });

  it('validates minimum length', () => {
    const min8 = minLength(8);
    const value = 'test';
    const expected = 'Must be 8 characters or more';

    expect(min8(value)).toEqual(expected);
  });

  it('validates alphnumeric', () => {
    const value = '__--=?%';
    const expected = 'Only alphanumeric characters';

    expect(alphaNumeric(value)).toEqual(expected);
  });

  it('validates numeric only', () => {
    const value = 'test';
    const expected = 'Only numeric characters';

    expect(numericOnly(value)).toEqual(expected);
  });
});
