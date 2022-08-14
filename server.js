const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "p@ssw0rd",
  database: "employee_tracker_db"
});

db.connect(function (err) {
  if (err) throw err;
  starterQA();
});

function starterQA() {
 console.log("Hi 👋! Welcome to your employee database");

  inquirer.prompt({
      type: "list",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee role",
        "Quit"
      ],
      message: "What would you like to do?",
      name: "selection"
    })

    .then(function (result) {
      switch (result.selection) {
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDepartment();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          end();
      }
    });
}


function addDepartment() {
  inquirer.prompt({

    type: "input",
    message: "What is the department name?",
    name: "depName"

  }).then(function (answer) {
    db.query("INSERT INTO department (name) VALUES (?)", [answer.depName], function (err, res) {
      if (err) throw err;
      console.table(res)
      starterQA()
    })
  })
}


function addRole() {
  inquirer.prompt([
      {
        type: "input",
        message: "What is the role name?",
        name: "roleName"
      },
      {
        type: "input",
        message: "What is the annual salary for the role?",
        name: "salaryAnnual"
      },
      {
        type: "input",
        message: "What is the department ID number?",
        name: "depID"
      }
    ])

    .then(function (answer) {
      db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryAnnual, answer.depID], function (err, res) {
        if (err) throw err;
        console.table(res);
        starterQA();
      });
    });
}

function addEmployee() {
  inquirer.prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "empFirstName"
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "empLastName"
      },
      {
        type: "input",
        message: "What is the employee's role ID number?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is their manager's ID number?",
        name: "managerID"
      }
    ])

    .then(function (answer) {
      db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.empFirstName, answer.empLastName, answer.roleID, answer.managerID], function (err, res) {
        if (err) throw err;
        console.table(res);
        starterQA();
      });
    });
}

function viewDepartment() {
  db.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    starterQA();
  });
}

function viewRoles() {
  db.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    starterQA();
  });
}

function viewEmployees() {
  db.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    starterQA();
  });
}

function updateEmployee() {
  inquirer.prompt([
      {
        type: "input",
        message: "Which employee would you like to update?",
        name: "empUpdate"
      },

      {
        type: "input",
        message: "What role would you like to change to?",
        name: "updateRole"
      }
    ])

    .then(function (answer) {
      db.query('UPDATE employee SET role_id=? WHERE first_name= ?', [answer.updateRole, answer.empUpdate], function (err, res) {
        if (err) throw err;
        console.table(res);
        starterQA();
      });
    });
}

function end() {
  db.end();
  process.exit();
}
