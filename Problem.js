// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

function reverseStirng(params) {
  const reverse = params.split("").reverse().join("");
  return reverse;
}

console.log(reverseStirng("hello"));

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Mr Nirob Sarkar"));

// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

function checkPalindrome(params) {
  const str = params.toLowerCase();

  const palindrome = params.split("").reverse().join("");

  const check = str === palindrome;

  return check;
}

console.log(checkPalindrome("level"));

// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

const maxNum = [5, 1, 9, 3];
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(maxNum));

// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

const numArr = [1, 2, 2, 3, 4, 4];

function removeDuplicates(params) {
  let uniq = [];

  for (let num of params) {
    if (!uniq.includes(num)) {
      uniq.push(num);
    }
  }

  return uniq;
}

console.log(removeDuplicates(numArr));

// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

const arr = [1, 2, 3, 4];

function sumArray(params) {
  let sum = 0;

  for (let num of params) {
    sum += num;
  }

  return sum;
}

console.log(sumArray(arr));

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

const evNum = [1, 2, 3, 4, 5, 6];

function checkEven(params) {
  let result = [];

  for (let num of params) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
}

console.log(checkEven(evNum));

// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

function capitalizeWords(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(capitalizeWords("hello world"));


// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();
