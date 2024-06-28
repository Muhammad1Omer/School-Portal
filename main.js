const express = require("express");
const path = require("path");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'student_records',
    user: 'root',
    password: '123456'
});

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "Public" directory
app.use(express.static(path.join(__dirname, 'Public')));

// Connect to the database
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
});

// Routes to serve HTML files
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "Login.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "Signup.html"));
});

app.get("/Homepage", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend.html"));
});

// Create a new student record
app.post("/students", (req, res) => {
    const { name, age } = req.body;
    const query = "INSERT INTO students (name, age) VALUES (?, ?)";
    connection.query(query, [name, age], (err, result) => {
        if (err) {
            console.error("Error creating student:", err);
            res.status(500).send("Error creating student");
            return;
        }
        res.status(201).send("Student created successfully");
    });
});

// Read all student records
app.get("/students", (req, res) => {
    const query = "SELECT * FROM students";
    connection.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching students:", err);
            res.status(500).send("Error fetching students");
            return;
        }
        res.json(results);
    });
});

// Read a single student record
app.get("/students/:id", (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM students WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error("Error fetching student:", err);
            res.status(500).send("Error fetching student");
            return;
        }
        res.json(result[0]);
    });
});

// Update a student record
app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const query = "UPDATE students SET name = ?, age = ? WHERE id = ?";
    connection.query(query, [name, age, id], (err, result) => {
        if (err) {
            console.error("Error updating student:", err);
            res.status(500).send("Error updating student");
            return;
        }
        res.send("Student updated successfully");
    });
});

// Delete a student record
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM students WHERE id = ?";
    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error("Error deleting student:", err);
            res.status(500).send("Error deleting student");
            return;
        }
        res.send("Student deleted successfully");
    });
});

// Handle user login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const query = "SELECT * FROM registration WHERE username = ? AND password = ?";
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error("Error querying database:", err);
            res.status(500).send("Error querying database");
            return;
        }

        if (results.length === 1) {
            res.redirect("/Homepage");
        } else {
            res.sendFile(path.join(__dirname, 'Login.html'), {
                headers: {
                    'Content-Type': 'text/html',
                }
            });
        }
    });
});

// Handle teacher registration
app.post("/register-Teacher", (req, res) => {
    const { Username, email, password } = req.body; 
    const query = "INSERT INTO registration (username, email, password) VALUES (?, ?, ?)";
    connection.query(query, [Username, email, password], (err, result) => {
        if (err) {
            console.error("Error creating Teacher:", err);
            res.status(500).json({ success: false, message: "Error creating Teacher" });
            return;
        }
        res.status(201).json({ success: true }); 
    });
});

// Start the server
const port = 8000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/login`);
});
