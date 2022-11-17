// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('phone number true 1', () => {
  expect(functions.isPhoneNumber('(858)533-6688')).toBe(true);
});

test('phone number true 2', () => {
  expect(functions.isPhoneNumber('(858)444-6688')).toBe(true);
});

test('phone number false 1', () => {
  expect(functions.isPhoneNumber('1112223333')).toBe(false);
});

test('phone number false 2', () => {
  expect(functions.isPhoneNumber('asdasdasdasd')).toBe(false);
});


test('email true 1', () => {
  expect(functions.isEmail('test_user@ucsd.edu')).toBe(true);
});

test('email true 2', () => {
  expect(functions.isEmail('test_user@google.com')).toBe(true);
});

test('email false 1', () => {
  expect(functions.isEmail('not_a_email_333')).toBe(false);
});

test('email false 2', () => {
  expect(functions.isEmail('not_email_adreesssssss@emailaaaaa')).toBe(false);
});
