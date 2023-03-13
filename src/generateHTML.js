const fs = require("fs");
const Manager = require("../lib/manager.js");
const Intern = require("../lib/intern.js");
const Engineer = require("../lib/engineer.js");

// Returns an HTML snippet of the employee object that is passed in
function addToHTML(employee) {
if (employee instanceof Manager) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${Manager.getName()}</h2>
      <h3 class="role">${Manager.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">${Manager.getId()}</li>
      <li class="list-item"><a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
      <li class="list-item">${Manager.getOffice()}</li>
    </ul>
  </div>`;
  } 
else if (employee instanceof Engineer) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${Engineer.getName()}</h2>
      <h3 class="role">${Engineer.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">${Engineer.getId()}</li>
      <li class="list-item"><a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
      <li class="list-item">Github link:<a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
    </ul>
  </div>`;
}
else if (employee instanceof Intern) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${Intern.getName()}</h2>
      <h3 class="role">${Intern.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">${Intern.getId()}</li>
      <li class="list-item"><a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
      <li class="list-item">${Intern.getSchool}</li>
    </ul>
  </div>`;
}
}

// Generates the html page with the html code that is passed in
function generateHTML(html) {
  process.chdir("./dist");
  fs.writeFile("index.html", `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/css/style.css">
    <link rel="stylesheet" href="./template.css">
    <title>Team Page</title>
  </head>
  <body>
    <nav><h1>My Team</h1></nav>
    <div class="flex-container">
      <div class="container">
      ${html}
      </div>
    </div>
  </body>
  </html>`, (err) => err ? console.log(err) : console.log("Generated HTML"));
  process.chdir("../");
}


module.exports = addToHTML;
module.exports = generateHTML;