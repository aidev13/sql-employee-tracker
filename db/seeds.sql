-- seeds.sql is for placeholder data

-- syntax
-- INSERT INTO #table_name (#column_names) VALUES 
-- ('#data'),
-- ('#data');


-- departments
INSERT INTO departments (name) VALUES
('Office'),
('Sales'),
('Tech');

-- roles
INSERT INTO roles (title, salary, department_id) VALUES
('Office Rep', 40000, department_id),
('Sales Person', 45000, department_id),
('Install Tech', 50000, department_id),
('Service Tech', 55000, department_id),
('Operartions', 65000, department_id);

-- employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('David', 'Liebherr', 030, 300),
('John', 'Doe', 030, 300),
('Ben', 'Garrison', 010, 300),
('Danny', 'Greco', 020, 200),
('Nancy', 'Desandras', 010, 100),
('Russal', 'Zein', 030, 300),
('Heather', 'Repp', 010, 100);

