
import mysql from 'mysql2'; // Use ES6 import/export

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'application_db'
});

const init = async () => {
    const rolesResults = await connection.promise().query(
    `INSERT INTO roles (jobTitle, roleDepartment, salary) VALUES
    (?,?,?)`
    ['Customer Service', 'Office', 40000]
    
    )
    const roleData = await connection.promise().query(
        'SELECT * FROM roles'
    )
    console.log(roleData)
}

init()
