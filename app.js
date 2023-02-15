const inquirer = require("inquirer")

const generatePage = require("./page-template")

//const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs)

//const [name, github] = profileDataArgs



inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your name?"
}])
    .then(answer => console.log(answer));