PEDAC

**Leftover Blocks**

You have a number of building blocks that can be used to build a valid 
structure. There are certain rules about what determines the validity 
of a structure:

- The building blocks are cubes
- The structure is built in layers
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, 
calculates the number of blocks left over after building the tallest possible 
valid structure.

Tasks

You are provided with the problem description above. Your tasks for this step 
are:

To make notes of your mental model for the problem, including explicit and 
implicit rules

Write a list of questions for things that aren't clear about the problem from 
the description provided

## Step 1: Understanding the Problem

Explicit Requirements:

- The building blocks are cubes
- The structure is built in layers
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- You cannot leave gaps between blocks

Questions:

- What is considered a block?
- How many blocks does the program have?
- What is a gap?
- Are blocks the same size?

Input: number of cubes
Output: number of leftover blocks after building the tallest possible structure.

## Step 2: Examples and Test Cases

You are provided with the following test cases for this problem.

<!-- console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true -->

With reference to your initial mental model and questions from Step 1, make 
some notes about the test cases. Do the test cases confirm or refute different 
elements of your original analysis and mental mode? Do they answer any of the 
questions that you had, or do they perhaps raise further questions?

## Step 3: Data Structures

For this step, use your analysis so far to make notes regarding whether you 
might need to use any particular data structures as part of your solution. 
If so, make notes on which ones.

An array of arrays?

## Step 4: Algorithm

For this step, use your analysis of the problem so far to write out a 
high-level algorithm that solves the problem at an abstract level. 
Avoid too much implementation detail at this stage.

Steps:

Create a function that takes an argument of an integer and outputs the leftover
of those integers. 

create a variable and assign it to an empty array.

if the length of the array is less than 1, take a number from the integer and
put it inside of an array and push that array to the empty array variable. 

check the length of the variable to see how many blocks will be in the next 
layer. to determine next layer, check length of array and add 1. multiply that
by itself to get the number of blocks required.

Example: first layer: +1
         second layer: +4
         third layer: +9
         fourth layer: +16

if there are not enough 'blocks' a.k.a. integer left to make a new layer, 
return the integer amount. 

## Step 5: Implement a Solution in Code

Based on all of your notes and analysis so far, implement a working solution 
in JavaScript. Your solution should pass all of the test cases provided.

**FIND CODE IN leftoverBlocks.js file**