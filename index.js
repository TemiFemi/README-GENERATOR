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

// Launching the prompt interface (inquirer.prompt) with our questions array that will wait for the user's input
// User input value are called back (.then method) and applied to the response argument 
inquirer.prompt(questions).then((response) => {

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
# ${response.gitHub}`;

    console.log(result);
    console.log(response);
    // User responses are logged using the "fs.writeFile" to the generated Read Me file
    fs.writeFile("GENERATEDREADME.md", result, function (err) {
        if (err) return console.log(err);
        console.log("Congratulations 🎉! Your Read Me was generated.")
    });
});

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  `;
}

module.exports = generateMarkdown;