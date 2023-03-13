const fs = require("fs");
const Manager = require("../lib/manager.js");
const Intern = require("../lib/intern.js");
const Engineer = require("../lib/engineer.js");

function addToHTML(employee) {
if (employee instanceof Manager) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${employee.name}</h2>
      <h3 class="role">${Manager.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">${employee.id}</li>
      <li class="list-item">${employee.email}</li>
      <li class="list-item">${employee.officeNumber}</li>
    </ul>
  </div>`;
  } 
else if (employee instanceof Engineer) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${employee.name}</h2>
      <h3 class="role">${Engineer.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">${employee.id}</li>
      <li class="list-item">${employee.email}</li>
      <li class="list-item">${employee.officeNumber}</li>
    </ul>
  </div>`;
}
else if (employee instanceof Intern) {
  return `
  <div class="card">
    <div class="card-header">
      <h2 class="name">${employee.name}</h2>
      <h3 class="role">${Intern.getRole()}</h3>
    </div>
    <ul>
      <li class="list-item">${employee.id}</li>
      <li class="list-item">${employee.email}</li>
      <li class="list-item">${employee.officeNumber}</li>
    </ul>
  </div>`;
}
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
${html}
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