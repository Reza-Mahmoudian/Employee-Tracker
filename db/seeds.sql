INSERT INTO department (name)
VALUES
('Development'), 
('Marketing'),
('Accounting'),
('Human Resources');

INSERT INTO role(title, salary, department_id)
VALUES
('Front-End Developer', 70000, 1),
('Back-End Developer', 74000, 1),
('Lead Developer', 85000, 1),
('Sales Associate', 45000, 2),
('Sales Manager', 60000, 2),
('Accountent', 60000, 3),
('Financial Manager', 62000, 3),
('Marketing Director', 80000, 2),
('Creative Director', 80000, 2),
('Graphic Designer', 68000, 2),
('Hiring Manager', 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Boy', 'Josh', 3, NULL),
('Jamile', 'Gordon', 8, NULL),
('Hank', 'Green', 11, NULL),
('Ali', 'Khadem', 7, NULL),
('Sammy', 'Koyama', 9, NULL),
('Kanye', 'West', 1, 3),
('Barack', 'Obama', 2, 3),
('Maks', 'Girmay', 2, 3),
('Anna', 'Kendrick', 6, 5),
('Meghan', 'Tonjes', 6, 5),
('Hannah', 'Heart', 7, 8),
('Soulja', 'Boy', 5, 7),
('Tom', 'Holland', 3, 9),
('Troye', 'Sivan', 10, 5),
('Nick', 'Miller', 1, 3),
('Juan', 'Valdez', 1, 3);