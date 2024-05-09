#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold ("\n \tWELCOME TO CODE WITH ALISHBA \n\t"))

//Define the list of currencies and thier exchange rates
let exchange_rate: any ={
    "USD": 1, // base currency
    "EUR": 0.9, //european currency(Euro)
    "JYP": 113, //Japanese currency (yen)
    "CAD": 1.3, //canadian dollar
    "AUD": 1.65, //australain dollar
    "PKR": 277.70, // pakistani rupes
}
//promt the user to select currencise tu convert from to 
let user_answer = await inquirer.prompt([
    {
        name: "From_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:"
    }
]);

//perfrom currency conversion by using formula

let from_amount = exchange_rate[user_answer.From_currency];
let to_amount =  exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount
let coverted_amount = base_amount * to_amount

// display the coverted amount
console.log(` Converted Amount = ${coverted_amount}`);