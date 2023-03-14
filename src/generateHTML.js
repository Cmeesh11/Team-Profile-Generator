const fs = require("fs");
const Manager = require("../lib/manager.js");
const Intern = require("../lib/intern.js");
const Engineer = require("../lib/engineer.js");
const { join } = require('path');

// Returns an HTML snippet of the employee object that is passed in
function addToHTML(employee) {
if (employee instanceof Manager) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${employee.getName()}</h2>
      <h3 class="role">${employee.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">ID: ${employee.getId()}</li>
      <li class="list-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
      <li class="list-item">Office Number: ${employee.getOffice()}</li>
    </ul>
  </div>`;
  } 
else if (employee instanceof Engineer) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${employee.getName()}</h2>
      <h3 class="role">${employee.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">Employee ID: ${employee.getId()}</li>
      <li class="list-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
      <li class="list-item">Github link: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
    </ul>
  </div>`;
}
else if (employee instanceof Intern) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${employee.getName()}</h2>
      <h3 class="role">${employee.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">Employee ID: ${employee.getId()}</li>
      <li class="list-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
      <li class="list-item">School: ${employee.getSchool()}</li>
    </ul>
  </div>`;
}
}

// Generates the html page with the html code that is passed in
function generateHTML(html) {
  fs.writeFile(join(__dirname, "..", "dist", "index.html"), `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
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
}

module.exports = { generateHTML, addToHTML };