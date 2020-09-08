const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');



// array of questions for user
function questions(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your Project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description of your project...',
            name:'description'
        },
        {
            type: 'input',
            message: 'Provide the installation instructions for the project. If there are no instructions, type "None"',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How would you like your application to be used?',
            name: 'usage'
        },
        {
            type: 'checkbox',
            message: 'Choose license',
            name: 'license',
            choices: [
                'GPL',
                'MIT',
                'Apache',
                'No License'
            ]
        },
        {
            type: 'input',
            message: 'Add guidelines for contribution',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Write tests for your application',
            name: 'test'
        },
        {
           type:'input',
           message: 'Do you have any questions?',
           name: 'questions'
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
       

    ])
}


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            throw err;
        }
        console.log('Success')
    });
}

// function to initialize program

function init() {
    questions().then(answers => {
        const data = generateMarkdown(answers);
        writeToFile('README.md', data)
    })
}

// function call to initialize program
init();
