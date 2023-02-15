const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");

const generatePage = require("./page-template")

//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs)

//const [name, github] = profileDataArgs


const promptUser = () => {

return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "github",
        message: "Enter is your Github Username?"
    },
    {
        type: "input",
        name: "about",
        message: "Provide some infromation about yourself?"
    },
    ]);
};



    const promptProject = portfolioData => {
        if (!portfolioData.projects) {
            portfolioData.projects = [];
        }
        console.log(`
      =================
      Add a New Project
      =================
      `);
        return inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
          },
          {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
        ]);
      };

      promptUser()
      .then(promptProject)
      .then(portfolioData => {
          console.log(portfolioData)
      })
      .then(projectAnswers => console.log(projectAnswers))
      .then(projectData => {
          portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
      } else {
          return portfolioData;
      }
  
      })