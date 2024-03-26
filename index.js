#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please select a number between 10 - 1",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("CONGRATULATION! you guessed correct number");
}
else {
    console.log("opps! you guessed wrong number");
}
