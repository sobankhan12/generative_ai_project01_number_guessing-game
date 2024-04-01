#!/usr/bin/env node

import inquirer from "inquirer";
const answers =await inquirer.prompt([
    {
        name:"userguess",
        type:"number",
        message:"Enter a number between 1 and 10"
    }

])
const randomNumber=Math.floor(Math.random() * 3);
console.log(randomNumber);
console.log(answers.userguess);
if (randomNumber!==answers.userguess) {
    console.log("wrong guess");
}else{
    console.log("correct guess");
}
