#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your paragraph to count words: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(`Your paragraph's word count is ${words.length}`);
