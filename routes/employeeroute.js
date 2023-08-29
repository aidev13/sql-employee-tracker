const router = require('express').Router()
const connection = require('../db/connection')
const inquirer = require('inquirer')

const employeeStartPrompt = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'employeeData',
            message: 'Select an option',
            choices: [
                'Get',
                'Post',
                'Put',
                'Delete'
            ]
        }
    ])
    .then(( {employeeData} ) => {
        switch (employeeData) {
            case 'Get':
             getAllEmployees()
        }
    })
    .catch((err) => {throw err})
}

const getAllEmployees = () => {
    console.clear();
    console.log(`
=================
  All Employees
=================
    `);
    const sql = `SELECT * FROM employees`;
                connection.query(sql, (err, rows) => {
                    if (err) {
                        throw err;
                    }
                    console.log("\n");
                    console.table(rows);
                });
}


router.post('/', async (req, res) => {
    const { first_name, last_name, role_id, manager_id } = req.body
    try {
        const result = await connection.promise().query(
            `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`,
            [first_name, last_name, role_id, manager_id]
        )
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }

})

router.get('/', async (req, res) => {

    try {
        const result = await connection.promise().query(
            `SELECT * FROM employees;`
        )
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }

})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await connection.promise().query(
            `SELECT * FROM employees 
            WHERE id = ?;`,
            id
        )
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }

})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const { first_name, last_name, role_id, manager_id } = req.body

    try {
        const result = await connection.promise().query(
            `UPDATE employees
            SET first_name = ?, last_name = ?, role_id = ?, manager_id = ?
            WHERE id = ?`,
            [first_name, last_name, role_id, manager_id, id]
        )
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await connection.promise().query(
            `DELETE FROM employees
            WHERE id = ?`,
            id
        )
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;
module.exports = employeeStartPrompt;