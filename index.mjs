import inquirer from 'inquirer';

import fs from 'fs/promises'
// import Choices from 'inquirer/lib/objects/choices';


let {title, description, installation, instructions, license, contributing, tests, questions} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Please enter your project title (README.md Title)",

            // This checks for use input
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
            type: 'confirm',
            name: 'confirmInstallationProcess',
            message: 'Would you like to add an installation process?'
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please detail the installation process",
            when: ( {confirmInstallationProcess} ) => {
                if (confirmInstallationProcess) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsageInstructions',
            message: 'Would you like to add usage instructions?'
        },
        {
            type: 'input',
            name: 'instructions',
            message: "Please give installation instructions",
            when: ( {confirmUsageInstructions} ) => {
                if (confirmUsageInstructions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose license type.',
            choices: ['MIT License', 'Mozilla Public License 2.0', 'Eclipse Public License 1.0']
            },
            

    ])

// License info based on selection

let licenseURL = '';
let licenseImg = '';
// let mozillaBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';

if (license === 'MIT License') {
    licenseURL = 'https://opensource.org/license/mit/'
    licenseImg = 'https://img.shields.io/badge/License-MIT-yellow.svg'
    
}
if (license === 'Mozilla Public License 2.0') {
    licenseURL = 'https://www.mozilla.org/en-US/MPL/2.0/'
    licenseImg = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
}

if (license === 'Eclipse Public License 1.0') {
    licenseURL = 'https://www.eclipse.org/legal/epl-v10.html'
    licenseImg = 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
}


let readmeData = `

# ${title} 

## Description 

${description}

![License](${licenseImg})

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Licence](#licence)


## Installation 
${installation}

## Usage

_Usage instructions:_

${instructions}

b


b


b


b


b


b


b


b


b


b


b


b
b


b


b


b


b


b


b


b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b
b

# Licence

* _This application has the **${license}.**_
For more info, please go to the [license description](${licenseURL})
`


await fs.writeFile('README1.md', readmeData);






// {
//     type: 'input',
//     name: 'description',
//     message: "Please give the description of your project",
//     default() {
//         return;
//     },
// },