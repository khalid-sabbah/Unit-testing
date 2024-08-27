

export const reverseText = (str) => str.split("").reverse().join("");

export const sum = (a, b) => a + b;

export const capitalizeEachWord = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const checkPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

export const squareNumber = (n) => n * n; 

export const countVowels = (str) => {
  return str.match(/[aeiou]/gi)?.length || 0;
};

export const filterLongStrings = (arr, length) => {
  return arr.filter((str) => str.length > length);
};

export const toUpperCase = (str) => str.toUpperCase();
