import inquirer from 'inquirer';

import fs from 'fs/promises'
// import Choices from 'inquirer/lib/objects/choices';


let {title, 
    description, 
    installation, 
    instructions, 
    licence, 
    contributing, 
    tests, 
    questions, 
    email, 
    username} = await inquirer

    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Please enter your project title (README.md Title)",

            // This checks for user input
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("please enter a title")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Please give the description of your project",
            
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please detail the installation process",
        },
        {
            type: 'input',
            name: 'instructions',
            message: "Please give installation instructions",
        },
        {
            type: 'list',
            name: 'licence',
            message: 'Please choose licence type.',
            choices: ['MIT licence', 'Mozilla Public licence 2.0', 'Eclipse Public licence 1.0', 'Apache 2.0 License', 'SIL Open Font License 1.1']
            },
            {
                type: 'input',
                name: 'username',
                message: "Please enter your GitHub username",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter your email address)",
            },
            {
                type: 'input',
                name: 'questions',
                message: "Please list instructions for contact",
            },
            {
                type: 'input',
                name: 'tests',
                message: "Please give details for testing",
            },
            {
                type: 'input',
                name: 'contributing',
                message: "Please explain contribution details",
            }
            
        
    ]);

// licence info based on selection

let licenceURL = '';
let licenceImg = '';
// let mozillaBadge = 'https://img.shields.io/badge/licence-MPL_2.0-brightgreen.svg';

if (licence === 'MIT licence') {
    licenceURL = 'https://opensource.org/licence/mit/'
    licenceImg = 'https://img.shields.io/badge/licence-MIT-yellow.svg'
    
}
if (licence === 'Mozilla Public licence 2.0') {
    licenceURL = 'https://www.mozilla.org/en-US/MPL/2.0/'
    licenceImg = 'https://img.shields.io/badge/licence-MPL_2.0-brightgreen.svg'
}

if (licence === 'Eclipse Public licence 1.0') {
    licenceURL = 'https://www.eclipse.org/legal/epl-v10.html'
    licenceImg = 'https://img.shields.io/badge/licence-EPL_1.0-red.svg'
}

if (licence === 'Apache 2.0 License') {
    licenceURL = 'https://www.apache.org/licenses/LICENSE-2.0'
    licenceImg = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
}

if (licence === 'SIL Open Font License 1.1') {
    licenceURL = 'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL#5667e9e4'
    licenceImg = 'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg'
}


let readmeData = `

# ${title} 

## Description 

${description}

![licence](${licenceImg})

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Tests](#tests)

* [Questions](#questions)

* [Licence](#licence)

* [Contributors](#contributors)



## Installation 
${installation}

## Usage

_Usage instructions:_

${instructions}

_please remember to add screen captures of your application!_

## Tests

_Details for testing if applicable:_

${tests}

# Questions

${questions}

## _Contact:_

GitHub Profile: [${username}](https://github.com/${username})

Email: [${email}](mailto:${email})

## Licence

* _This application has the **${licence}.**_
For more info, please go to the [licence description](${licenceURL})

# Contributors

${contributing}

`



await fs.writeFile('README1.md', readmeData);
