-- syntax
-- INSERT INTO #table_name (#column_names) VAULES 
-- ('#data'),
-- ('#data');


-- departments
INSERT INTO departments (departmentName) VALUES 
('Office'),
('Tech'),
('Sales');

SELECT * FROM departments;

-- roles
INSERT INTO roles (jobTitle, roleDepartment, salary) VALUES 
('Service Tech', 'Tech', 55000),
('Sales Person', 'Sales', 48000),
('Install Tech', 'Tech', 50000),
('Office Tech', 'Office', 55000),
('Management', 'Office', 75000);

SELECT * FROM roles;

-- employees

