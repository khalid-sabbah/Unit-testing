

import {
  reverseText,
  sum,
  capitalizeEachWord,
  checkPalindrome,
  squareNumber,
  countVowels,
  filterLongStrings,
  toUpperCase,
} from "./functions";


////////////////////////////////////////
test("reverses the string 'hello' to 'olleh'", () => {
  expect(reverseText("hello")).toBe("olleh");
});

test("reverses the string 'world' to 'dlrow'", () => {
  expect(reverseText("world")).toBe("dlrow");
});

test("reverses the string 'OpenAI' to 'IAnepO'", () => {
  expect(reverseText("OpenAI")).toBe("IAnepO");
});

///////////////////////////////////////////
test("adds 5 + 5 to equal 10", () => {
  expect(sum(5, 5)).toBe(10);
});

test("adds -3 + 3 to equal 0", () => {
  expect(sum(-3, 3)).toBe(0);
});

test("adds 1.5 + 2.5 to equal 4", () => {
  expect(sum(1.5, 2.5)).toBe(4);
});

////////////////////////////////
test("capitalizes the first letter in each word", () => {
  expect(capitalizeEachWord("hello from test")).toBe("Hello From Test");
});

test("capitalizes the first letter in 'javascript is fun'", () => {
  expect(capitalizeEachWord("javascript is fun")).toBe("Javascript Is Fun");
});

test("capitalizes the first letter in a single word 'python'", () => {
  expect(capitalizeEachWord("python")).toBe("Python");
});

//////////////////////////////////////////////
test("checks if 'radar' is a palindrome", () => {
  expect(checkPalindrome("radar")).toBe(true);
});

test("checks if 'hello' is not a palindrome", () => {
  expect(checkPalindrome("hello")).toBe(false);
});

test("checks if 'madam' is a palindrome", () => {
  expect(checkPalindrome("madam")).toBe(true);
});

//////////////////////////////////////////////////
test("squares the number 4 to equal 16", () => {
  expect(squareNumber(4)).toBe(16);
});

test("squares the number 0 to equal 0", () => {
  expect(squareNumber(0)).toBe(0);
});

test("squares the number -3 to equal 9", () => {
  expect(squareNumber(-3)).toBe(9);
});

// /////////////////////////////////////////////////////
test("counts the vowels in 'hello' to equal 2", () => {
  expect(countVowels("hello")).toBe(2);
});

test("counts the vowels in 'rhythm' to equal 0", () => {
  expect(countVowels("rhythm")).toBe(0);
});

test("counts the vowels in 'aeiou' to equal 5", () => {
  expect(countVowels("aeiou")).toBe(5);
});

////////////////////////////////////////////////////
test("filters strings longer than 6 characters", () => {
  const arr = ["Moamen", "Megahed", "Ahmed", "Mohammed"];
  expect(filterLongStrings(arr, 6)).toEqual(["Megahed", "Mohammed"]);
});

test("filters strings longer than 4 characters", () => {
  const arr = ["apple", "pear", "peach", "banana"];
  expect(filterLongStrings(arr, 4)).toEqual(["apple", "peach", "banana"]);
});

test("returns an empty array when no strings are longer than the given length", () => {
  const arr = ["cat", "dog", "bat"];
  expect(filterLongStrings(arr, 5)).toEqual([]);
});
//////////////////////////////////////////////////////
test("converts the string 'hello' to uppercase", () => {
  expect(toUpperCase("hello")).toBe("HELLO");
});

test("converts the string 'JavaScript' to uppercase", () => {
  expect(toUpperCase("JavaScript")).toBe("JAVASCRIPT");
});

test("converts the string 'test' to uppercase", () => {
  expect(toUpperCase("test")).toBe("TEST");
});
