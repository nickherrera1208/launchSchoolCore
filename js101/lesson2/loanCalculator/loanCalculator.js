/* create a program that calculates the monthly payment on a loan. 
   ask the user for the loan amount, percentage rate, and duration of the loan in years. 
   give back the result and ask if they need another calculation. */

const READLINE = require("readline-sync");

function statement(message) {
  console.log(`${message}`);
}

function calculatePayment(loanAmount, percentageRate, loanDurationYears) {
  
  var monthlyInterest = percentageRate / 12;

  var loanDurationMonths = loanDurationYears * 12;

  var monthlyPayment = loanAmount * (monthlyInterest / (1 - ((1 + monthlyInterest) ** -loanDurationMonths)));

  if (percentageRate === 0 || percentageRate === '') {
    monthlyPayment = loanAmount / loanDurationMonths;
  }

  return monthlyPayment;
}

function program() {
  statement("Welcome to loan calculator!\nPlease enter the loan amount.");
  var loan = READLINE.question();
  
  while (!Number(loan)) {
    statement("Please enter a valid(Numeric values only) number.");
    loan = READLINE.question();
  }

  if (loan.includes(',')) {
    loan = loan.split(',').join('');
  }

  statement("Please enter the annual percentage rate.");
  var apr = READLINE.question();

  if (!apr.includes('.')) {
      apr = apr / 100;
    } else if (apr === "") {
      apr = 0;
    }
  
  while (!Number(apr) && apr !== 0) {
    statement("Please enter a valid(Numeric values only) number.");
    apr = READLINE.question();
  }

  statement("Please enter the loan duration in years.");
  var duration = READLINE.question();

  var result = calculatePayment(loan, apr, duration);
  statement(`Your monthly payment is $${result.toFixed(2)}`);
}

program();
