const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "course",
});

app.post('/register', (request, response) => {
  const { name, email, contact, selectedName } = request.body;
  const sql = "INSERT INTO register (name, email, Contact, Course) VALUES (?, ?, ?, ?)";
  const values = [name, email, contact, selectedName];
  server.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error:", err);
      response.status(500).json({ message: "Error raised" });
    } else {
      console.log("Registration successful");
      response.json({ message: "Registration successful" });
    }
  });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log("Server is running on port${PORT}");
});