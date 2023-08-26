
DROP DATABASE IF EXISTS departments_db; -- DELETE DATA IF EXISTS
CREATE DATABASE departments_db; -- CREATE DATABASE

USE departments_db;

    -- office, tech, sales
CREATE TABLE departments (
    departmentID INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(75) NOT NULL,
    PRIMARY KEY (departmentID)
);

    -- service tech, sales, install tech, office tech, management
CREATE TABLE roles (
    roleID INT NOT NULL AUTO_INCREMENT,
    jobTitle VARCHAR(125) NOT NULL,
    roleDepartment VARCHAR(125) NOT NULL,
    salary INT NOT NULL,
    PRIMARY KEY (roleID)
);

    -- Nancy, Ben, John, David, Danny, Mike S, Mike H, Russel, Nick, Tim, JP, Aaron, Ally, Matt, Heather
CREATE TABLE employees (
    employeeID INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(75) NOT NULL,
    lastName VARCHAR(75) NOT NULL,
    jobTitle VARCHAR(125) NOT NULL,
    department VARCHAR(125) NOT NULL,
    salary INT NOT NULL,
    reportingManagment VARCHAR(125) DEFAULT 'Mike S',
    PRIMARY KEY (employeeID)
);


INSERT INTO departments (departmentName) VALUES 
('Office'),
('Tech'),
('Sales');

SELECT * FROM departments;