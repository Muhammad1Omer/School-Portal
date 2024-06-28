CREATE DATABASE IF NOT EXISTS student_records;

USE student_records;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

drop table if exists students;

INSERT INTO students (name, age) VALUES 
('Muhammad Omer', 20),
('Amin Fahim', 22),
('Hasan Waqar', 19),
('Ibrahim Ansari', 21),
('Shariq Usman', 23);

CREATE TABLE registration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_username_password (username, password)
);

drop table if exists registration;	

INSERT INTO registration (username, email, password)
VALUES ('Omer', 'blueorange630@gmail.com', 'password');

