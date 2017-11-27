export const required = value => (value ? undefined : 'Required');

export const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined);

export const minLength = min => value =>
  (value && value.length < min ? `Must be ${min} characters or more` : undefined);

export const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined);

export const numericOnly = value =>
  (value && /[^0-9 ]/i.test(value) ? 'Only numeric characters' : undefined);
