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
        message: "Select what type of license you used for this project.",
        choices: ["MIT", "ISC", "Apache License 2.0", "GNU GPLv3"],
        name: "projectLicense"
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

const result = `
# Table of Contents
1. [Name](#Name)
2. [Description](#Description)
3. [Installation Instructions](#Installation-Instructions)
4. [Usage](#Usage)
5. [License](#License)
6. [Contributions](#Contributions)
7. [Tests](#Tests)
8. [Questions](#Questions)

# Name
# ${response.projectName}
# Description
# ${response.projectDescription}
# Installation Instructions
# ${response.projectInstall}
# Usage
# ${response.projectUsage}
# License
# ${response.projectLicense}
# Contributions
# ${response.projectContributions}
# Tests
# ${response.projectTests}
# Questions
# ${response.contactInstructions}
# ${response.emailInstructions}
# ${response.gitHub}`
