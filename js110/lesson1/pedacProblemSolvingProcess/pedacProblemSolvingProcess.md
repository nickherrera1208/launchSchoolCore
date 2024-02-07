# The PEDAC Process

## P: Understanding the Problem <--- Do not rush this step

- Establish the rules/ define the boundaries of the problem
  -Involves assessing all of the available information of the problem
  - Restating explicit requirements
  -Identifying implicit requirements
- Requirements of the problem can either be explicit or implicit
  -Explicit: Requirements that are clearly stated in the problem description.
  -Implicit: Requirements that are not stated in the problem description but
   can be extrapolated from our understanding of the problem based on problem
   analysis, examples, test cases, etc..
   - Extracting explicit and implicit requirements establishes rules and 
    boundaries for the problem, and this in turn helps us form a mental model
    for how to solve the problem. 

**General Example**

Given a string, produce a new string with every other word removed.

-Explicit Requirements:
  -Input: string
  -Output: new string
  -Remove every other word from input string

-Questions:
  -What do we mean by every other word?
    -Odd words or even words?
  -How do we define a word in this context?
    -Delimiter: words are delimited by spaces.

**Another Example**

## Sum Even Number Rows

Imagine a sequence of consecutive even integers bgeinning with 2. The integers 
are grouped in rows, with the first row containing one interger, the second row
two integers, the thirfdd row three integers, and so on. Given an integer 
representing the number of a particular row, return an integer representing 
the sum of all the integers in that row. 

-Explicit Requirements:
  - Sequence of even integers
  - Sequence begins with two
  - Integers are consecutive
  - Sequence is grouped into rows
  - Each row is incrementally larger than the last one: 1, 2, 3, ...
  - Row 'number' equals the numbrs of elements in the row
    - Row 1 has 1 element, row 2 has 2 elements, ...
  - Input: a single integer
    - Identified a 'row', which is a subset of a sequence of integers
  - Output: a single integer
    - The sum of the integers in the row identified by the input integer

-A visual reference point of the sequence:

  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, ...
  - Rows:

    2
    4, 6
    8, 10, 12
    14, 16, 18, 20
    ...

- How do we create the structure?

## E: Examples and Test Cases
- Depending on the context, you may be already provided with all the examples 
  and test cases that you need, some of them and need to create some, or none 
  at all which means that I need to create all of my own examples and test cases. 

- Examples can help in expanding and clarifying our understanding of the problem.

- Can be used to confirm or refute assumptions made about the problem and help 
  answer questions regarding implicit requirements. 

- Act as assertions which help to codify the rules and boundaries of the problem. 

- Test cases are examples using the specific syntax of a programming language 
  and structrued in such a way as to test a particular input with an expected
  output.

**Examples**

row number: 1 --> sum of integers in row: 2
row number: 2 --> sum of integers in row: 10
row number: 4 --> sum of integers in row: 68

## D: Data Structures

- Structuring data helps us to reason with it more easily in a logical way. 
- Help us interact with data at an implementation level. 
- Thinking in terms of data sturctures is part of the problem solving process.
- Data structures are closely linked to algorithm. 
  - Set of steps from input to output. 
    - Involves structuring data in a certain way. 

**Data Structure**

2
4, 6
8, 10, 12
14, 16, 18, 20
...

- Overall structure representing sequence as a whole. 
- Individual rows within overall structure.
- Individual rows in a set order in context of sequence. 
- Individual rows contain integers. 
- Can assume that integers are in a set order in the context of the sequence.

[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20],
  ...
]

## A: Algorithms

- A logical sequence of steps for accomplishing a task or objective.

- Algorithms are closely related to data structures. Think of the algorithm as 
  the steps required to structure the data in a way that produces the required 
  output.

- At this stage in the process, keep the algorithm abstract and high level. 
  - Avoid implementation details such as reference to particular methods or 
    built in functions.
  - Write out solution steps to algorithm in plain words (not code/pseudo-code). 
    - avoiding implementation detail allows for more abstract thinking of the 
      problem. It avoids being locked in to a particular approach or way of 
      thinking about the problem. 
      - It is wise though to revisit the algorithm during the implementation 
        step either to update it or make implementation level notes based on 
        the algorithm. 
    - Don't worry about efficiency of algorithm at this point. 

**Algorithm**

1. Create an empty 'rows' array to contain all of the rows.
2. Create a 'row' array and add it to the overall 'rows' array.
3. Repeat step 2 until all the necessary rows have been created. 
  - All rows have been created when the length of the 'rows' array is equal to
    the input integer.
4. Sum the final row. 
5. Return the sum of the final row.

*Problem: Create a Row*

Rules:
- Row is an array
- Arrays contain integers.
- Integers are consecutive even numbers.
- Integers in each row form part of an overall larger sequence.
- Rows are of different lengths. 
- Input: the information needed to create the output.
  - The starting integer.
  - Length of the row.
- Output: the row itself

Examples: 

start 2: length: 1 --> [2]
start 4: length: 2 --> [4, 6]
start 8, length: 3 --> [8, 10, 12] 

Data Structures:
- An array of integers.

Algorithm:
1. Create an empty 'row' array to contain the integers. 
2. Add the starting integer .
3. Increment the starting integer by 2 to get the next integer in the sequence.
4. Repeat steps 2 and 3 until the array has reached the correct length. 
5. Return the 'row' array. 

## C: Implementing a Solution in Code

- This is where you translate the solution algorithm into code. 
- It is not necessary to start coding immediately. 
- Think about algorithm in the context of the programming language.
  - Langauge features/ constraints.
  - Characteristics of data structures.
  - Built-in functions/ methods.
  - Syntax/ coding patterns.
- Create test cases
- Code with intent. 
 
## Final Thoughts 

- PEDAC is not a completely linear process.
- Be prepared to move back and forth between the steps. 
- Switch from implementation mode and abstract problem solving mode when 
  necessary. 
- Don't try to problem solve at the code level.