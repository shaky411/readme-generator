import inquirer from 'inquirer';

import fs from 'fs/promises'


let {first_name, last_name} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What's your last name",
            default() {
                return 'Doe';
            },
        },
    ])

console.log(first_name, last_name);

let htmlDoc = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${first_name} ${last_name}!</h1>
</body>
</html>

`

await fs.writeFile('README.md', htmlDoc)











fs.writeFile