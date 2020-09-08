// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](questions)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## Test:
${data.test}

## License:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg 'License Badge')
${data.license}

## Questions:
If you have any questions please feel free to contact me using the following links:

Github: [Github](https://github.com/${data.username})
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
