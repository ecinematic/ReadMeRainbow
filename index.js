// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

// TODO: Create an array of questions for user input

const generateHTML = ({ title, description, installation, usage, credits, license, badges, features, contribute, name, email }) =>
`# ${title}

## Description
${description}

## Installation

${installation}

## Usage

${usage}

## Credits
Created by ${name} 
${email}

Additional credits: ${credits}

## License

${license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

${badges}

## Features

${features}

## How to Contribute

${contribute}

## Tests

`;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your GitHub user name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project.',
      },
      {
          type: 'input',
          name: 'installation',
          message: 'What command should be run to run the tests?',
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Explain the usage of this project.',
      },
      {
          type: 'input',
          name: 'credits',
          message: 'Provide information on any outside credit.',
      },
      {
        type: 'checkbox',
        message: 'What license should your project have?',
        name: 'stack',
        choices: ['None', 'MIT', 'Apache 2.0', 'GNU v3', 'BSD 3-Clause', 'Mozilla Public License 2.0'],
      },
      {
          type: 'input',
          name: 'badges',
          message: 'List any badges.',
      },
      {
          type: 'input',
          name: 'features',
          message: 'List any features.',
      },
      {
          type: 'input',
          name: 'contribute',
          message: 'How to contribute?',
      },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your README.md file!')
    );
  });
