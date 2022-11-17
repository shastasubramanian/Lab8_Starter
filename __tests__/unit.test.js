// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('isPhoneNumber number true 1', () => {
  expect(functions.isPhoneNumber('(858)533-6688')).toBe(true);
});
test('isPhoneNumber true 2', () => {
  expect(functions.isPhoneNumber('(858)444-6688')).toBe(true);
});
test('isPhoneNumber false 1', () => {
  expect(functions.isPhoneNumber('1112223333')).toBe(false);
});
test('isPhoneNumber false 2', () => {
  expect(functions.isPhoneNumber('asdasdasdasd')).toBe(false);
});

// isEmail
test('isEmail true 1', () => {
  expect(functions.isEmail('test_user@ucsd.edu')).toBe(true);
});
test('isEmail true 2', () => {
  expect(functions.isEmail('test_user@google.com')).toBe(true);
});
test('isEmail false 1', () => {
  expect(functions.isEmail('not_a_email_333')).toBe(false);
});
test('isEmail false 2', () => {
  expect(functions.isEmail('not_email_adreesssssss@emailaaaaa')).toBe(false);
});

// isStrongPassword
test('isStrongPassword true 1', () => {
  expect(functions.isStrongPassword('abcd12')).toBe(true);
});
test('isStrongPassword true 2', () => {
  expect(functions.isStrongPassword('strongPass_')).toBe(true);
});
test('isStrongPassword false 1', () => {
  expect(functions.isStrongPassword('12345')).toBe(false);
});
test('isStrongPassword false 2', () => {
  expect(functions.isStrongPassword('/.*%^&*!@#$%^&*()')).toBe(false);
});

// isDate
test('isDate true 1', () => {
  expect(functions.isDate('02/03/2002')).toBe(true);
});
test('isDate true 2', () => {
  expect(functions.isDate('2/3/2002')).toBe(true);
});
test('isDate false 1', () => {
  expect(functions.isDate('12/123/2000')).toBe(false);
});
test('isDate false 2', () => {
  expect(functions.isDate('1/3/40001')).toBe(false);
});

// isHexColor
test('isHexColor true 1', () => {
  expect(functions.isHexColor('000')).toBe(true);
});
test('isHexColor true 2', () => {
  expect(functions.isHexColor('#ffffff')).toBe(true);
});
test('isHexColor false 1', () => {
  expect(functions.isHexColor('01')).toBe(false);
});
test('isHexColor false 2', () => {
  expect(functions.isHexColor('abc1')).toBe(false);
});