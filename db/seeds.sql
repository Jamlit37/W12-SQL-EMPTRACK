INSERT INTO department (name)
VALUES  ("Finance"),
("Sales"),
("Legal"),
("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 2),
("Salesperson", 80000, 2),
("Lead Engineer", 135000, 4),
("Software Engineer", 120000, 4),
("Accountant Manager", 110000, 1),
("Accountant", 90000, 1),
("Legal Team Lead", 100000, 3),
("Lawyer", 125000, 3);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Hassan", "Afshin-Azar", 1, null),
("Ramakesh","Papadopoulis", 2, 1),
("Amy","Ea", 3, null),
("Aaron","Ter", 4, 3),
("Robert","Balmes", 5, null),
("Kenny","Gerfast", 6, 5),
("Genesis","Perera", 7, null),
("Patrick","Rezel", 8, 7);

