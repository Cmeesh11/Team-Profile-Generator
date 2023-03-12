// Including files
const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const addToHTML = require("./src/generateHTML");
const generateHTML = require("./src/generateHTML");
const generateCss = require("./src/generateCSS");
const inquirer = require("inquirer");
const fs = require("fs");

// Variables
let employees = "";

// Starts the program with an inquirer prompt
function init() {
  // Prompts for manager details
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the team manager's name:",
      name: "managerName"
    },
    {
      type: "number",
      message: "Enter the manager's employee ID:",
      name: "managerID"
    },
    {
      type: "input",
      message: "Enter the manager's email address:",
      name: "managerEmail"
    },
    {
      type: "number",
      message: "Enter the manager's office number:",
      name: "managerNum"
    },
    {
      type: "list",
      message: "Select an option:",
      choices: ["Add an engineer", "Add an intern", "Finish building team"],
      name: "addRole"
    }
  ]).then((response) => {
    // Creating variables
    let name = response.managerName;
    let id = response.managerID;
    let email = response.managerEmail;
    let officeNumber = response.managerNum;
    // Creating new manager object
    let managerObj = new Manager(name, id, email, officeNumber);
    // Adding html to the employees string
    employees += addToHTML(managerObj);
    // Adds a new role if user selected engineer or intern
    addRole(response.addRole);
  });
}

function addRole(response) {
  // Prompts user for engineer details if add an engineer is selected
  if (response === "Add an engineer") {
    inquirer.prompt([
      {
        type: "input",
        message: "Enter the engineer's name:",
        name: "engineerName"
      },
      {
        type: "number",
        message: "Enter the engineer's ID:",
        name: "engineerID"
      },
      {
        type: "input",
        message: "Enter the engineer's email address:",
        name: "engineerEmail"
      },
      {
        type: "input",
        message: "Enter the engineer's GitHub username:",
        name: "engineerGitHub"
      },
      {
        type: "list",
        message: "Select an option:",
        choices: ["Add an engineer", "Add an intern", "Finish building team"],
        name: "addRole"
      }
    ]).then((resp) => {
      // Creating variables
      let name = resp.engineerName;
      let id = resp.engineerID;
      let email = resp.engineerEmail;
      let github = resp.engineerGitHub;
      // Creating new Engineer object
      let engineerObj = new Engineer(name, id, email, github);
      // Adding html to the employees string
      employees += addToHTML(engineerObj);
      // If user chooses to add another role, rerun addRole function
      if (resp.addRole === "Add an engineer" || resp.addRole === "Add an intern") {
        return addRole(resp.addRole);
      } // Generates page if user finishes building team
      else if (resp.addRole === "Finish building team") {
        return generateHTML(employees);
      }
    })
    // Prompts for intern details if add an intern is selected
  } else if (response === "Add an intern") {
    inquirer.prompt([
      {
        type: "input",
        message: "Enter the intern's name:",
        name: "internName"
      },
      {
        type: "number",
        message: "Enter the intern's ID:",
        name: "internID"
      },
      {
        type: "input",
        message: "Enter the intern's email address:",
        name: "internEmail"
      },
      {
        type: "input",
        message: "Enter the intern's school name:",
        name: "internSchool"
      },
      {
        type: "list",
        message: "Select an option:",
        choices: ["Add an engineer", "Add an intern", "Finish building team"],
        name: "addRole"
      }
    ]).then((resp) => {
      // Creating variables
      let name = resp.internName;
      let id = resp.internID;
      let email = resp.internEmail;
      let school = resp.internSchool;
      // Creating new Intern object
      let internObj = new Intern(name, id, email, school);
      // Adding html to the employees string
      employees += addToHTML(internObj);
      // If user chooses to add another role, rerun addRole function
      if (resp.addRole === "Add an engineer" || resp.addRole === "Add an intern") {
        return addRole(resp.addRole);
      } // Generates page if user finishes building team
      else if (resp.addRole === "Finish building team") {
        return generateHTML(employees);
      }
    })
  } else {
    return;
  }
}

init();
