// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
function userInput() {
    return inquirer.prompt([
        {name: 'license',
        message: 'What license would you like to use?',
        type: 'list',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']},
        {name: 'title',
        message: 'What is the title of your project?',
        type: 'input'},
        {name: 'description',
        message: 'Provide a description of your project.',
        type: 'input'},
        {name: 'installation',
        message: 'Provide installation instructions for your project.',
        type: 'input'},
        {name: 'usage',
        message: 'How do you use the project?',
        type: 'input'},
        {name: 'contributing',
        message: 'Who contributed to this project?',
        type: 'input'},
        {name: 'tests',
        message: 'How do I test this project?',
        type: 'input'},
        {name: 'username',
        message: 'What is your GitHub username?',
        type: 'input'},
        {name: 'email',
        message: 'What is your email address?',
        type: 'input'},
        {name: 'fileName',
        message: 'What is the name of your readme?',
        type: 'input'},
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => err ? console.error(err) : console.log(`${fileName}.md created!`));
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userInput();
    writeToFile(answers.fileName, generateMarkdown(answers));
}

// Function call to initialize app
init();
