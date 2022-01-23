const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost', 
    port: 3306,
    user: 'root',
    password: '2050748991',
    database: 'employee_tracker'
   
});

db.connect(function(err){
    if(err) throw err;
    console.log('CONNECTED SQL SUCCESSFUL');
})

const trackerChoice = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'options',
            message: 'Pick one of the following options:',
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role'
            ]
        })
        .then(choose => {
            switch(choose.options) {
                case 'View all Departments':
                    allDepartments();
                break;

                case 'View all Roles':
                    allRoles();
                break;

                case 'View all Employees':
                    allEmployees();
                break;

                case 'Add a Department':
                    newDepartment();
                break;

                case 'Add a Role':
                    newRole();
                break;

                case 'Add an Employee':
                    newEmployee();
                break;

                case 'Update an Employee Role':
                    updateRole();
                break;
            };
        });
};

const allDepartments = () => {
    const sql = `SELECT * FROM department`;
    console.table(sql);
};
const allDepartments = () => {
    db.query(`SELECT * FROM department`, (err, rows) => {
        if(err){
            console.log(err);
        }
        console.table(rows);
    });
    trackerChoice();
};