# School Portal

School Portal is a web application designed to manage student records efficiently. This project demonstrates a comprehensive understanding of web development using Node.js, Express, MySQL, and AJAX for asynchronous data handling. It provides features for student management, user authentication, and teacher registration.

## Features

- **Student Management:**
  - Create, read, update, and delete student records.
- **User Authentication:**
  - Secure login for users.
- **Teacher Registration:**
  - Register new teachers in the system.
- **Asynchronous Data Handling:**
  - Implemented AJAX for smooth and efficient data updates without refreshing the page.

## Technologies Used

- **Node.js:** JavaScript runtime environment.
- **Express:** Fast, unopinionated, minimalist web framework for Node.js.
- **MySQL:** Relational database management system.
- **AJAX:** Asynchronous JavaScript and XML, used for making asynchronous requests to the server.

## Setup and Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Muhammad1Omer/School-Portal.git
    cd School-Portal
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Setup MySQL database:**
    - Create a MySQL database named `student_records`.
    - Run the following database.SQL script to create the required tables:

4. **Configure the database connection:**
    - Update the database configuration in the code if necessary in the main.js file at the top:

    ```javascript
    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'student_records',
        user: 'root',
        password: '123456'
    });
    ```

5. **Start the server:**
    ```bash
    node main.js
    ```

6. **Access the application:**
    - Open your browser and navigate to [http://localhost:8000/login](http://localhost:8000/login) to access the login page.

## Learning Outcomes

This project provided valuable experience in:

- Building a full-stack web application using Node.js and Express.
- Managing a MySQL database for storing and retrieving data.
- Implementing AJAX for asynchronous communication between the client and server, improving user experience by updating parts of the web page without reloading.
- Handling user authentication and registration securely.

## Future Enhancements

- **Improved UI/UX:**
  - Enhance the front-end design for a more intuitive user experience.
