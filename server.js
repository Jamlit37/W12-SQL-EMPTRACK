const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "p@ssw0rd",
  database: "employee_tracker_db"
});

