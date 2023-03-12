const fs = require("fs");
const Manager = require("../lib/manager.js");
const Intern = require("../lib/intern.js");
const Engineer = require("../lib/engineer.js");

function addToHTML(employee) {
  console.log("ADD TO HTML");
  let employeeText;
if (employee instanceof Manager) {
  employeeText = `
  <ul>
    <li>${employee.name}</li>
    <li>${employee.id}</li>
    <li>${employee.email}</li>
    <li>${employee.officeNumber}</li>
  </ul>`;
  } 
else if (employee instanceof Engineer) {
  employeeText = `
  <ul>
    <li>${employee.name}</li>
    <li>${employee.id}</li>
    <li>${employee.email}</li>
    <li>${employee.github}</li>
  </ul>`;
}
else if (employee instanceof Intern) {
  employeeText = `
  <ul>
    <li>${employee.name}</li>
    <li>${employee.id}</li>
    <li>${employee.email}</li>
    <li>${employee.officeNumber}</li>
  </ul>`;
}
return employeeText;
}

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
  <title>Team Page</title>
</head>
<body>
${JSON.stringify(html)}
</body>
</html>`, (err) => {
  if (err) {
    throw err;
  }
});
process.chdir("./");
}


module.exports = addToHTML;
module.exports = generateHTML;