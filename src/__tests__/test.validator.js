import Validator from '../js/validator';

describe('Validator', () => {
  const validator = new Validator();

  test('valid username', () => {
    expect(validator.validateUsername('valid_123-username')).toBe(true);
  });

  test('username starts with number', () => {
    expect(validator.validateUsername('1invalid')).toBe(false);
  });

  test('username ends with number', () => {
    expect(validator.validateUsername('invalid1')).toBe(false);
  });

  test('username starts with underscore', () => {
    expect(validator.validateUsername('_invalid')).toBe(false);
  });

  test('username ends with underscore', () => {
    expect(validator.validateUsername('invalid_')).toBe(false);
  });

  test('username starts with hyphen', () => {
    expect(validator.validateUsername('-invalid')).toBe(false);
  });

  test('username ends with hyphen', () => {
    expect(validator.validateUsername('invalid-')).toBe(false);
  });

  test('username contains more than three consecutive numbers', () => {
    expect(validator.validateUsername('valid1234username')).toBe(false);
    expect(validator.validateUsername('valid123username')).toBe(true);
  });

  test('username contains invalid characters', () => {
    expect(validator.validateUsername('invalid@username')).toBe(false);
  });
});
