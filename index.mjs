import inquirer from 'inquirer';

import fs from 'fs/promises'


let {title, subtitle} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What's the readme title?",
        },
        {
            type: 'input',
            name: 'subtitle',
            message: "What's the subtitle",
            default() {
                return 'test';
            },
        },
    ])


let readmeData = `

# ${title}

## ${subtitle}

`

await fs.writeFile('README.md', readmeData);