const router = require('express').Router()
const cTable = require('console.table')
const inquirer = require('inquirer');
const connection = require('../db/connection');
const runMenu = require('../index')



const departmentMenu = () => {
    console.clear();
    console.log(`
=================
 All Departments
=================
    `);
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'deptMenu',
                message: 'Select an option',
                choices: [
                    'view',
                    'add',
                    'Go Back'
                ]
            }
        ])
        .then(({ deptMenu }) => {
            if (deptMenu === 'view') {
                const sql = `SELECT * FROM departments`;
                connection.query(sql, (err, rows) => {
                    if (err) {
                        throw err;
                    }
                    console.log("\n");
                    console.table(rows);
                });
                backMenu()
                console.clear()
                console.log(`
=================
    View Data
=================
          `);
                console.log("Press ENTER to go back")
                return
            }
            else if (deptMenu === 'add') {
                console.clear()
                console.log(`
=================
     ADD DATA
=================
          `);
                backMenu()
            }
            else if (deptMenu === 'Go Back') {
                backToMainMenu();
            }
        })
        .catch((err) => {
            console.log(err)
        })

};

const backMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'goBack',
                message: 'Go Back',
                choices: [
                    'Back'
                ]
            }
        ]).then(({ goBack }) => {
            if (goBack === 'Back')
                departmentMenu();
        })
};

const backToMainMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'backtomain',
                message: 'Go Back',
                choices: [
                    'Back'
                ]
            }
        ]).then(({ backtomain }) => {
            if (backtomain === 'Back')
            console.clear()
            runMenu();
        })
};


module.exports = router;
module.exports = departmentMenu;