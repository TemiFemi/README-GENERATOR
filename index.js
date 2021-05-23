// Node standard Library for reading and writing files
const fs = require("fs");


const inquirer = require("inquirer");

// questions that will be asked to the user
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "projectName",
    },
    {
        type: "input",
        message: "Briefly describe your project.",
        name: "projectDescription"
    },
    {
        type: "input",
        message: "Briefly described how to install your project",
        name: "projectInstall"
    },
    {
        type: "input",
        message: "Explain how your project is used.",
        name: "projectUsage"
    },
    {
        type: "list",
        message: "Select what type of projectLicense you used for this project.",
        choices: ["MIT", "ISC", "GNU GPLv3"],
        name: "projectprojectLicense"
    },
    {
        type: "input",
        message: "Explain the contribution guidelines for this project",
        name: "projectContributions",
    },
    {
        type: "input",
        message: "Explain how to run tests for yout project.",
        name: "projectTests",
    },
    {
        type: "input",
        message: "Enter instructions on how you might be contacted.",
        name: "contactInstructions",
    },
    {
        type: "input",
        message: "Please enter your E-Mail address",
        name: "emailInstructions",
    },
    {
        type: "input",
        message: "Please enter your Github Username.",
        name: "gitHub",
    },
];

// Launching the prompt interface (inquirer.prompt) with our questions array that will wait for the user's input
// User input value are called back (.then method) and applied to the response argument 
inquirer.prompt(questions).then((response) => {
    if (response.projectLicense === 'ISC') {
        response.projectLicense = '[![projectLicense: ISC](https://img.shields.io/badge/projectLicense-ISC-blue.svg)](https://opensource.org/projectLicenses/ISC)'
    }
    if (response.projectLicense === 'GNU GPL v3') {
        response.projectLicense = '[![projectLicense: GPL v3](https://img.shields.io/badge/projectLicense-GPLv3-blue.svg)](https://www.gnu.org/projectLicenses/gpl-3.0)'
    } else {
        response.projectLicense = '[![projectLicense: MIT](https://img.shields.io/badge/projectLicense-MIT-yellow.svg)](https://opensource.org/projectLicenses/MIT)'
    }

    const result = `

# Table of Contents
1. [Name](#Name)
2. [Description](#Description)
3. [Installation Instructions](#Installation-Instructions)
4. [Usage](#Usage)
5. [projectLicense](#projectLicense)
6. [Contributions](#Contributions)
7. [Tests](#Tests)
8. [Questions](#Questions)
9. [Link to ReadMeGenerator Demonstration](#Video Demonstration)

# Name
 ${response.projectName}

# Description
 ${response.projectDescription}

# Installation Instructions
 ${response.projectInstall}

# Usage
${response.projectUsage}

# projectLicense
 ${response.projectLicense}

# Contributions
 ${response.projectContributions}

# Tests
 ${response.projectTests}

# Questions
 ${response.contactInstructions}
 ${response.emailInstructions}
 [Github Profile](https://github.com/${response.gitHub}`;

    console.log(result);
    console.log(response);
    // User responses are logged using the "fs.writeFile" to the generated Read Me file
    fs.writeFile("GENERATEDREADME.md", result, (err) => {
        err ? console.log(err) : console.log('Congratulations 🎉! Your Read Me was generated.')
    });
});

