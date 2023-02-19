const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

const createFile = util.promisify(writeToFile);

// function to initialize program
async function init() {

}

// function call to initialize program
init();
