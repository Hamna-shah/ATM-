#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let mypin = 3210;
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin",
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pincode");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["withDraw", "checkBalance", "fast cash"],
            message: "please select one of the operation",
        }
    ]);
    if (operationAns.operation === "withDraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            console.log("your remaining balance is:", myBalance -= amountAns.amount);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let cashAns = await inquirer.prompt([{
                name: "cash",
                type: "list",
                choices: ["500", "100", "5000", "10000", "30000"],
                message: "please select amount",
            }
        ]);
        if (cashAns.cash > myBalance) {
            console.log("insufficient balance");
        }
        else {
            console.log("your remaining balance is:", myBalance -= cashAns.cash);
        }
    }
    else if (operationAns.operation === "checkBalance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("incorrect pincode");
}
