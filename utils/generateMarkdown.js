// function to generate markdown for README
function generateMarkdown(data) {
  
// License data
let licenseOptions = `${data.license}`;
let links = '';

if (licenseOptions === 'Mozilla Public License 2.0') {
  licenseOptions = 'MozillaPublicLicense2.0'
  links = 'https://www.mozilla.org/en-US/MPL/2.0/';
}

};


let markdownData = `

# ${data.title}

## Description

${data.description}

`

let tableOfContents = `

## Table of Contents`;

if (data.installation) {
  tableOfContents += `
  
  * [Installation](#installation)
  `;

  
};

markdownData += tableOfContents;

markdownData += `
* [Questions](#questions);
`

module.exports = generateMarkdown;




return markdownData;