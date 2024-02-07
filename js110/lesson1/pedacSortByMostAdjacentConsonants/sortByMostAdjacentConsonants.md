PEDAC Guided Practice: Sort by Most Adjacent Consonants

Given an array of strings, return a new array where the strings are sorted to 
the highest number of adjacent consonants a particular string contains. If two 
strings contain the same highest number of adjacent consonants they should 
retain their original order in relation to each other. Consonants are 
considered adjacent if they are next to each other in the same word or if there
is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as 
consonants.

Tasks

You are provided with the problem description above. 
Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and 
implicit rules.

Write a list of questions for things that aren't clear about the problem from 
the description provided.

## Step 1: Understand the Problem

Explicit Requirements:

- array of strings
- array of strings sorted by highest number of adjacent consonants. 
- if two strings have the same highest number of consonants, they should retain
  their original order in relation to each other. 
- Consonants are considered adjacent if they are next to each other in the same
  word or if there is a space between two consonants in adjacent words.
- 'y' and 'w' are considered consonants. 

input: array of strings
output: new array of strings sorted by the number of consonants.

Questions: 

- What does it mean by if there is a spcae between two consonants in adjacent 
  words? Which word does this count for?

- What is the list of consonants? Is there any other definitions of consonants?

## Step 2: Examples and Test Cases

You are provided with the following test cases for this problem.

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

With reference to your initial mental model and questions from Step 1, make 
some notes about the test cases. Do the test cases confirm or refute different 
elements of your original analysis and mental model? Do they answer any of the 
questions that you had? Do they raise any further questions?

Notes:

- How does the space make a difference in a consonant?
- The output is as predicted. 
- Sorted in descending order.

## Step 3: Data Structures

For this step, with reference to your analysis from the two preceding steps, 
make some notes regarding whether you might need to use any particular data 
structures as part of your solution. If so, which ones?

- Arrays (LS has objects for k:v pairs)

## Step 4: Algorithm

For this step, use your analysis of the problem so far to write out a 
high-level algorithm that solves the problem at an abstract level. Avoid too 
much implementation detail at this stage.

Steps:

- Create an empty object.
- Create a function that takes an input string.
- Loop through each string and check if the there are consonants next to each
  other.
- Remove spaces from the string. 
- Add the counted consonants to an object. The key of the object is the element
  of the array. The vlaue is the number of adjacent consonants.
- Iterate through the object to compare the number of consonants. return an 
  array of strings that is in descending order of the number of consonants.
- If strings have the same value, return them relative to one another from
  the original input array. 

## Step 5: Implement a Solution in Code

Based on all of your notes and analysis so far, implement a working solution in
 JavaScript. Your solution should pass all of the test cases provided.
 

**FIND CODE in sortByMostAdjacentConsonants.js file.**