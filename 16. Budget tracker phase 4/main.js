const userName = "Seemanto Kumar Dash";
const income = 5000;

// multiple expenses
let rent = 1200;
let grocery = 600;
let transport = 200;
let entertainment = 300;

// calculate the expenses
let totalExpense = rent + grocery + transport + entertainment;

// tax deduction
let tax = income * 0.10;

// Net income after tax deduction
let netIncome = income - tax;

// calculate final balance 
let balance = netIncome - totalExpense;

// saving
let save = balance * 0.20;

// output
console.log('Personal Budget Tracker\n');
console.log('User: ' + userName + '\n');
console.log('Total Income: ' + income +'$\n');
console.log('Total Expenses: ' + totalExpense + '$');