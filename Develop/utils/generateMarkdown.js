const licenseArray = ["MIT", "Apache", "GPL", "BSD", "None"];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseArray[0]){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license===licenseArray[1]){
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  } else if (license===licenseArray[2]){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license===licenseArray[3]){
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
  } else if (license===licenseArray[4]){
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArray[0]){
    return `https://opensource.org/licenses/MIT`
  } else if (license===licenseArray[1]){
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license===licenseArray[2]){
    return `https://www.gnu.org/licenses/gpl-3.0`
  }else if (license===licenseArray[3]){
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else if (license===licenseArray[4]){
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArray[0]){
    return `MIT License`
  } else if (license===licenseArray[1]){
    return `Apache License 2.0`
  } else if (license===licenseArray[2]){
    return `GPL v3` 
  } else if (license===licenseArray[3]){
    return `BSD 3-Clause`
  } else if (license===licenseArray[4]){
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [Tests](#tests)
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributers
  ${data.contributing}

  ## Tests
  ${data.tests}

  

`;
}

module.exports = generateMarkdown;
