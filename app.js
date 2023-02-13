const fs = require("fs");

const generatePage = require("./page-template")

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs)

const [name, github] = profileDataArgs

const printProfileData = (profileDataArr) => {
    for (let i = 0; i < profileDataArr; i += 1) {
        console.log(profileDataArr[i])
        console.log("============")


profileDataArr.forEach(profileItem => console.log(profileItem))
    }
};

printProfileData(profileDataArgs)




fs.writeFile("index.html", generatePage(name, github), err => {
    if (err) throw err;

    console.log("Portfolio complete! Check out index.html to see the output!")
});